import { GridItem, Grid } from "@chakra-ui/react";
import LargeNewsCard from "../LargeNewsCard";
import SmallNewsCard from "../SmallNewsCard";

const SchemaA = ({newses}) => {
  return (
    <Grid
      width={["100%", "75%"]} pt="2em" pl={["0em", "3em"]} mt={["10px", "20px"]}
      templateRows={['repeat(5, 1fr)','repeat(2, 1fr)']}
      templateColumns={['repeat(1, 1fr)','repeat(7, 1fr)']}
      gap={[3,4]}
    >
        <GridItem  colSpan={[1, 7]} ><LargeNewsCard news={newses[2]}/></GridItem>
        <GridItem  colSpan={[1, 3]} ><SmallNewsCard news={newses[1]}/></GridItem>
        <GridItem  colSpan={[1, 3]} ><SmallNewsCard news={newses[2]}/></GridItem>
    </Grid>
    );
  };
  
  export default SchemaA;
  
