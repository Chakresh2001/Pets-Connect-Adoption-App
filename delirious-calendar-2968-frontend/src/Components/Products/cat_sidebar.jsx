
import { HiFilter } from "@react-icons/all-files/hi/HiFilter";
import { Checkbox, Stack, Text } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import "../../style/catsidebar.css"
import { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"



 const CatSidebar = () => {

  const [searchparams,setSearchparams]=useSearchParams();

  const initialgender=searchparams.getAll("gender");
  const [gender,setgender]=useState(initialgender||[])

  const initialcolor=searchparams.getAll("color");
  const [color, setcolor] = useState(initialcolor||[]);

const initialsize=searchparams.getAll("size");
const [size,setsize]=useState(initialsize||[])

  const initilasort=searchparams.get("order")
  const [order,setOrder]=useState(initilasort||"")


// const initialownership=searchparams.getAll("ownership");
// const [ownership,setOwnership]=useState(initialownership||[])


const filterBygender=(e)=>{
   const {value}=e.target
   let newgender=[...gender];
   if (newgender.includes(value)){
         newgender=newgender.filter((e)=>e!==value)
   }
   else{
         newgender.push(value)
   }
   setgender(newgender)
   // console.log(gender)
}

const filterByColor=(e)=>{
   const {value}=e.target
   let newColor=[...color];
   if (newColor.includes(value)){
      newColor=newColor.filter((e)=>e!==value)
   }
   else{
      newColor.push(value)
   }
   setcolor(newColor)
   // console.log(gender)
}
const filterBySize=(e)=>{
   const {value}=e.target
   let newSize=[...size];
   if (newSize.includes(value)){
      newSize=newSize.filter((e)=>e!==value)
   }
   else{
      newSize.push(value)
   }
   setsize(newSize)
   // console.log(gender)
}

useEffect(()=>{
   let params={
      gender,
      color,
      size
    }
    order && (params.order=order)
    setSearchparams(params)
  },[gender,color,size,order])


  return (
    <div className="sidebar">
      <div>
      <div className="postion">
        <p><HiFilter /></p>
      </div>
      <h1 style={{ fontSize: "22px" }}>Filter By</h1>
        <br />
        <div>
          <Text fontSize='lg' className="testing">Gender</Text>
          <Stack pl={6} mt={1} spacing={1}>
            <Checkbox value={"Male"} isChecked={gender.includes("Male")} onChange={filterBygender}>
              Male
            </Checkbox>
            <Checkbox value={"Female"} isChecked={gender.includes("Female")} onChange={filterBygender}>
              Female
            </Checkbox>
          </Stack>
        </div>
        <br />
        <hr />
        <div>
          <Text fontSize='lg'>Color</Text>
          <Stack pl={6} mt={1} spacing={1}>
            <Checkbox value={"Brown"} isChecked={color.includes("Brown")} onChange={filterByColor}>
              Brown
            </Checkbox>
            <Checkbox value={"Black"} isChecked={color.includes("Black")} onChange={filterByColor}>
              Black
            </Checkbox>
            <Checkbox value={"White"} isChecked={color.includes("White")} onChange={filterByColor}>
              White
            </Checkbox>
            <Checkbox value={"Gray"} isChecked={color.includes("Gray")} onChange={filterByColor}>
              Gray
            </Checkbox>
          </Stack>
        </div>
        <br />
        <hr />
        <div>
          <Text fontSize='lg'>Size</Text>
          <Stack pl={6} mt={1} spacing={1}>
            <Checkbox value={"Small"} isChecked={size.includes("Small")} onChange={filterBySize}>
              Small
            </Checkbox>
            <Checkbox value={"Medium"} isChecked={size.includes("Medium")} onChange={filterBySize}>
              Medium
            </Checkbox>
            <Checkbox value={"Large"} isChecked={size.includes("Large")} onChange={filterBySize}>
              Large
            </Checkbox>
           
          </Stack>
        </div>
        <br />
        <hr />
       
        <br />
        <div>
          <h1 style={{ fontSize: "20px" }}>Sort By Rating</h1>
          <br />
          <div className="shortdiv">
            <RadioGroup defaultValue=''>
              <Stack>
                <Radio value=''>
                  ALL
                </Radio>
                <Radio value='asc'>
                  Low to High
                </Radio>
                <Radio value='desc'>
                  High to Low
                </Radio>
              </Stack>
            </RadioGroup>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};
export default CatSidebar