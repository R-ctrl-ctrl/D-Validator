import { Box, Button, FormControl, FormLabel, HStack, Img, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import Certificateone from '../components/Certificateone'
import Certificatethree from '../components/Certificatethree'
import Certoficatetwo from '../components/Certoficatetwo'
import Navbar from '../components/Navbar'
import {useReactToPrint} from 'react-to-print'



const generate = () => {

    const [template, settemplate] = useState(1)
    const [heading, setheading] = useState("HEADING")
    const [name, setname] = useState("NAME")
    const [description, setdescription] = useState("description")
    const [url, seturl] = useState("https://th.bing.com/th/id/OIP.rRV1apjMPbYSyIZUPesnlQHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.3")
    

    const handleClick1 = () => {
        settemplate(1)
    }
    const handleClick2 = () => {
        settemplate(2)
    }
    const handleClick3 = () => {
        settemplate(3)
    }

    return (
        <Box h="100vh">
            <Navbar />
            <Box position={"absolute"} top="10vh" w="full" bottom="0" display={"flex"} >
                <Box p={4} w="20%" bg="blackAlpha.800" borderRight="1px" borderColor={"whiteAlpha.500"}>
                    <Box w="full" textAlign="center">
                        <Text textColor={"orange"} fontSize="28px" fontWeight={"bold"} letterSpacing="1px" >Templates</Text>
                    </Box>
                    <Box mt="2vh" display={"flex"} flexDirection="column">
                        <Box onClick={handleClick1} cursor={"pointer"} mt="2vh" w="full" h="20vh">
                            <Img borderRadius={"10px"} h="full" w="full" src='https://th.bing.com/th/id/OIP.5wpIoYCbsB2PQF4ObU1m3gHaFu?pid=ImgDet&rs=1' />
                        </Box>
                        <Box onClick={handleClick2} cursor={"pointer"} mt="2vh" w="full" h="20vh">
                            <Img borderRadius={"10px"} h="full" w="full" src='https://www.positiveeast.org.uk/wp-content/uploads/2018/08/pop-up-bg-2.png' />
                        </Box>

                        <Box onClick={handleClick3} cursor={"pointer"} mt="2vh" w="full" h="20vh">
                            <Img borderRadius={"10px"} h="full" w="full" src='https://cdn.wallpapersafari.com/19/89/Csbtpy.jpg' />
                        </Box>
                    </Box>
                </Box>


                <Box borderRight={"1px"} borderColor="whiteAlpha.500" w="58%" bg="blackAlpha.800" p={3} display="flex" alignItems={"center"} justifyContent="center" >

                    {(() => {
                        if (template == 1) {
                            return <Certificateone heading={heading} name={name} description={description} url={url} />;
                        } else if (template == 2) {
                            return <Certoficatetwo heading={heading} name={name} description={description} url={url} />;
                        } else if (template == 3) {
                            return <Certificatethree heading={heading} name={name} description={description} url={url} />;
                        }
                    })()}


                </Box>
                <Box bg="blackAlpha.800" w="22%" p={5}>
                    <Box mb={"2vh"} display={"flex"} justifyContent="center" >
                        <Text textColor={"orange"} fontWeight="bold" fontSize={"28px"}>Certificate Content</Text>
                    </Box>
                    <VStack spacing={"3vh"}>
                        <FormControl isRequired>
                            <FormLabel textColor={"white"} placeholder="enter heading">Heading</FormLabel>
                            <Input value={heading} onChange={(e) => setheading(e.target.value)} bg="white" type='text' placeholder='Enter certificate heading' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel textColor={"white"}>Name</FormLabel>
                            <Input value={name} onChange={(e) => setname(e.target.value)} bg="white" type='text' placeholder='Enter name of receiver' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel textColor={"white"}>Description</FormLabel>
                            <Textarea value={description} onChange={(e) => setdescription(e.target.value)} resize={"none"} h="14vh" bg="white" type='text' placeholder='Enter certificate description' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel textColor={"white"}>Logo Url</FormLabel>
                            <Input value={url} onChange={(e) => seturl(e.target.value)} bg="white" type='text' placeholder='enter url logo' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel textColor={"white"}>Email of receiver</FormLabel>
                            <Input bg="white" type='email' placeholder='Enter email of receiver' />
                        </FormControl>
                        <Box w="full" display={"flex"} justifyContent="space-between">
                            <Button w="45%" textColor={"white"} colorScheme="orange" fontWeight={"semibold"}>Print Out</Button>
                            <Button w="45%" textColor={"white"} colorScheme="orange" fontWeight={"semibold"}>Generate</Button>
                        </Box>
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}

const Example = () => {
    const componentRef = useRef();
  
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} />
      </div>
    );
  };

export default generate
