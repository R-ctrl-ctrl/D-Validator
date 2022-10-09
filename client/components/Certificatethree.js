import React, { useRef } from 'react'
import { Box, Button, Img, Text, VStack } from '@chakra-ui/react'
import { useReactToPrint } from 'react-to-print'


const Certificatethree = ({heading,name,description,url}) => {
    const componentRef = useRef(null)
    const handlePrint = useReactToPrint({
      content : ()=> componentRef.current,
      documentTitle : 'emp-data'
    })
  return (
    <Box  h="70vh"  w="90%"    >
        <Box ref={componentRef} w="full" h="full" position={"relative"}>
        <Img  w="full" h="full" src='https://cdn.wallpapersafari.com/19/89/Csbtpy.jpg' />
        <Box w="full" h="20vh" position={"absolute"} top="4vh">
            <Img  ml="4vw" borderRadius={"50%"} w="17%" h="90%" src={url && url} />
         </Box>
         <Box position={"absolute"} top="27vh" ml={"5vw"}  w="60%" display={"flex"} justifyContent="left" >
            <VStack>
                <Box textAlign={"left"} w="full">
                    <Text fontWeight={"bold"} textColor={"white"} fontSize="20px" letterSpacing={"3px"}>PROUDLY PRESENTED TO</Text>
                </Box>
                <Box textAlign={"left"} w="full">
                    <Text fontWeight={"bold"} fontStyle={"italic"} fontFamily="cursive" textColor={"white"} fontSize="30px" letterSpacing={"3px"}>{name && name}</Text>
                </Box>
                <Box textAlign={"left"} w="full">
                    <Text fontWeight={"bold"} textColor={"white"} fontSize="20px" letterSpacing={"2px"}>{heading && heading}</Text>
                </Box>
                <Box textAlign={"left"} w="full">
                    <Text  textColor={"white"} fontSize="16px" letterSpacing={"1px"}>{description && description}</Text>
                </Box>
            </VStack>
         </Box>
         </Box>
         <Box mt="2vh" w="full" display={"flex"} justifyContent="center">
          <Button w="30%" colorScheme={"orange"} onClick={handlePrint}>Print this out</Button>
          </Box>
    </Box>
  )
}

export default Certificatethree
