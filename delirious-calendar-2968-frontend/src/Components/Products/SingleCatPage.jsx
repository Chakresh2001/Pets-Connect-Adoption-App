import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  "../../style/Singlepage.css";
import { Button, Text, useDisclosure, useToast } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'


export const SingleCatPage = () => {
    const [page,setPage]=useState({})
    const {id}=useParams()
    const toast = useToast()

    const OverlayTwo = () => (
      <ModalOverlay
        backdropInvert='50%'
        backdropBlur='5px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayTwo />)

    const singleData=()=>{
        axios.get(`https://cute-erin-tick-hat.cyclic.cloud/cats/get/${id}`)
        .then((res)=>{
            setPage(res.data.cats)
            //console.log(res.data); 
        })
        .catch((err)=>console.log(err))
    }
    

    useEffect(()=>{
        singleData() 
      
    },[])

    const handleProceed = () => {
      const object = {
        pet_name: page.cat_name,
        pet_breed: page.breed,
        pet_age: page.age,
        pet_location: page.location,
        pet_image: page.image_url,
        pet_price: page.adoption_fee,
      };
  
      console.log(object);
      console.log(JSON.stringify(object));
  
      const token = JSON.parse(localStorage.getItem('token'));
  
      // The endpoint URL for the POST request
      const postEndpoint = 'https://cute-erin-tick-hat.cyclic.cloud/post/add';
  
      axios
        .post(postEndpoint, object, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('User data posted successfully:', response.data);
          toast({
            title: 'Thank You For Adoption',
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          onClose()
        })
        .catch((error) => {
          console.error('Error posting user data:', error);
          // Add any error handling logic here (e.g., show an error message).
        });
    };
    

  return (
    <div>
        <div className='singlePageContainer'>
     <div style={{marginTop:"80px"}}>
        <br />
     </div>
     <div className='singlePageimg'>
       <img src={page.image_url} alt="" />
     </div>
     <div className='singlePageData'>
        <header>DETAILS</header>
       <div>
       <h1>Name: {page.cat_name}</h1>
       <h2>Breed: {page.breed}</h2>
       <h3>Age: {page.age}</h3>
       <h4>Price: {page.adoption_fee}/-</h4>
       <br />
       <p>Price Inclusive of all taxes</p>
       </div>
       <br />
      <div className='singlePageDetails'>
      <h1> About {page.cat_name}</h1>
      <br />
         <p>Introducing {page.description}</p>
      </div>
      <Button variant={'outline'}  onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }} >ADOPT</Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader color="purple.400">Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are You Sure You Want To Adopt <span style={{fontWeight:"bold"}}>{page.cat_name}</span></Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleProceed} mr="15px" bg="green.400">Proceed</Button>
            <Button onClick={onClose} bg="red.400">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
     </div>
    
 </div>
 <div>
         
     </div>
    </div>
  )
}
