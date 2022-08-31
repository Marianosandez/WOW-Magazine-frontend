import { Box, Image, Text } from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";
import Link from "next/link";

const LateralNewsCard = ({ news }) => {
  return (
    <Box
      left="48.83%"
      right="0%"
      top="0%"
      bottom="0%"
      backgroundColor=" #FFFFFF"
      border="1px solid #D2D2D2"
      display="flex"
      flexDir={["column", "column", "row", "row"]}
    >
      <Image
        width="478px"
        height="298px"
        src={news.field_img_primary}
      />
      <Box
        pl={["0em", "1em"]}
        pr={["0em", "3em"]}
        left="53.93%"
        right="5.21%"
        top="35.57%"
        bottom="29.53%"
        fontFamily="PP Eiko"
        fontWeight="500"
        fontSize="20px"
        lineHeight="32px"
        display="flex"
        alignItems="center"
        textAlign={["center", "center", "left", "left"]}
        letterSpacing=" 0.2px"
        color="#343434"
      >
        <Text>
          <Link href={`/article/${news.url}`}>
            <a>{news.title}</a>
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default LateralNewsCard;
