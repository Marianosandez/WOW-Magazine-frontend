import {Box, VStack} from '@chakra-ui/react'
import LateralNewsCard from '../LateralNewsCard'
import { XLargeNewsCard } from '../XLargeNewsCard'

const SchemaC = ({newses}) => {
  
  return (
    <Box display='flex' flexDir='column' py="2em" pl="3em" width="75%">
      
      <XLargeNewsCard news={newses[0]}/>
        <Box mt='1em'>
      <LateralNewsCard news={newses[1]}/>
      </Box>
    </Box>
  )
}

export default SchemaC