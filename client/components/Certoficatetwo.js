import React, { useRef } from 'react'
import { Box, Button, Img, Text, VStack } from '@chakra-ui/react'
import { useReactToPrint } from 'react-to-print'


const Certoficatetwo = ({heading,name,description,url}) => {
  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content : ()=> componentRef.current,
    documentTitle : 'emp-data'
  })
  return (
    <Box  bgColor={"red"} h="70vh"  w="90%"    >
      <Box ref={componentRef} w="full" h="full" position={"relative"}>
        <Img  w="full" h="full" src='https://www.positiveeast.org.uk/wp-content/uploads/2018/08/pop-up-bg-2.png' />
         <Box w="full" h="20vh" position={"absolute"} top="4vh">
            <Img ml="4vw" borderRadius={"50%"} w="19%" h="90%" src={url && url} />
         </Box>
         <Box position={"absolute"} w="full" display="flex" justifyContent={"center"} alignItems="center" top={"20vh"}>
            <VStack>
                <Box>
                <Text textDecoration={"underline"} fontSize={"28px"} fontWeight="bold" letterSpacing={"1px"} >{heading && heading}</Text>
                </Box>
                <Box>
                <Text fontSize={"34px"} fontWeight="bold" letterSpacing={"6px"} >CERTIFICATE</Text>
                </Box>
                <Box>
                <Text fontSize={"34px"} textDecoration="underline" fontWeight="bold" letterSpacing={"1px"} >{name && name}</Text>
                </Box>
                <Box w="80%" textAlign={"center"}>
                <Text fontSize={"20px"} letterSpacing={"1px"} >{description && description}</Text>
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

export default Certoficatetwo
