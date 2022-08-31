import { Heading } from "@chakra-ui/react";

const SectionTitle = ({ news }) => {
  return (
    <Heading
      fontFamily="PP Eiko"
      fontWeight="500"
      fontSize="24px"
      lineHeight="2px"
      textAlign="left"
      py='1em'
      px="0.5em"
    >{news}</Heading>
  );
};

export default SectionTitle;
