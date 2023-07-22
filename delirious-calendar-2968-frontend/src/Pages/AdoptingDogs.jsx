import React from 'react'
import { Fade, ScaleFade, Slide, SlideFade, Collapse, useDisclosure, Button, Box } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import ProductSimple from './ProductSimple'

const AdoptingDogs = () => {
    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)
   return (
      <div style={{ background: "#EDE7F6", paddingTop: "50px" }}>
         <div
            style={{
               marginRight: "20px",
               display: "flex",
               margin: "auto",
               marginLeft: "10%",
            }}
         >
            <a style={{ marginRight: "20px" }} href="http://localhost:3000/">
               Home <ChevronRightIcon />
            </a>

            <a style={{ marginRight: "20px" }} href="">
               Dogs And Puppies <ChevronRightIcon />
            </a>
            <p></p>
            <a style={{ marginRight: "20px" }} href="">
               Dog Adoption
            </a>
         </div>
         <h1
            style={{
               textAlign: "left",
               marginLeft: "10%",
               fontSize: "40px",
               color: "#607D8B",
            }}
         >
            Dog & Puppy Adoption
         </h1>
         <div
            style={{
               display: "flex",
               margin: "auto",
               width: "95%",
               margin: "auto",
            }}
         >
            <div
               style={{
                  width: "60%",
                  border: "1px solid white",
                  textAlign: "left",
                  marginLeft: "7%",
                  backgroundColor: "white",
                  marginTop: "20px",
                  borderRadius: "10px",
                  padding: "10px",
               }}
            >
               <img
                  width="100%"
                  src="https://www.petfinder.com/static/82f9e51cea4d5f75a9a1499323374aa2/18234/black-dog.webp"
                  alt=""
               />
               <h1
                  style={{
                     fontFamily: "Cairo, sans-serif",
                     textAlign: "left",
                     marginLeft: "7%",
                     marginBottom: "20px",
                     color: "#607D8B",
                  }}
               >
                  DOG ADOPTION
               </h1>
               <h1
                  style={{
                     fontFamily: "Cairo, sans-serif",
                     textAlign: "left",
                     marginLeft: "7%",
                     marginBottom: "20px",
                     color: "#6504b5",
                     fontSize: "28px",
                  }}
               >
                  Living with Both Cats and Dogs
               </h1>
               <Collapse startingHeight={20} in={show}>
                  <Box
                     textAlign="left"
                     ml="7%"
                     fontFamily={"Cairo, sans-serif"}
                  >
                     <p>
                     I'm not sure where the phrase "fighting like cats and dogs" comes from, but in the majority of homes I am acquainted with, dogs and...
                     </p>
                     <br />
                     <h2>Are You Ready for a Pet?</h2>
                     <br />
                     <p>
                        Before you decide to surprise your family with a new pet
                        for the holidays, take into consideration the following
                        to determine if your family is ready to take on the
                        responsibility of caring for a pet:
                     </p>
                     <br />
                     <ol marginTop="10px">
                        <li>
                           How old are your kids? Different pets are appropriate
                           for different ages. For example, your 4-year-old who
                           is pleading for a cat is not capable of taking on the
                           responsibility. "Just because a child begs for a cat
                           or kitten does not mean that they are ready to have
                           one," says Barb Wills, who operates Cats Haven, a
                           no-kill shelter for cats in Indianapolis, Ind.
                           Instead, says Zawistowski, you might consider a
                           guinea pig, which is easy to care for, likes to be
                           held and rarely bites.
                        </li>
                        <br />
                        <li>
                           Do your kids really want a pet? "Children like
                           animals, but not all children really want to have
                           them around the house," says Zawistowski. Contrary to
                           popular belief, every little boy does not want or
                           need a dog. Just because your little one enjoys
                           playing with Grandma's poodle does not mean he's
                           ready or even wants to take on full-time care of a
                           poodle himself.
                        </li>
                        <br />
                        <li>
                           Have you thought about the cost? "That's one of the
                           things people often fail to anticipate," says
                           Zawistowski. Many people don't think past the initial
                           fee required to adopt. But, he says, a cat costs
                           about $350 to $400/year and a small or medium dog
                           costs about $400 to $500/year, with larger dogs even
                           more.
                        </li>
                        <br />
                        <li>
                           Are you committed? Pets are not something that you
                           can take home, try out and return if they don't suit
                           you. You're taking on a commitment to care for that
                           animal for the rest of its life. If your child is a
                           teen, remember that the animal will be with you when
                           your son or daughter heads off to college. "A cat can
                           live to be at least 15 years – we have one here who
                           is 21 years old," says Wills. "The family has to
                           realize that it is a lifetime commitment with vet
                           visits, supplies needed for its care, with time and
                           love to be spent on the pet."
                        </li>
                        <br />
                        <li>
                           Are you educated about what caring for an animal
                           entails? Don't forget that an animal's an animal.
                           That means cleaning up bathroom accidents and vomit,
                           picked at furniture if you want a cat and dealing
                           with other typical animal behaviors. "There are going
                           to be bumps in the road," says Zawistowski. "Be ready
                           and committed to work through those bumps."
                        </li>
                        <br />
                        <li>
                           Don't get a pet to teach your child responsibility.
                           If your child fails to be responsible, the animal may
                           be harmed. Instead, says Zawistowski, "It's a great
                           way of rewarding responsibility."
                        </li>
                     </ol>
                     <br />
                     <br />
                     <p>
                        OK, so you've thought it through, and you feel that
                        everyone is ready and committed. Now what? It's probably
                        not the best idea to have Fido or Socks waiting under
                        the tree on Christmas morning – and of course, don't
                        EVER wrap them up, as we've all seen done on TV a
                        million times.
                        <br />
                        <br />
                        Belinda Clarke, a mom living in Evanston, Ill., decided
                        to surprise her mom with a new cat on Thanksgiving. "She
                        was slightly apprehensive at first, since it was sprung
                        on her, but since we had had a cat before (which had
                        died several months before), I knew she would love it,"
                        she says. "And she did – after about two minutes. Now
                        both my parents absolutely love her."
                        <br />
                        <br />
                        While Clarke's holiday surprise did work out, many times
                        the apprehension she describes doesn't go away. So
                        rather than have to take Kitty back to the shelter or
                        find her a new home, Wills recommends purchasing a gift
                        certificate from the shelter to give to your loved one.
                        (You can also give a Pet Promise Certificate.) That way
                        you still keep the element of surprise, but in case it's
                        unwanted, no animals are affected.
                        <br />
                        <br />
                        Another idea, according to Zawistowski – which may be
                        more fun for kids – is to buy a stuffed dog or cat and
                        have it sitting with the gifts. You can purchase some of
                        the equipment for the pet like a carrier, leash or bed
                        and have the stuffed animal all decked out in gear. Then
                        you attach a note (or a Pet Promise Certificate) saying
                        everyone will go together to pick out their new pet
                        after the holidays.
                        <br />
                        <br />
                        <h2>Bringing Home Your New Family Member</h2>
                        <br />
                        <br />
                        Before you go pick up your new pet, get your family
                        involved in deciding what type, size and breed of animal
                        you'd consider. Take a trip to the bookstore or library,
                        and read up on which breed's characteristics might fit
                        in best with your family.
                        <br />
                        <br />
                        <br />
                        Once you've got an idea what you're looking for, where
                        should you go? An animal shelter. According to the
                        ASPCA, each year millions of dogs enter shelters, yet of
                        the approximately 59 million owned dogs in this country,
                        less than 20 percent are shelter adoptees. By adopting
                        at a shelter, you're giving a homeless pet a new chance
                        at life.
                        <br />
                        <br />
                        Petfinder accepts no responsibility for any liability or
                        for any injury or damages to any person or property
                        caused by any listed animal, as well as any cause of
                        action, claims, suits or demands whatsoever that may
                        arise as a result of such injury or damage.
                     </p>
                  </Box>
               </Collapse>

               <Button
                  size="lg"
                  onClick={handleToggle}
                  mt="1rem"
                  colorScheme="purple"
                  variant="outline"
                  marginLeft="20px"
               >
                  Learn {show ? "Less" : "More"}
               </Button>
            </div>
            <div
               style={{
                  width: "30%",
                  marginLeft: "20px",
                  padding: "10px",
                  background: "white",
                  borderRadius: "15px",
               }}
            >
               <img
                  src="https://www.petfinder.com/static/dog_bestMatch_rightRail-0e10aa465452304e3450c52f24c2bc3d.png"
                  alt=""
               />
               <h1 style={{ color: "#6504b5", fontSize: "40px" }}>
                  Find your best <br /> match
               </h1>
               <p style={{ fontSize: "20px" }}>It only takes 60 seconds.</p>
               <Button
                  size="lg"
                  borderRadius="20"
                  mt="1rem"
                  colorScheme="purple"
                  w="300px"
               >
                  GET STARTED
               </Button>
            </div>
         </div>
         <div>
            <div style={{ display: "flex", width: "95%", margin: "auto" }}>
               <div
                  style={{
                     display: "grid",
                     gridTemplateColumns: "repeat(3, 1fr)",
                     width: "60%",
                     textAlign: "left",
                     marginLeft: "7%",
                  }}
               >
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://www.petfinder.com/static/23d94ee13b6dc9656ec18dacd0c3cff2/00c62/Covid10_Image_PFArticle_0.webp"
                        }
                        dis={"FINDING A DOG"}
                        data={"Things to Consider Before You Adopt a Dog"}
                     />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://www.petfinder.com/static/8520930e29dbad198d5ec2180e45ddfe/b5957/dog-sitting-on-owners-lap-looking-at-the-camera-smiling.webp"
                        }
                        dis={"FINDING A DOG"}
                        data={
                           "Cool Dog Names"
                        }
                     />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://www.petfinder.com/static/89248be501fdd70d945ad6a421ed4ea5/2d900/dog-pit-bull-shite-26101063-1-orig-253x253.webp"
                        }
                        dis={"FINDING A DOG"}
                        data={"Dogs and Puppies for Sale"}
                     />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://www.petfinder.com/static/51292088cf0a8a58c12c3aca8759dcf1/00c62/ShelterDog_Image_PFArticle_0.webp"
                        }
                        dis={"FINDING A DOG"}
                        data={"Petsfinder's Pet Search has a new Look!"}
                     />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://www.petfinder.com/static/10f1cdb175b28fc328fb5128f4010300/f408a/happy-cat-smokey-joe-253x283.webp"
                        }
                        dis={"FINDING A DOG"}
                        data={
                           "Petsfinder's Pet List Scroller for facebook page"
                        }
                     />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://www.petfinder.com/static/23d94ee13b6dc9656ec18dacd0c3cff2/00c62/Covid10_Image_PFArticle_0.webp"
                        }
                        dis={"FINDING A DOG"}
                        data={"Things to Consider Before You Adopt a Dog"}
                     />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://www.petfinder.com/static/8520930e29dbad198d5ec2180e45ddfe/b5957/dog-sitting-on-owners-lap-looking-at-the-camera-smiling.webp"
                        }
                        dis={"FINDING A DOG"}
                        data={
                           "Cool Dog Names"
                        }
                     />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://www.petfinder.com/static/89248be501fdd70d945ad6a421ed4ea5/2d900/dog-pit-bull-shite-26101063-1-orig-253x253.webp"
                        }
                        dis={"FINDING A DOG"}
                        data={"Dogs and Puppies for Sale"}
                     />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://www.petfinder.com/static/51292088cf0a8a58c12c3aca8759dcf1/00c62/ShelterDog_Image_PFArticle_0.webp"
                        }
                        dis={"FINDING A DOG"}
                        data={"Petsfinder's Pet Search has a new Look!"}
                     />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://www.petfinder.com/static/10f1cdb175b28fc328fb5128f4010300/f408a/happy-cat-smokey-joe-253x283.webp"
                        }
                        dis={"FINDING A DOG"}
                        data={
                           "Petsfinder's Pet List Scroller for facebook page"
                        }
                     />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://www.petfinder.com/static/8520930e29dbad198d5ec2180e45ddfe/b5957/dog-sitting-on-owners-lap-looking-at-the-camera-smiling.webp"
                        }
                        dis={"FINDING A DOG"}
                        data={
                           "Cool Dog Names"
                        }
                     />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://www.petfinder.com/static/23d94ee13b6dc9656ec18dacd0c3cff2/00c62/Covid10_Image_PFArticle_0.webp"
                        }
                        dis={"FINDING A DOG"}
                        data={"Things to Consider Before You Adopt a Dog"}
                     />
                  </div>
               </div>
               <div
                  style={{
                     width: "30%",
                     marginTop: "30px",
                     justifyContent: "center",
                  }}
               >
                  <div
                     style={{
                        width: "100%",
                        marginLeft: "20px",
                        padding: "30px",
                        background: "white",
                        borderRadius: "15px",
                     }}
                  >
                     <img
                        src="https://tpc.googlesyndication.com/simgad/7664748080391793672"
                        alt=""
                     />
                     <p>Sponsored ad</p>
                  </div>
                  <br />

                  <div
                     style={{
                        width: "100%",
                        marginLeft: "20px",
                        padding: "10px",
                        background: "white",
                        borderRadius: "15px",
                     }}
                  >
                     <h1>Find Pet-Adoption Groups</h1>
                     <input
                        type="text"
                        style={{
                           width: "80%",
                           height: "30px",
                           border: "1px solid gray",
                        }}
                        placeholder="Location"
                     />
                     <br />
                     <br />
                     <input
                        type="text"
                        placeholder="Group Name"
                        style={{
                           width: "80%",
                           height: "30px",
                           border: "1px solid gray",
                        }}
                     />
                     <Button
                        size="lg"
                        borderRadius="20"
                        mt="1rem"
                        colorScheme="purple"
                        w="300px"
                     >
                        SEARCH
                     </Button>
                  </div>
                  <br />
                  <div
                     style={{
                        width: "100%",
                        marginLeft: "20px",
                        padding: "30px",
                        background: "white",
                        borderRadius: "15px",
                     }}
                  >
                     <img
                        src="https://tpc.googlesyndication.com/simgad/1171372932639143872"
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>

         <div style={{ marginRight: "10px" }}>
            <h1
               style={{
                  textAlign: "left",
                  marginLeft: "25%",
                  fontSize: "40px",
                  color: "#6504b5",
               }}
            >
              Recently Viewed Dogs
            </h1>
            <div>
               <div
                  style={{
                     display: "grid",
                     gridTemplateColumns: "repeat(3, 1fr)",
                     rowGap: "25px",
                     width: "60%",
                     textAlign: "left",
                     marginLeft: "8%",
                  }}
               >
                 
                
                  <div style={{ marginRight: "10px" }}>
                     <ProductSimple
                        image={
                           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqEvIECBe3VJh-Fpd0a0ULuoVif3F1R5Gs5-TY046lUWZtI62UHSlO67wBiK2nTiUkKY&usqp=CAU"
                        }
                        dis={"Byron"}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdoptingDogs;
