import { Alert, AlertIcon } from "@chakra-ui/react";

const ErrorAlert = ({ isOpen }) => {
  return (
    <Alert
      status="success"
      display={isOpen ? "flex" : "none"}
      width="fit-content"
      pos="absolute"
      top="3"
      right="0"
      left="0"
      marginLeft="auto"
      marginRight="auto"
      justifyContent="center"
      variant="top-accent"
    >
      <AlertIcon />
      Account saved successfully
    </Alert>
  );
};

export { ErrorAlert }