import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box h="10vh" borderBottom={"1px"} borderColor="whiteAlpha.500" bg={"blackAlpha.800"} display="flex" p={3} alignItems="center" justifyContent="space-between">
        <Box w="25%" textAlign={"center"}>
            <Text textColor={"orange"} fontWeight="bold"fontSize={"26px"} letterSpacing="4px" >D-VALIDATOR</Text>
        </Box>
        <Box w="45%" display={"flex"} justifyContent="space-around">
            <Link cursor={"pointer"} _hover={{textDecoration:"none" }} textColor="orange" fontSize={"22px"} letterSpacing="2px" href='/validate' fontWeight={"bold"} >Validate</Link>
            <Link cursor={"pointer"} _hover={{textDecoration:"none" }} textColor="orange" fontSize={"22px"} letterSpacing="2px" href='/generate' fontWeight={"bold"}>Generate</Link>
            <Link cursor={"pointer"} _hover={{textDecoration:"none" }} textColor="orange" fontSize={"22px"} letterSpacing="2px" href='/upload' fontWeight={"bold"}>Upload</Link>
        </Box>
    </Box>
  )
}

export default Navbar
