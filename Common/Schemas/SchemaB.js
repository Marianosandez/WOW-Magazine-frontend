import SmallNewsCard from "../SmallNewsCard";
import LateralNewsCard from "../LateralNewsCard";
import { Box, Flex, Stack } from "@chakra-ui/react";

const SchemaB = ({newses}) => {
  return (
    <Box pt="2em" pl={['0em',"3em"]} width={['100%',"75%"]}>
        <Stack spacing={2}>
        <LateralNewsCard news={newses[0]}/>
          <Flex direction={["column", "row"]} >
            <Box mr='0.5em'>
            <SmallNewsCard  news={newses[1]}/>
            </Box>
            <SmallNewsCard  news={newses[2]}/>
          </Flex>
      </Stack>
    </Box>
  );
};

export default SchemaB;
