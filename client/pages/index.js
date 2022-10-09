import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import Navbar from "../components/Navbar";
import { ArrowForwardIcon} from '@chakra-ui/icons'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleClick = ()=>{
    router.push('/generate')
  }
  return (
    <Box>
      <Navbar/>
      <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" bg="blackAlpha.800" w="full" h="90vh">
          <Heading  mb="2vh" textColor={"orange"} fontSize="45px" letterSpacing={"4px"}>WELCOME TO D-VALIDATOR</Heading>
          <Text textColor={"orange"} letterSpacing="3px" fontSize="26px">A web3 application for certificate generation and validation</Text>
          <Button onClick={handleClick} mt="4vh" fontSize={"20px"} colorScheme="orange">Create Certificate  <ArrowForwardIcon ml="1vh" fontSize="20px"/> </Button>
      </Box>
    </Box>
  )
}

