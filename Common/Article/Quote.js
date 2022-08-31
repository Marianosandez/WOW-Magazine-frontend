import { Heading } from "@chakra-ui/react";

const Quote = ({ news }) => {
  return (
    <Heading
      fontFamily="PP Eiko"
      fontWeight="900"
      fontSize={["18px", "20px", "22px", "24px"]}
      lineHeight="1.5em"
      textAlign="left"
      py="1em"
      px="1.5em"
      borderLeftWidth="3px"
      borderColor="#ED2D6E"
      pr="2em"
    >
      {"“ " + news + " ”"}
    </Heading>
  );
};

export default Quote;
