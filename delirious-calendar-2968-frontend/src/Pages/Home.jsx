import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
   return (
      <Box>
         <Box>
            <img
               width={"100%"}
               src="https://www.petfinder.com/sites/default/files/styles/hero_image_925_410/public/images/content/925%20hero%20image_0.jpg?itok=wmYYZbrt"
               alt=""
            />
         </Box>

         <Box>
            <Heading color={"#6504b5"}>
               Pets Available for Adoption Nearby
            </Heading>
            <Stack
               direction={{ base: "column", md: "row" }}
               gap={20}
               bg={"#EDE7F6"}
               padding={30}
            >
               <Box>
                  <img
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63291329/1/?bust=1683800934&width=316"
                     alt=""
                  />
                  <h2>Boo</h2>
               </Box>
               <Box>
                  <img
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63291329/1/?bust=1683800934&width=316"
                     alt=""
                  />
                  <h2>Boo</h2>
               </Box>
               <Box>
                  <img
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63291329/1/?bust=1683800934&width=316"
                     alt=""
                  />
                  <h2>Boo</h2>
               </Box>
               <Box>
                  <img
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63291329/1/?bust=1683800934&width=316"
                     alt=""
                  />
                  <h2>Boo</h2>
               </Box>
            </Stack>
         </Box>

         <Box margin={"25px 100px"}>
            <Heading>Planning to Adopt a Pet?</Heading>
            <Stack direction={{ base: "column", md: "row" }} gap={"280px"}>
               <Box>
                  <Heading fontWeight={400}>Checklist for New Adopters</Heading>
                  <Text>Help make the transition, as smooth as possible.</Text>
                  <Button>Learn More</Button>
               </Box>
               <Box>
                  <Heading fontWeight={400}>COVID-19 Resources</Heading>
                  <Text>
                     Get the latest on adoption processes, learn how local
                     shelters and rescue groups are adapting and find out what
                     you can do to help dogs and cats in need right now.
                  </Text>
                  <Button>Learn More</Button>
               </Box>
               <Box>
                  <Heading fontWeight={400}>Pet Adoption FAQs</Heading>
                  <Text>Get answers to questions you haven't thought of.</Text>
                  <Button>Learn More</Button>
               </Box>
            </Stack>
         </Box>
         <Box>
            <Heading color={"#6504b5"}>
               Pets Available for Adoption Nearby
            </Heading>
            <Stack
               direction={{ base: "column", md: "row" }}
               gap={20}
               bg={"#EDE7F6"}
               padding={30}
            >
               <Box>
                  <img
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63291329/1/?bust=1683800934&width=316"
                     alt=""
                  />
                  <h2>Boo</h2>
               </Box>
               <Box>
                  <img
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63291329/1/?bust=1683800934&width=316"
                     alt=""
                  />
                  <h2>Boo</h2>
               </Box>
               <Box>
                  <img
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63291329/1/?bust=1683800934&width=316"
                     alt=""
                  />
                  <h2>Boo</h2>
               </Box>
               <Box>
                  <img
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63291329/1/?bust=1683800934&width=316"
                     alt=""
                  />
                  <h2>Boo</h2>
               </Box>
            </Stack>
         </Box>
         <Stack direction={{ base: "column", md: "row" }}>
            <Box>
               <img src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/47.jpeg?itok=HNT_yv1F" alt="" />
               <Heading>Dogs Adoption Article</Heading>
               <Text>Learn about caring for your new dog</Text>
               <Button>LEARN MORE</Button>
            </Box>
            <Box>
               <img src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/PF2015_267_Kittens_Shelter-630.jpg?itok=JGTdJJaD" alt="" />
               <Heading>Dogs Adoption Article</Heading>
               <Text>Learn about caring for your new dog</Text>
               <Button>LEARN MORE</Button>
            </Box>
         </Stack>

       
      </Box>
   );
};

export default Home;
