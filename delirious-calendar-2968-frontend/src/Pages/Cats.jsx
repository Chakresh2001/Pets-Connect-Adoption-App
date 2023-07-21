import { Box,Heading,Link,Text,Button, Stack } from "@chakra-ui/react";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import {Phototab,Phototab2 } from "../Components/Phototab";

const Cats = () => {
   return <Box bg={"gray.200"}>
    <Box display={"inline"} >
    
   
      {/* <Link > Home</Link> */}
      <a href="https://example.com" target="_blank">Home</a>
       <span><FaAngleRight width={10}/></span>
    </Box>
      <Box textAlign={"left"} m={5}>
          <Heading >Cats & Kittens</Heading>
      </Box>
      <Box boxSize={"60%"} m={10} bg={"white"} borderRadius={"25px"} box-shadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
        <img style={{borderRadius :"25px", width:"100%"}} src="https://www.petfinder.com/static/9fbace875ba23f477124d44e2db26a10/746b5/A-9lives-122571199.webp" alt="" />
        <Text>
        CATS AND KITTENS
        </Text>
        <Text>9 Common Cat Myths Debunked</Text>
        <Text>Fact: The myth most likely originated from Egyptian gods and religions, where sun god Atum-Ra, one of the Ennead, or the Nine....</Text>
        <Button m={10 } bg={"white"} border={"2px solid #20ccf8"}     color = "#004c81" borderRadius={"12rem"}>Learn More</Button>
      </Box>
      <Box>
        <Heading>Cats Adoption</Heading>
        <Stack direction={["column row"]} gap={5}>
          <Phototab image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
          <Phototab image="https://www.petfinder.com/static/85bfd0df1c8fdf011537c0e78b6b70c2/f2559/SH1611_Ly_6221-1_1.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
          <Phototab image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
        </Stack>
      </Box>
      <Box m={"30px 00px"}>
      <Heading textAlign={"left"} p={"50px 0px"}>Cats Breeds</Heading>
      <Stack direction={["column row"]}>

        <Phototab2 image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?" downn="View availabe for adoption" />
        <Phototab2 image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?" downn="View availabe for adoption" />
        <Phototab2 image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?" downn="View availabe for adoption" />
      </Stack>
      </Box>

      {/* behaviour */}
      <Box>
        <Heading textAlign={"left"}>Cats Behavior</Heading>
        <Stack direction={["column row"]} gap={5}>
          <Phototab image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
          <Phototab image="https://www.petfinder.com/static/85bfd0df1c8fdf011537c0e78b6b70c2/f2559/SH1611_Ly_6221-1_1.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
          <Phototab image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
        </Stack>
      </Box>
{/* health & wellness */}
<Box>
        <Heading textAlign={"left"}>Cats Behavior</Heading>
        <Stack direction={["column row"]} gap={5}>
          <Phototab image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
          <Phototab image="https://www.petfinder.com/static/85bfd0df1c8fdf011537c0e78b6b70c2/f2559/SH1611_Ly_6221-1_1.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
          <Phototab image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
        </Stack>
      </Box>

      {/* training */}
      <Box>
        <Heading textAlign={"left"}>Cats Behavior</Heading>
        <Stack direction={["column row"]} gap={5}>
          <Phototab image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
          <Phototab image="https://www.petfinder.com/static/85bfd0df1c8fdf011537c0e78b6b70c2/f2559/SH1611_Ly_6221-1_1.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
          <Phototab image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
        </Stack>
      </Box>

      {/* feeding your cat */}
      <Box>
        <Heading textAlign={"left"}>Cats Behavior</Heading>
        <Stack direction={["column row"]} gap={5}>
          <Phototab image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
          <Phototab image="https://www.petfinder.com/static/85bfd0df1c8fdf011537c0e78b6b70c2/f2559/SH1611_Ly_6221-1_1.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
          <Phototab image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
        </Stack>
      </Box>

      {/* other Info */}
      <Box>
        <Heading textAlign={"left"}>Cats Behavior</Heading>
        <Stack direction={["column row"]} gap={5}>
          <Phototab image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
          <Phototab image="https://www.petfinder.com/static/85bfd0df1c8fdf011537c0e78b6b70c2/f2559/SH1611_Ly_6221-1_1.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
          <Phototab image="https://www.petfinder.com/static/6e2472687c94c53ce67cd1ff19a3f204/dcd7e/cat-collar-tag-thinkstock_93548945.webp" head="YOUR NEW CAT" boody="why should we wear new collar and Tags?"/>
        </Stack>
      </Box>
   </Box>;
};

export default Cats;
