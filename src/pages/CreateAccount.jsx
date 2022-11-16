import { Box, Flex, Input, Select, TagLabel, Text } from '@chakra-ui/react'
import classes from './style.module.css'

const CreateAccount = () => {
  return (
    <section className={classes.wrapper_card}>
      <div className={classes.createAccount_header}>
        <img
          width='50'
          height='50'
          src='/src/pages/assets/images/settings.png'
        />
        <Text fontSize={32} mx='5px'>
          Money Tracker Setup
        </Text>
      </div>
      <hr style={{ margin: '10px 0', borderWidth: '1px' }} />
      <div className={classes.createAccount_main}>
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
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </label>
            <label style={{ width: '49%' }}>
              Additional Currencies (optional)
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </label>
          </Flex>
        </Box>
      </div>
      <div className={classes.createAccount_main}>
        <Text fontSize={28}>Accounts</Text>
        <Box padding={'0 10px'}>
          <Text>
            Create accounts that you would like to keep track of. It could be
            cash in your wallet, bank accounts, credit cards or even a loan to
            your friend.
          </Text>
          <Flex direction='row' justifyContent='space-between' mt={3}>
            <label style={{ width: '49%' }}>
              Name <span style={{color: 'red'}}>*</span>
              <Input placeholder='Basic usage' />
            </label>
            <Flex style={{ width: '49%'}}>
              <label style={{ width: '100%' }}>
                Group
                <Select placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </label>
            </Flex>
          </Flex>
        </Box>
      </div>
    </section>
  )
}

export { CreateAccount }
