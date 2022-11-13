import {
  Button,
  Divider,
  Select,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  ModalFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { useEffect, useState } from "react";
import { NotFound } from "../components/import";
import classes from "./style.module.css";

export default function Transactions() {
  const todayDate = new Date().toLocaleDateString();

  const {
    isOpen: isDatePickerOpen,
    onOpen: onDatePickerOpen,
    onClose: onDatePickerClose,
  } = useDisclosure();
  const {
    isOpen: isFilterModalOpen,
    onOpen: onFilterModalOpen,
    onClose: onFilterModalClose,
  } = useDisclosure();

  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);

  const handleClick = (e) => {
    switch (e.target.value) {
      case "Today": {
        const todayDate = new Date();
        setDate(todayDate.toLocaleDateString());
        break;
      }
      case "Yesterday": {
        const todayDate = new Date();
        let lastDay = new Date(todayDate.setDate(todayDate.getDate() - 1));
        setDate(lastDay.toLocaleDateString());
        break;
      }
      case "Last_7": {
        const todayDate = new Date();
        let lastDay = new Date(todayDate.setDate(todayDate.getDate() - 7));
        setDate(lastDay.toLocaleDateString());
        break;
      }
      case "Last_30": {
        const todayDate = new Date();
        let lastDay = new Date(todayDate.setDate(todayDate.getDate() - 30));
        setDate(lastDay.toLocaleDateString());
        break;
      }
      case "Custom_date": {
        onDatePickerOpen();
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    const customDate = `${selectedDates[0].toLocaleDateString()} - ${selectedDates[1].toLocaleDateString()}`;
    setDate(customDate);
  }, [isDatePickerOpen]);

  return (
    <>
      <section className={classes.wrapper_card}>
        <article className={classes.filter_button_container}>
          <div>
            <Popover placement="top-start">
              <PopoverTrigger>
                <Button role="button" className={classes.filter_button}>
                  <AddIcon />
                  <span style={{ margin: "0 5px" }}>New</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className={classes.popover_content} mb={2}>
                <PopoverArrow bgColor="var(--bg-dark-blue)" />
                <PopoverBody>You dont have any account</PopoverBody>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Select
              name="calender"
              border="none"
              cursor="pointer"
              onClick={handleClick}
            >
              <option disabled>
                {date.length < 11 && todayDate !== date
                  ? `${date} - ${todayDate}`
                  : `${date}`}
              </option>
              <option value="Today">Today</option>
              <option value="Yesterday">Yesterday</option>
              <option value="Last_7">Last 7 days</option>
              <option value="Last_30">Last 30 days</option>
              <option value="Custom_date">Custom date</option>
            </Select>
            <Modal
              isCentered
              onClose={onDatePickerClose}
              isOpen={isDatePickerOpen}
              motionPreset="slideInBottom"
            >
              <ModalOverlay />
              <ModalContent className={classes.modal_content}>
                <ModalHeader className={classes.modal_header}>
                  <p>Show transactions in range</p>
                  <ModalCloseButton />
                </ModalHeader>
                <ModalBody padding="10px">
                  <RangeDatepicker
                    selectedDates={selectedDates}
                    onDateChange={setSelectedDates}
                    name="custom_date_picker"
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
          <div>
            <Button
              role="button"
              className={classes.filter_button}
              onClick={() => onFilterModalOpen()}
            >
              <SearchIcon />
              <Modal
                isCentered
                onClose={onFilterModalClose}
                isOpen={isFilterModalOpen}
                motionPreset="slideInBottom"
              >
                <ModalOverlay />
                <ModalContent className={classes.modal_content}>
                  <ModalHeader className={classes.modal_header}>
                    Filter transactions
                    <ModalCloseButton />
                  </ModalHeader>
                  <ModalBody padding="12px 20px">
                    <div style={{ marginBottom: "10px" }}>
                      <label htmlFor="account_filter_select">Account</label>
                      <div style={{ padding: "0 10px" }}>
                        <Select
                          placeholder="Select account"
                          size="md"
                          variant="filled"
                          marginTop="5px"
                          id="accoutn_filter_select"
                        >
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                      </div>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <label htmlFor="tag_filter_select">Tag</label>
                      <div style={{ padding: "0 10px" }}>
                        <Select
                          placeholder="Select tag"
                          size="md"
                          variant="filled"
                          marginTop="5px"
                          id="tag_filter_select"
                        >
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter padding="12px 20px">
                    <ButtonGroup gap="1">
                      <Button>Reset</Button>
                      <Button colorScheme="green">Apply</Button>
                    </ButtonGroup>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Button>
          </div>
        </article>
        <article className={classes.transactions_main}>
          <div>
            <NotFound text="No transactions found" />
          </div>
          <div className={classes.total_transactions}>
            <div className={classes.transactions_badge}>
              <p>Total income</p>
              <p className={classes.digit_count}>1.20 TOMAN</p>
            </div>
            <div className={classes.transactions_badge}>
              <p>Total expense</p>
              <p className={classes.digit_count}>1.20 TOMAN</p>
            </div>
            <div className={classes.divider_container} style={{ width: "20%" }}>
              <Divider
                border={2}
                borderColor="var(--bg-dark-blue)"
                margin="5px 0"
                width="96%"
              />
              <p className={classes.digit_count} style={{ float: "right" }}>
                0.00
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
