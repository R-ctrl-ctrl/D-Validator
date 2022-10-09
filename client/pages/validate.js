import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Web3 from 'web3'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import ValidateContract from '../blockchain/validate'
import axios from 'axios'
require('dotenv').config()

const validate = () => {

  const [web3, setweb3] = useState()
  const [address, setaddress] = useState(null)
  const [vContract, setvContract] = useState(null)
  const hiddenFileInput = useRef(null);
  const [loading, setloading] = useState(false)
  const REACT_APP_PINATA_API_KEY = process.env.PINATA_API
  const REACT_APP_PINATA_API_SECRET = process.env.PINATA_SECRET
  const [result,setresult] = useState()

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (e) => {
    setloading(true)
    const fileImg = e.target.files[0];
    if (fileImg) {
      try {

        const formData = new FormData();
        formData.append("file", fileImg);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            'pinata_api_key': REACT_APP_PINATA_API_KEY,
            'pinata_secret_api_key': REACT_APP_PINATA_API_SECRET,
            "Content-Type": "multipart/form-data"
          },
        });

        const ImgHash = resFile.data.IpfsHash;
        try {
          const res = await vContract.methods.isValid(ImgHash).call()
          setresult(res)
    
        }
        catch (err) {
          setloading(false)
          alert(err.message)
          // setresult(null)
        }


        setloading(false)
      } catch (error) {
        setloading(false)
        alert(error.message)
      }
    }
    setloading(false)
  }



  const connectWallet = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const web3 = new Web3(window.ethereum)
        setweb3(web3)
        const accounts = await web3.eth.getAccounts()
        setaddress(accounts[0])

        const contract = ValidateContract(web3)
        setvContract(contract)
      } catch (err) {
        alert(err.message)
      }
    }
    else {
      console.log("please install metamask")
    }
  }

  useEffect(() => {
    if (!web3) {
      connectWallet()
    }
  }, [])




  return (
    <Box>
      <Navbar />
      <Box p={4} bg="blackAlpha.800" w="full" textAlign={"right"}>
        <Text fontSize={"20px"} textColor={"orange"}>{address && address}</Text>
      </Box>
      <Box w='full' h="88vh" bg={"blackAlpha.800"} display={"flex"} flexDir="column" justifyContent="center" alignItems={"center"}>
        <Box mb="2vh">
          <Text fontSize={"24px"} textColor="white">Check if certificate is valid or not</Text>
        </Box>
        <Button isLoading={loading} onClick={handleClick} colorScheme="orange" w="30%" textColor={"white"} pt={8} pb={8} cursor="pointer" borderRadius={"10px"} fontSize={"22px"} textAlign={"center"} htmlFor='inp'>
          UPLOAD CERTIFICATE
          <Input onChange={handleChange} ref={hiddenFileInput} display={"none"} id="inp" type="file" />
        </Button>
        <Box mt="2vh">
          {
            result &&
            result == true
            ?
            <Text fontWeight={"bold"} fontSize={"20px"} textColor={"green"}>Uploaded certificate is Valid !</Text>
            :
            <Text></Text>
          }
        </Box>
       <Box>
       {(() => {
        if (result == true) {
            <Text fontWeight={"bold"} fontSize={"20px"} textColor={"green"}>Uploaded certificate is Valid !</Text>
            return ;
        } else if (result == false) {
           
            return  <Text fontWeight={"bold"} fontSize={"20px"} textColor={"red"}>Uploaded certificate is InValid !</Text>;
        } else {
          return <Text></Text>
        }
      })()}
       </Box>
      </Box>

    </Box>
  )
}

export default validate
