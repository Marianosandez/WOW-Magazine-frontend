import { Heading, Flex, Box, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";

const SmallNewsCard = ({news}) => {
  return (
    <VStack
      //borderStyle={"solid"}
      // mt={["0", "2"]}
      // mr={["0", "2"]}
      pb="5"
      borderBottom="1px"
      borderWidth="1px"
      borderColor="#E3E3E3"
      mb="15px"
    >
      <Image
        objectFit={["none", "cover"]}
        w="100%"
        src={news.field_img_primary}
      ></Image>
      <Box
        fontSize="20px"
        lineHeight="26px"
        letterSpacing="0.20000000298023224px"
        fontFamily="PP Eiko"
        textAlign="left"
        fontWeight="500"
        p={5}
        m={10}
      >
       <Link href={`/article/${news.url}`}>
         <a>
       {news.title}
         </a>
       </Link> 
      </Box>
    </VStack>
  );
};

export default SmallNewsCard;
