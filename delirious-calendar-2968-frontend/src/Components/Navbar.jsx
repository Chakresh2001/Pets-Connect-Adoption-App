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
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Text,
} from '@chakra-ui/react'

import './Navbar.css'


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  


  return (
    <div style={{ width: "90%", display: "flex", justifyContent: "space-evenly", height: "60px" }}>

      <div style={{ width: "40%", display: "flex", margin: "auto", marginLeft: "40px", color: "#3A1456" }}>
        <img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJpd1Z1-nXD8n-9gbkbXcOd7AHwC6AXbz5WgL_aug-yjrRbMD9TMi0-sw4OMvt1uI4KQ&usqp=CAU" alt="" />
        <h3 style={{marginRight:"10px", marginLeft:"10px"}}>ALL ABOUT PETS</h3>
        <h3  href="#" onClick={toggleNav} style={{ cursor: "pointer", width:"30px", fontSize:"20px", fontWeight:"bolder" }}> {isNavOpen ? <CgChevronUp /> : <CgChevronDown />}</h3>
      </div>

      <div style={{ width: "60%", display: "flex", justifyContent: "space-evenly", marginLeft: "30%", alignItems: "center" }}>
        <h3><a href=""><AiFillHeart /></a></h3>
        <h3><a href="">Signup</a> </h3>
        <h3><a href="">Login</a></h3>
      </div>

      {isNavOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', backgroundColor: '#7E5A9B', color: '#fff', transition: 'height 0.5s' }}>
          
          <ul style={{ listStyleType: 'none', padding: 0, display: "flex", justifyContent: "space-evenly", height: "60px", alignItems: "center" }}>
            <li><Menu >
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  ADOPT OR GET INVOLVED
  </MenuButton>
  <MenuList color='#fff' bgColor="#502274">
    <MenuItem bgColor="#502274">About petfinder</MenuItem>
    <MenuItem bgColor="#502274">Adopting Pets</MenuItem>
    <MenuItem bgColor="#502274">Animals Shelter & Rescues</MenuItem>
    <MenuItem bgColor="#502274">Petfinder Foundation</MenuItem>
  </MenuList>
</Menu></li>
<li><Menu>
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  DOGS & PUPPIES
  </MenuButton>
  <MenuList color='#fff' bgColor="#502274" >
    <MenuItem bgColor="#502274">Dog Adoption</MenuItem>
    <MenuItem bgColor="#502274">Dog Breeds</MenuItem>
    <MenuItem bgColor="#502274">Feeding your Dog</MenuItem>
    <MenuItem bgColor="#502274">Dog Behavior</MenuItem>
    <MenuItem bgColor="#502274">Dog Health & Wellness</MenuItem>
    <MenuItem bgColor="#502274">Dog Training</MenuItem>
    <MenuItem bgColor="#502274">Other Dog Information</MenuItem>
  </MenuList>
</Menu></li>
<li><Menu>
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  CATS & KITTENS
  </MenuButton>
  <MenuList color='#fff' bgColor="#502274" >
    <MenuItem bgColor="#502274">Cat Adoption</MenuItem>
    <MenuItem bgColor="#502274">Cat Breeds</MenuItem>
    <MenuItem bgColor="#502274">Feeding your Cat</MenuItem>
    <MenuItem bgColor="#502274">Cat Behavior</MenuItem>
    <MenuItem bgColor="#502274">Cat Health & Wellness</MenuItem>
    <MenuItem bgColor="#502274">Cat Training</MenuItem>
    <MenuItem bgColor="#502274">Other Cat Information</MenuItem>
  </MenuList>
</Menu></li>
<li><Menu>
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  OTHER TYPES OF PETS
  </MenuButton>
  <MenuList color='#fff' bgColor="#502274">
    <MenuItem bgColor="#502274">Birds</MenuItem>
    <MenuItem bgColor="#502274">Exotic Pets</MenuItem>
    <MenuItem bgColor="#502274">Guinea Pigs</MenuItem>
    <MenuItem bgColor="#502274">Horses</MenuItem>
    <MenuItem bgColor="#502274">Rabbits</MenuItem>
    <MenuItem bgColor="#502274">Reptiles</MenuItem>
    <MenuItem bgColor="#502274">Small & Furry Pets</MenuItem>
  </MenuList>
</Menu></li>
<li><Menu>
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  CONTRIBUTION
  </MenuButton>
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


