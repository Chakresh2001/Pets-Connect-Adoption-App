import React from 'react'
import { Fade, ScaleFade, Slide, SlideFade, Collapse, useDisclosure, Button, Box } from '@chakra-ui/react'
import ProductSimple from './ProductSimple'
import { ChevronRightIcon } from '@chakra-ui/icons'
import "./About.css"

export const AboutPetfinder = () => {
    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)

  return (
   <div style={{background:"#EDE7F6", paddingTop:"50px"}} className="about-container">
    <div style={{marginRight:"20px",display:"flex", margin:"auto", marginLeft:"10%", marginTop:"80px"}}>
    <a style={{marginRight:"20px"}} href="http://localhost:3000/">Home <ChevronRightIcon/></a>
           
           <a style={{marginRight:"20px"}} href="">Adopt or Get Involved <ChevronRightIcon/></a>
           
           <a style={{marginRight:"20px"}} href="">About Petfinder</a>
    </div>
    <h1 style={{ textAlign:"left", marginLeft:"10%", fontSize:"40px", color:"#607D8B" }}>About Petfinder</h1>
     <div style={{display:"flex", margin:"auto", width:"95%", margin:"auto"}} >
       
       <div style={{width:"60%", border:"1px solid white",textAlign:"left", marginLeft:"7%", backgroundColor:"white", marginTop:"20px", borderRadius:"10px", padding:"10px"}}>
        <h1 style={{fontFamily:"Cairo, sans-serif", textAlign:"left", marginLeft:"7%", marginBottom:"20px", color:"#607D8B" }}>ABOUT PETFINDER</h1>
        <h1 style={{ fontFamily:"Cairo, sans-serif", textAlign:"left", marginLeft:"7%", marginBottom:"20px", color:"#6504b5", fontSize:"28px"}}>Petfinder's Misson</h1>
        <Collapse startingHeight={20} in={show}>
  <Box textAlign="left" ml="7%" fontFamily={"Cairo, sans-serif"} >
    <p>
      Petfinder is an online, searchable database of animals who need homes. It
      is also a directory of nearly 11,000 animal shelters and adoption
      organizations across the U.S., Canada, and Mexico. Organizations maintain
      their own home pages and available-pet databases.
    </p>
    <br />
    <h2>OUR MISSION</h2>
    <br />
    <p>To use Internet technology and the resources it can generate to:</p>

    <ol marginTop="10px">
      <li>Increase public awareness of the availability of high-quality adoptable pets</li>
      <li>Increase the overall effectiveness of pet adoption programs across North America to the extent that the euthanasia of adoptable pets is eliminated</li>
      <li>Elevate the status of pets to that of family member</li>
    </ol>
    <br />
    <br />
    <p>
    From the comfort of their personal computers, pet lovers can search for a pet that best matches their needs. They can then reference a shelter’s web page and discover what services it offers. Petfinder also includes discussion forums, a pet-care resource directory and a library of free pet-care articles to help keep pets in their homes.
<br />
<br />
Petfinder is updated DAILY.
<br />
<br />
Organizations wishing to participate should register. A contact person should be responsible for direct communications with Petfinder. Only nonprofit organizations will be included (but Federal 501(c)(3) status is not necessary).
<br />
<br />
Petfinder is made up of animal-care professionals and regular people volunteering for their local animal welfare organizations all working together to maintain active and accurate homeless pet lists. Most animal welfare volunteers have “real jobs” by day. The success and the magnitude of this project is largely due to their tireless efforts to make a difference. If you would like to help, let us know! You can find us
<br />
<br />
at <a href="https://www.petfinder.com/.">https://www.petfinder.com/.</a> Email: <a href='pets@petfinder.com.'>pets@petfinder.com.</a>
<br />
<br />
If you have a Website and would like to help us promote shelter pets as the #1 choice for a new pet, you may use our free widgets and graphics to add Petfinder to your website. You may also want to check out our Featured Pet Module which allows you to show Petfinder pets from your community on your own home page.
<br />
<br />
<h2>DISCLAIMER</h2>
<br />
Petfinder is only a directory of homeless pets and pet adoption organizations. No information in Petfinder is guaranteed. Although the information on Petfinder is updated frequently, it is always best to call the facility or organization that lists the pet to insure it is still available and to insure the information listed in Petfinder is accurate. It is crucial that any pet found through an adoption service be thoroughly examined by a veterinarian immediately upon adoption. Any pets found, adopted through, or listed in Petfinder are the sole responsibility of the adoption organizations and/or the adopting party.
<br />
<br />
Petfinder accepts no responsibility for any liability or for any injury or damages to any person or property caused by any listed animal, as well as any cause of action, claims, suits or demands whatsoever that may arise as a result of such injury or damage.
    </p>
  </Box>
</Collapse>

<Button size="lg" onClick={handleToggle} mt="1rem" border={"2px solid #6504b5"} color={"#6504b5"} colorScheme='purpule' variant='outline' marginLeft="20px">
  Learn {show ? "Less" : "More"}
</Button>
       </div>
       <div style={{width:"30%", marginLeft:"20px", padding:"10px", background:"white", borderRadius:"15px"}}>
         <img src="https://www.petfinder.com/static/dog_bestMatch_rightRail-0e10aa465452304e3450c52f24c2bc3d.png" alt="" />
         <h1 style={{color:"#6504b5", fontSize:"40px"}}>Find your best <br /> match</h1>
         <p style={{fontSize:"20px"}}>It only takes 60 seconds.</p>
       <Button size="lg" borderRadius="20" mt="1rem" bg={'#6504b5'} colorScheme='purpule' w="300px" >GET STARTED</Button>
       </div>
    </div>
<div>
<div style={{display:"flex", width:"95%", margin:"auto"}}>
<div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", width:"60%", textAlign:"left", marginLeft:"7%"}}>
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://www.petfinder.com/static/3dd7d912ce48e5d7e4d38e38d0465bdd/3d0f7/DownloadApp_TopImage.webp"} dis={"ABOUTPETFINDER"} data={"Download the pet finder App today!"}/>
    </div>
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://www.petfinder.com/static/fc8892765d68b0a629d732cb0a9c561d/154e9/WPPf-hero-632x379.webp"} dis={"ABOUTPETFINDER"} data={"Powered by Purnia. Driven by Pets & There people"} />
    </div>
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sLn5Nrc9ZMIPUYo20fsLbwZtVUzkGC7v8Ml5Phb07FVbir5mOHffKGgrF07f0jW-iWY&usqp=CAU"} dis={"ABOUTPETFINDER"} data={"Petsfinder Mission"} />
    </div>
    <div  style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://www.petfinder.com/static/1f7f8a66e2689008fdb0aff834abd255/af4b6/cat-new-search-launch-woah-632x632.webp"} dis={"ABOUTPETFINDER"}  data={"Petsfinder's Pet Search has a new Look!"} />
    </div>
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQ3cn77-UW7ivj4YtY9G_Pcik7Ef7FcVb1sAkxCzQ2uf07QCkBLPPoANrVaPIIJTy2Hs&usqp=CAU"} dis={"ABOUTPETFINDER"} data={"Petsfinder's Pet List Scroller for facebook page"} />
    </div>

    </div >
    <div style={{width:"30%", marginTop:"30px", justifyContent:"center"}}>
    <div style={{width:"100%", marginLeft:"20px", padding:"30px", background:"white", borderRadius:"15px"}}>
           <img src="https://tpc.googlesyndication.com/simgad/7664748080391793672" alt="" />
           <p>Sponsored ad</p>
        </div>
        <br />

    <div className="search-box" style={{width:"100%", marginLeft:"20px", padding:"10px", background:"white", borderRadius:"15px"}}>
            <h1>Find Pet-Adoption Groups</h1>
            <input type="text" style={{width:"80%", height:"30px", border:"1px solid gray"}} placeholder='Location' /><br />
            <br />
            <input type="text" placeholder='Group Name' style={{width:"80%", height:"30px", border:"1px solid gray" }} />
            <Button size="lg" borderRadius="20" mt="1rem" bg={'#6504b5'} colorScheme='purpule' w="300px" >SEARCH</Button>
        </div>
        <br />
         <div style={{width:"100%", marginLeft:"20px", padding:"30px", background:"white", borderRadius:"15px"}}>
           <img src="https://tpc.googlesyndication.com/simgad/1171372932639143872" alt="" />
        </div>
    </div>
    </div>
</div>
    <div  className="nearby-pets" >
        <h1 style={{ textAlign:"left", marginLeft:"25%", fontSize:"40px", color:"#6504b5" }}>Pets avilable for Adoption Nearby</h1>
        <div>
        <div className="nearby-pets-list" >
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55063999/1/?bust=1683800930&width=316"} data={"Scooby"} />
    </div>
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63947579/1/?bust=1683303760&width=316"} data={"Crunch"} />
    </div>
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqEvIECBe3VJh-Fpd0a0ULuoVif3F1R5Gs5-TY046lUWZtI62UHSlO67wBiK2nTiUkKY&usqp=CAU"} dis={"ABOUTPETFINDER"} />
    </div>
    </div>
        </div>
    </div>
   </div>
  )
}
