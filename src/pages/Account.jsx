import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import classes from "./style.module.css";

export default function Account() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section className={classes.wrapper_card}>
      <article className={classes.filter_button_container} id="createNewAcoount">
        <Button role="button" className={classes.filter_button} onClick={onOpen}>
          <AddIcon />
          <span style={{ margin: "0 5px" }}>New</span>
        </Button>
      </article>
      <article id="modal">
        <Modal size="3xl" isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className={classes.modal_header}>
              <p>Create your account</p>
              <ModalCloseButton color="white" />
            </ModalHeader>
            <ModalBody pb={6}>
              <FormControl>
                <Stack direction="row" width="100%" spacing={3} align="stretch">
                  <Stack direction="column" width="80%" spacing={3}>
                    <div>
                      <FormLabel>Name</FormLabel>
                      <Input placeholder="Account name" />
                    </div>
                    <div>
                      <Checkbox>US Dollar</Checkbox>
                    </div>
                    <div>
                      <Checkbox>Show on Dashboard</Checkbox>
                    </div>
                  </Stack>
                  <Stack direction="column" width="100%" spacing={3}>
                    <div>
                      <FormLabel>Group</FormLabel>
                      <Select>
                        <option>Cash</option>
                        <option>Bank Account</option>
                        <option>Deposit</option>
                        <option>Credit</option>
                        <option>Asset</option>
                      </Select>
                    </div>
                    <div>
                      <NumberInput>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </div>
                  </Stack>
                </Stack>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Stack direction="row" spacing={2}>
                <Button>Cancle</Button>
                <Button colorScheme="green" onClick={onClose}>
                  Save Account
                </Button>
              </Stack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </article>
    </section>
  );
}
