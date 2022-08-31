import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export const XLargeNewsCard = ({ news }) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="#E3E3E3"
      display="flex"
      flexDir="column"
    >
      <Image src={news.field_img_primary} />

      <Text
        fontFamily="PP Eiko"
        fontWeight="500"
        fontSize="20px"
        lineHeight="42px"
        alignItems="center"
        textAlign="center"
        letterSpacing="0.2px"
        textTransform="capitalize"
        color="#343434"
        py="2em"
        px="2em"
      >
        <Link href={`/article/${news.url}`}>
          <a>{news.title}</a>
        </Link>
      </Text>
    </Box>
  );
};
