import { Box,Heading,Text } from '@chakra-ui/react'
import React from 'react'

const Phototab = ({image,head,boody}) => {
  return (
    <Box box-shadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px" bg={"white"} width={200} borderRadius={"10px"}>
<img src={image} alt="" style={{borderRadius:"10px"}} />
    <Heading>{head}</Heading>
    <Text>{boody}</Text>
    </Box>
  )
}

const Phototab2 = ({image,head,boody,downn})=>{
return (
    <Box box-shadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px" bg={"white"} width={200} borderRadius={"10px"}>
    <img src={image} alt="" style={{borderRadius:"10px"}} />
        <Heading>{head}</Heading>
        <Text>{boody}</Text>
        <hr />
        <Text>{downn}</Text>
    </Box>
)
}

export  {Phototab, Phototab2 }