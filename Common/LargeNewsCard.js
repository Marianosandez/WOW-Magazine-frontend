import { Heading, Text, Flex, Box, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";

const LargeNewsCard = ({ news }) => {
  return (
    <Box
      pb="10px"
      mb="15px"
      //backgroundImage={news.field_img_primary}
      // width={['250px','600px',"980px"]}
      //py="2em" pl={["0em","3em"]}  
      width={["100%", "75%"]}
      background="blue"
    >
      <Box width={["100%", "75%"]}>
        <Heading
          fontFamily="PP Eiko"
          fontSize={["18px", "38px"]}
          color="white"
          textAlign="left"
          // zIndex="2"
          letter-spacing="0.2px"
          fontWeight="bold"
          // position="absolute"
          pl="5.41%"
          pr=" 12.04%"
          pt="14em"
          pb="18.33%"
        >
          <Link href={`/article/${news.url}`}>
            <a>{news.title}</a>
          </Link>
        </Heading>
        <Text>por Angela Marquez</Text>
      </Box>
    </Box>
  );
};

export default LargeNewsCard;
