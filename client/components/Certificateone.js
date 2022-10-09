import { Box, Button, Img, Text, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

const Certificateone = ({heading,name,description,url}) => {

  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content : ()=> componentRef.current,
    documentTitle : 'emp-data'
  })
  
  return (
    <Box  h="70vh"  w="90%" >
      <Box ref={componentRef} w="full" h="full" position={"relative"}>
      
        <Img  w="full" h="full" src='https://th.bing.com/th/id/OIP.5wpIoYCbsB2PQF4ObU1m3gHaFu?pid=ImgDet&rs=1' />
          <Box position={"absolute"} top={"10vh"} display="flex" w="full" h="full" justifyContent={"center"} alignItems="flex-start">
              <VStack w="70%" spacing={"0px"}>
                <Box w="full" h="17vh" display={"flex"} justifyContent="center">
                  <Img outline={"none"} w="30%" borderRadius={"50%"} h="full" src={url && url} /> 
                </Box>
                <Box>
                  <Text fontSize={"22px"} fontWeight="semibold" letterSpacing="2px">{heading && heading}</Text>
                </Box>
                <Box>
                  <Text fontSize={"18px"} letterSpacing="2px">This certificate is proudly awarded to</Text>
                </Box>
                <Box>
                  <Text fontStyle={"italic"} fontFamily="serif" letterSpacing={"1px"} fontSize={"40px"}>{name && name}</Text>
                </Box>
                <Box>
                  <Text fontSize={"18px"} letterSpacing="2px">For</Text>
                </Box>
                <Box textAlign={"center"}>
                  <Text fontSize={"16px"} >{description && description}</Text>
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

export default Certificateone
