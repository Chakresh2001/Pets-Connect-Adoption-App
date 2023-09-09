import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  "../../style/Singlepage.css";
import { Button } from '@chakra-ui/react';
import {  Text, useDisclosure, useToast } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export const SinglePage = () => {
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
        axios.get(`https://cute-erin-tick-hat.cyclic.cloud/dogs/get/${id}`)
        .then((res)=>{
            setPage(res.data.dog)
            //console.log(res.data); 
        })
        .catch((err)=>console.log(err))
    }
    

    useEffect(()=>{
        singleData() 
      
    },[])

    const handleProceed = () => {
      const object = {
        pet_name: page.name,
        pet_breed: page.breed,
        pet_age: page.age,
        pet_location: page.location,
        pet_image: page.image,
        pet_price: page.price,
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
     
     <div className='singlePageimg'>
       <img src={page.image} alt="" />
     </div>
     <div className='singlePageData'>
        <header>DETAILS</header>
       <div>
       <h1>Name: {page.name}</h1>
       <h2>Breed: {page.breed}</h2>
       <h3>Age: {page.age}</h3>
       <h4>Price: ${page.price}/-</h4>
       <br />
       <p>Price Inclusive of all taxes</p>
       </div>
       <br />
      <div className='singlePageDetails'>
      <h1> About {page.name}</h1>
      <br />
         <p>Introducing {page.name}, a stunning {page.breed} seeking a loving forever home. With a heart full of love, he/she adores human companionship and gets along famously with other pets. {page.name}'s delightful personality shines through with his/her unique trait or behavior. Whether it's playtime in the park or cuddles on the couch, he/she is always up for it.
         <br />
<br />
We are reluctantly seeking a new home for {page.name} due to unforeseen circumstances. We kindly request potential adopters to have the time, space, and resources to provide a loving environment. Adoption fees apply to ensure the best match. If you're ready to welcome a loyal and devoted companion into your life, reach out to us at Your Contact Information. Help {page.name} find happiness in a forever home!</p>
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
