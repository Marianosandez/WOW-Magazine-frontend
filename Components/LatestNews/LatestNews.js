import {
  Grid,
  GridItem,
  Heading,
  Flex,
  Icon,
  Box,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GoRocket } from "react-icons/go";
import { GrFavorite, GrSpa } from "react-icons/gr";
import {
  HiOutlineLightBulb,
  HiOutlineFire,
  HiOutlineEye,
} from "react-icons/hi";
import { FaRegHandRock } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import { GiFeather, GiUbisoftSun } from "react-icons/gi";

import SchemaA from "../../Common/Schemas/SchemaA";
import SchemaB from "../../Common/Schemas/SchemaB";
import SchemaC from "../../Common/Schemas/SchemaC";
import SchemaD from "../../Common/Schemas/SchemaD";

const LatestNews = ({ newses, section, color, indice }) => {
  const iconosPorEmocion = {
    Alegria: GiUbisoftSun,
    Tristeza: GiFeather,
    Misterio: HiOutlineEye,
    Reflexion: HiOutlineLightBulb,
    Naturaleza: ImLeaf,
    Diversion: GoRocket,
    Paz: GrSpa,
    Amor: GrFavorite,
    Pasion: HiOutlineFire,
    Accion: FaRegHandRock,
  };
  return (
    <Box>
      <Flex pl="20px">
        <Icon
          as={iconosPorEmocion[section.title]}
          w={7}
          h={7}
          color={color}
          mt={["20px", "40px"]}
        />
        <Text
          fontFamily="Inter"
          fontSize="25px"
          fontStyle="normal"
          fontWeight="100"
          lineHeight="16px"
          letterSpacing="0.2px"
          textAlign="left"
          mt={["20px", "40px"]}
          p="10px"
          color="#EB522D"
        >
          {section.title}
        </Text>
      </Flex>
      {section.schema == "<SchemaA/>" && <SchemaA newses={newses} />}
      {section.schema == "<SchemaB/>" && <SchemaB newses={newses} />}
      {section.schema == "<SchemaC/>" && <SchemaC newses={newses} />}
      {section.schema == "<SchemaD/>" && <SchemaD newses={newses} />}
    </Box>
  );
};

export default LatestNews;
