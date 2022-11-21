import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Text
} from '@chakra-ui/react'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import { useState } from 'react'
import classes from './style.module.css'
import { useFetchData } from '../hooks/useFetchData'
import { MultiSelect, MultiSelectTheme } from 'chakra-multiselect'

const CreateAccount = () => {
  const [value, setValue] = useState('0')
  const values = ['1','2','3','4','5']
  const currencySymbols = useFetchData(
    'https://api.exchangerate.host/symbols'
  )
  const currencyRate = useFetchData(
    'https://api.exchangerate.host/latest?base=USD'
  )


  const format = (val) => `$ ` + val
  const parse = (val) => val.replace(/^\$/, '')

  const handleSelect = (e) => {
    const value = document.getElementById('select_base_currency').value
    const group = document.getElementById('select_group').value
    console.log(value, group)
  }

  console.log(currencyRate);

  return (
    <section className={classes.wrapper_card}>
      <div className={classes.createAccount_header}>
        <img
          width='50'
          height='50'
          src='/src/pages/assets/images/settings.png'
        />
        <Text fontSize={32} mx='10px !important'>
          Money Tracker Setup
        </Text>
      </div>
      <Divider
        orientation='horizontal'
        borderColor='blackAlpha.600'
        mt='4'
        mb='2'
      />
      <Flex flexDirection='column' mb='3'>
        <Text fontSize={28}>Currencies</Text>
        <Box padding={'0 10px'}>
          <Text>
            Select your base currency — the currency which will be used by
            default. You can also select any number of additional currencies, if
            you use them.
          </Text>
          <Flex direction='row' justifyContent='space-between' mt={3}>
            <label style={{ width: '49%' }}>
              Base Currency
              <Select
                defaultValue='USD'
                onChange={handleSelect}
                id='select_base_currency'
              >
                <option value='USD'>USD - US Dollar</option>
                {currencySymbols.data && currencySymbols.data.symbols
                  ? Object.values(currencySymbols.data.symbols).map((item, index) => {
                      return (
                        <option key={index} value={item.code}>
                          {`${item.code} - ${item.description}`}
                        </option>
                      )
                    })
                  : currencySymbols.error}
              </Select>
            </label>
            <label style={{ width: '49%' }}>
              Additional Currencies (optional)
              <Select
                placeholder='Select Additional Currencies'
                id='select_additional_currency'
              >
                {currencyRate.data && currencyRate.data.symbols
                  ? Object.values(currencyRate.data.symbols).map((item, index) => {
                        <option key={index} value={item.code}>
                          {`${item.code} - ${item.description}`}
                        </option>
                    })
                  : currencyRate.error}
              </Select>
            </label>
          </Flex>
        </Box>
      </Flex>
      <Flex flexDirection='column'>
        <Text fontSize={28}>Accounts</Text>
        <Box padding={'0 10px'}>
          <Text>
            Create accounts that you would like to keep track of. It could be
            cash in your wallet, bank accounts, credit cards or even a loan to
            your friend.
          </Text>
          <Flex direction='row' justifyContent='space-between' mt={3}>
            <Flex direction='column' w='49%'>
              <label>
                Name <span style={{ color: 'red' }}>*</span>
                <Input placeholder='Basic usage' />
              </label>
              <CheckboxGroup colorScheme='gray'>
                <Stack spacing='3' direction='column' my={4}>
                  <Checkbox isDisabled defaultChecked>
                    Us Dollar
                  </Checkbox>
                  <Checkbox value='false'>Show on Dashboard</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Flex>
            <Flex flexDirection='column' w='49%'>
              <label>
                Group
                <Select
                  defaultValue='cash'
                  onChange={handleSelect}
                  id='select_group'
                >
                  <option value='cash'>Cash</option>
                  <option value='bank-account'>Bank Account</option>
                  <option value='depoist'>Deposit</option>
                  <option value='credit'>Credit</option>
                  <option value='assets'>Asset</option>
                </Select>
              </label>
              <NumberInput
                onChange={(valueString) => setValue(parse(valueString))}
                value={format(value)}
                step={0.1}
                my='3'
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button colorScheme='green'>Save Account</Button>
            </Flex>
          </Flex>
        </Box>
        <Flex>
          {
        currencySymbols.data && currencySymbols.data.symbols
          ? <MultiSelect
            options={Object.values(currencySymbols.data.symbols).map(v => { console.log(v); return `<i>${v.code}</i>` })}
          />
          : currencySymbols.error
      }
        </Flex>
      </Flex>
    </section>
  )
}

export { CreateAccount }
