import { Spinner } from "@chakra-ui/react";

const SpinnerComponent = ({ isOpen }) => {
  return (
    <Spinner
      display={isOpen ? "flex" : "none"}
      pos="absolute"
      top="3"
      right="0"
      left="0"
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      marginLeft="auto"
      marginRight="auto"
      justifyContent="center"
      variant="top-accent"
    />
  );
};

export { SpinnerComponent }