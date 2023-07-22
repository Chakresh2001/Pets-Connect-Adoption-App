import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { CgChevronDown } from 'react-icons/cg';
import { CgChevronUp } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react'

import './Navbar.css'
import { AboutPetfinder } from '../Pages/AboutPetfinder';
import { AdoptingPets } from '../Pages/AdoptingPets';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  


  return (
    <div style={{ width: "90%", display: "flex", justifyContent: "space-evenly", height: "60px"  }}>

      <div style={{ width: "40%", display: "flex", margin: "auto", marginLeft: "40px", color: "#3A1456" }}>
        <a href="http://localhost:3000/"><img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJpd1Z1-nXD8n-9gbkbXcOd7AHwC6AXbz5WgL_aug-yjrRbMD9TMi0-sw4OMvt1uI4KQ&usqp=CAU" alt="" /></a>
        <h3 style={{marginRight:"10px", marginLeft:"10px"}}>ALL ABOUT PETS</h3>
        <h3  href="#" onClick={toggleNav} style={{ cursor: "pointer", width:"30px", fontSize:"20px", fontWeight:"bolder" }}> {isNavOpen ? <CgChevronUp /> : <CgChevronDown />}</h3>
      </div>

      <div style={{ width: "60%", display: "flex", justifyContent: "space-evenly", marginLeft: "30%", alignItems: "center" }}>
        <h3><a href=""><AiFillHeart /></a></h3>
        <h3><a href="">Signup</a> </h3>
        <h3><a href="">Login</a></h3>
      </div>

      {isNavOpen && (
        <div style={{ position: "absolute", top: '2%', left: 0, width: '100%', backgroundColor: '#6504b5', color: '#fff', transition: 'height 0.5s', boder:"1px solid red" }}>
          
          <ul style={{ listStyleType: 'none', padding: 0, display: "flex", justifyContent: "space-evenly", height: "60px", alignItems: "center" }}>
            <li><Menu >
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  ADOPT OR GET INVOLVED
  </MenuButton>
   <MenuList color='#fff' bgColor="#6504b5">
    <Link to="/AboutPetfinder">
    <MenuItem bgColor="#6504b5" >About petfinder</MenuItem>
    </Link>
    <Link to="/AdoptingPets">
    <MenuItem bgColor="#6504b5" >Adopting Pets</MenuItem>
    </Link>
    <MenuItem bgColor="#6504b5">Animals Shelter & Rescues</MenuItem>
    <MenuItem bgColor="#6504b5">Petfinder Foundation</MenuItem>
  </MenuList>
</Menu></li>
<li><Menu>
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  DOGS & PUPPIES
  </MenuButton>
  <MenuList color='#fff' bgColor="#6504b5" >
  <Link to="/dogadopt">
    <MenuItem bgColor="#6504b5">Dog Adoption</MenuItem>
    </Link>
    <MenuItem bgColor="#6504b5">Dog Breeds</MenuItem>
    <MenuItem bgColor="#6504b5">Feeding your Dog</MenuItem>
    <MenuItem bgColor="#6504b5">Dog Behavior</MenuItem>
    <MenuItem bgColor="#6504b5">Dog Health & Wellness</MenuItem>
    <MenuItem bgColor="#6504b5">Dog Training</MenuItem>
    <MenuItem bgColor="#6504b5">Other Dog Information</MenuItem>
  </MenuList>
</Menu></li>
<li><Menu>
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  CATS & KITTENS
  </MenuButton>
  <MenuList color='#fff' bgColor="#6504b5" >
    <Link to="/catadopt">
      <MenuItem bgColor="#6504b5">Cat Adoption</MenuItem>
    </Link>
    <MenuItem bgColor="#6504b5">Cat Breeds</MenuItem>
    <MenuItem bgColor="#6504b5">Feeding your Cat</MenuItem>
    <MenuItem bgColor="#6504b5">Cat Behavior</MenuItem>
    <MenuItem bgColor="#6504b5">Cat Health & Wellness</MenuItem>
    <MenuItem bgColor="#6504b5">Cat Training</MenuItem>
    <MenuItem bgColor="#6504b5">Other Cat Information</MenuItem>
  </MenuList>
</Menu></li>
<li><Menu>
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  OTHER TYPES OF PETS
  </MenuButton>
  <MenuList color='#fff' bgColor="#6504b5">
    <MenuItem bgColor="#6504b5">Birds</MenuItem>
    <MenuItem bgColor="#6504b5">Exotic Pets</MenuItem>
    <MenuItem bgColor="#6504b5">Guinea Pigs</MenuItem>
    <MenuItem bgColor="#6504b5">Horses</MenuItem>
    <MenuItem bgColor="#6504b5">Rabbits</MenuItem>
    <MenuItem bgColor="#6504b5">Reptiles</MenuItem>
    <MenuItem bgColor="#6504b5">Small & Furry Pets</MenuItem>
  </MenuList>
</Menu></li>
<li><Menu>
<Link to="/ContributionForm">
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  
  CONTRIBUTION
  
  </MenuButton>
  </Link>
  {/* <MenuList color='#fff' bg="#7E5A9B">
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList> */}
</Menu></li>
          </ul>
        </div>
      )}
      <div className="hamburger-icon" onClick={toggleNav}>
        <GiHamburgerMenu />
      </div>
     
    </div>
  )
}

export default Navbar;


