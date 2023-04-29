// Chakra
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Tag,
  TagLabel,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
// React
import Select from "react-select";
import { useEffect, useState } from "react";
// Styles
import classes from "./style.module.css";
// Hooks
import { useFetchData } from "../hooks/useFetchData";
// router
import { useNavigate } from "react-router-dom";
import { SuccessAlert } from "../components/share/SuccessAlert";
import { SpinnerComponent } from "../components/share/SpinnerComponent";
import { ErrorAlert } from "../components/share/ErrorAlert";
// db
import { db } from "../database/pouchdb"

const CreateAccount = () => {
  const [currencies, setCurrencies] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenSpinner, setStateSpinner] = useState(false);
  const navigate = useNavigate();

  const group = [
    { label: "Cash", value: "cash" },
    { label: "Bank Account", value: "bank account" },
    { label: "Deposit", value: "deposit" },
    { label: "Credit", value: "Credit" },
    { label: "Assert", value: "assert" },
  ];

  const [user, setUser] = useState({
    _id: "userAccount",
    name: "",
    baseCurrencies: {
      value: "USD",
      label: "USD - United State Dollar",
      stock: 0,
    },
    additionalCurrencies: [],
    group: {},
    dashboardShow: false,
  });

  const { data } = useFetchData("https://api.exchangerate.host/symbols");

  // save information of user
  const handleClick = () => {
    setStateSpinner(true); // turn on spinner
    db.put(user, (err) => {
      setTimeout(() => {
        setStateSpinner(false); // turn of spinner
      }, 4000);
      if (!err) {
        onOpen(); // show success message
        setTimeout(() => {
          navigate("/");
          onClose(); // close success message
        }, 2000);
      } else {
        setTimeout(() => {
          console.log(err);
        }, 3000);
      }
    });
  };

  useEffect(() => {
    data && data.symbols
      ? Object.entries(data.symbols).map((item) => {
          setCurrencies((prev) => [
            ...prev,
            {
              label: `${item[1].code} - ${item[1].description}`,
              value: item[1].code,
            },
          ]);
        })
      : console.log("Wait...");
  }, [data]);

  return (
    <>
      <section className={classes.wrapper_card}>
        <div className={classes.createAccount_header}>
          <img
            width="50"
            height="50"
            src="/src/pages/assets/images/settings.png"
          />
          <Text fontSize={32} mx="10px !important">
            Money Tracker Setup
          </Text>
        </div>
        <Divider
          orientation="horizontal"
          borderColor="blackAlpha.600"
          mt="4"
          mb="2"
        />
        <Flex flexDirection="column" mb="3">
          <Text fontSize={28}>Currencies</Text>
          <Box padding={"0 10px"}>
            <Text>
              Select your base currency — the currency which will be used by
              default. You can also select any number of additional currencies,
              if you use them.
            </Text>
            <Flex direction="row" justifyContent="space-between" mt={3}>
              <label style={{ width: "49%" }}>
                Base Currency
                <Select
                  options={currencies}
                  defaultValue={{
                    label: "USD - United States Dollar",
                    value: "USD",
                    stock: 0,
                  }}
                  onChange={(val) =>
                    setUser({
                      ...user,
                      baseCurrencies: {
                        value: val.value,
                        label: val.label,
                        stock: 0,
                      },
                    })
                  }
                />
              </label>
              <label style={{ width: "49%" }}>
                Additional Currencies (optional)
                <Select
                  options={currencies}
                  isMulti
                  onChange={(value) =>
                    value.map((item, index) => {
                      setUser({
                        ...user,
                        additionalCurrencies: [
                          ...user.additionalCurrencies,
                          {
                            value: item.value,
                            label: item.label,
                            stock: 0,
                          },
                        ],
                      });
                    })
                  }
                />
              </label>
            </Flex>
          </Box>
        </Flex>
        <Flex flexDirection="column">
          <Text fontSize={28}>Accounts</Text>
          <Box padding={"0 10px"}>
            <Text>
              Create accounts that you would like to keep track of. It could be
              cash in your wallet, bank accounts, credit cards or even a loan to
              your friend.
            </Text>
            <Flex direction="row" justifyContent="space-between" mt={3}>
              <Flex direction="column" w="49%">
                <label>
                  Name <span style={{ color: "red" }}>*</span>
                  <Input
                    placeholder="Account name"
                    onChange={(e) =>
                      setUser({
                        ...user,
                        name: e.target.value,
                      })
                    }
                  />
                </label>
                <CheckboxGroup colorScheme="gray">
                  <Stack spacing="3" direction="column" my={4}>
                    <Checkbox value="false">Show on Dashboard</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </Flex>
              <Flex flexDirection="column" w="49%">
                <label>
                  Group
                  <Select
                    options={group}
                    onChange={(value) =>
                      setUser({
                        ...user,
                        group: value,
                      })
                    }
                  />
                </label>
                <NumberInput
                  defaultValue={user.baseCurrencies.stock}
                  onChange={(value) =>
                    setUser({
                      ...user,
                      baseCurrencies: {
                        ...user.baseCurrencies,
                        stock: value,
                      },
                    })
                  }
                  my="3"
                >
                  <NumberInputField />
                  <NumberInputStepper width={"43px"}>
                    <HStack spacing={4}>
                      <Tag
                        width={"43px"}
                        height={"38px"}
                        borderRadius={"0 5px 5px 0"}
                        key={"md"}
                        variant="subtle"
                        colorScheme="gray"
                      >
                        <TagLabel>{user.baseCurrencies.value}</TagLabel>
                      </Tag>
                    </HStack>
                  </NumberInputStepper>
                </NumberInput>
                {user.additionalCurrencies.map((item, index) => {
                  return (
                    <NumberInput
                      defaultValue={item.stock}
                      onChange={(value) => {
                        item.stock = value;
                        setUser({ ...user });
                      }}
                      key={item.value}
                      my="3"
                    >
                      <NumberInputField />
                      <NumberInputStepper width={"43px"}>
                        <HStack spacing={4}>
                          <Tag
                            width={"43px"}
                            height={"38px"}
                            borderRadius={"0 5px 5px 0"}
                            key={"md"}
                            variant="subtle"
                            colorScheme="gray"
                          >
                            <TagLabel>{item.value}</TagLabel>
                          </Tag>
                        </HStack>
                      </NumberInputStepper>
                    </NumberInput>
                  );
                })}
                <Button colorScheme="green" onClick={handleClick}>
                  Save Account
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </section>
      <SpinnerComponent isOpen={isOpenSpinner} />
      <SuccessAlert isOpen={isOpen} />
      <ErrorAlert isOpen={isOpen} />
    </>
  );
};

export { CreateAccount };
