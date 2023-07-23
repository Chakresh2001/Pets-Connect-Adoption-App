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
  
  export  function ProductAddToCart({image_url,_id,id,cat_name,age ,breed ,gender, adoption_fee, location}) {
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
                image_url
            }
            objectFit={'cover'}
          />
         
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {cat_name}
              </Heading>
              <Text color={'gray.500'}>{breed}</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>{age} yr</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Age
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>{gender}</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Gender
                </Text>
              </Stack>
            </Stack>
            <Link to={`/SingleCatPage/${_id}`}>
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