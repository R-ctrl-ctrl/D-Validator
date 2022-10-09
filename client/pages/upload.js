import { Box, Button, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Web3 from 'web3'
import ValidateContract from '../blockchain/validate'
import Navbar from '../components/Navbar'
require('dotenv').config()

const upload = () => {
    const REACT_APP_PINATA_API_KEY = process.env.PINATA_API
    const REACT_APP_PINATA_API_SECRET = process.env.PINATA_SECRET
    const hiddenFileInput = useRef(null);

    const[web3,setweb3] = useState()
    const[address,setaddress] = useState(null)
    const [vContract,setvContract] = useState(null)
    const[loading,setloading] = useState(false)

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const sendFileToIPFS = async (e) => {
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
                 try{
                    await vContract.methods.generate(ImgHash).send({
                        from: address,
                        gas: 300000,
                        gasPrice: null
                      })
                      alert("done")
                 }
                 catch(err){
                    setloading(false)
                    alert(err.message)
                 }



            } catch (error) {
                setloading(false)
                console.log("Error sending File to IPFS: ")
                console.log(error)
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

      useEffect(()=>{
        if(!web3){
            connectWallet()
        }
      },[])


    return (
        <Box>
            <Navbar />
            <Box p={4}  bg="blackAlpha.800" w="full" textAlign={"right"}>
                <Text fontSize={"20px"} textColor={"orange"}>{address && address}</Text>
            </Box>
            <Box w='full'  h="82vh" bg={"blackAlpha.800"} display={"flex"} flexDir="column" justifyContent="center" alignItems={"center"}>
                <Box mb="2vh">
                    <Text fontSize={"24px"} textColor="white">Once you upload your certificate here , it will become valid</Text>
                </Box>
                <Button isLoading={loading} onClick={handleClick} colorScheme="orange" w="30%" textColor={"white"} pt={8} pb={8} cursor="pointer" borderRadius={"10px"} fontSize={"22px"} textAlign={"center"} htmlFor='inp'>
                    UPLOAD CERTIFICATE 
                    <Input onChange={sendFileToIPFS} ref={hiddenFileInput} display={"none"} id="inp" type="file" />
                </Button>
            </Box>

        </Box>

    )
}

export default upload
