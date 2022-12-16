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
} from "@chakra-ui/react";
import Select from "react-select";
import { useEffect, useState } from "react";
import classes from "./style.module.css";
import { useFetchData } from "../hooks/useFetchData";
const CreateAccount = () => {
  const [value, setValue] = useState();
  const [currencies, setCurrencies] = useState([]);
  const [group, setGroup] = useState([
    { label: "Cash", value: "cash" },
    { label: "Bank Account", value: "bank account" },
    { label: "Deposit", value: "deposit" },
    { label: "Credit", value: "Credit" },
    { label: "Assert", value: "assert" },
  ]);
  const [baseCurrencies, setBaseCurrencies] = useState({
    value: "USD",
    label: "United States Dollar",
  });
  const [user, setUser] = useState({
    name: "",
    baseCurrencies: {
      value: "USD",
      label: "USD - United State Dollar",
    },
    additionalCurrencies: [],
    gropu: {},
    stock: 0,
    dashboardShow: false,
  });
  const { data } = useFetchData("https://api.exchangerate.host/symbols");
  const currencyRate = useFetchData(
    "https://api.exchangerate.host/latest?base=USD"
  );

  const handleClick = () => {
    console.log(user);
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
            default. You can also select any number of additional currencies, if
            you use them.
          </Text>
          <Flex direction="row" justifyContent="space-between" mt={3}>
            <label style={{ width: "49%" }}>
              Base Currency
              <Select
                options={currencies}
                defaultValue={{
                  label: "USD - United States Dollar",
                  value: "USD",
                }}
                onChange={(val) =>
                  setUser({
                    ...user,
                    baseCurrencies: {
                      value: val.value,
                      label: val.label,
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
                  setUser({
                    ...user,
                    additionalCurrencies: {
                      ...value,
                    },
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
                  onChange={(value) =>
                    console.log(value)
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
                      gropu: value,
                    })
                  }
                />
              </label>
              <NumberInput
                onChange={(value) =>
                  setUser({
                    ...user,
                    stock: value,
                  })
                }
                value={value}
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
                      <TagLabel>{baseCurrencies.value}</TagLabel>
                    </Tag>
                  </HStack>
                </NumberInputStepper>
              </NumberInput>
              <Button colorScheme="green" onClick={handleClick}>
                Save Account
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </section>
  );
};

export { CreateAccount };
