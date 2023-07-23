// import { Button } from "@chakra-ui/react";
// import  "../../style/DogsAdopt.css";
// import { Link } from "react-router-dom";

//    export const ProductAddToCart=({_id,image,id,name,age ,breed ,gender, adoption_fee, location})=>{
       
//        return <div className="singledogcard">
//         <img src={image} alt="0" />
//         <h3>Name: {name}</h3>
//         <h4>Breed: {breed}</h4>
//         <h4>Age: {age}</h4>
//         <Link to={`/SinglePage/${_id}`}>
//         <Button variant={'outline'} >CHECKOUT</Button>
//         </Link>
//     </div>

//    }
// //    age ,breed ,gender, adoption_fee, location

import {
    Heading,
    Box,
    Center,
    Image,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
  
  export  function ProductAddToCart({_id,image,id,name,age ,breed , adoption_fee, location}) {
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'220px'}
            w={'full'}
            src={
                image
            }
            objectFit={'cover'}
          />
         
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {name}
              </Heading>
              <Text color={'gray.500'}>{breed}</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>{age} </Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Age
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>{'gender'}</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Gender
                </Text>
              </Stack>
            </Stack>
            <Link to={`/SinglePage/${_id}`}>
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#6504b5', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Know More
            </Button>
            </Link>
          </Box>
        </Box>
      </Center>
    );
  }