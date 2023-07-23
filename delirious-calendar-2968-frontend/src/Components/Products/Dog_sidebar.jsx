import React from 'react'
import { HiFilter } from "@react-icons/all-files/hi/HiFilter";
import { Checkbox, Stack, Text } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import "../../style/catsidebar.css"

export const DogSidebar = () => {
  return (
    <div className="sidebar">
    <div>
      <div className="postion">
        <p><HiFilter /></p>
      </div>
      <h1 style={{ fontSize: "22px" }}>Filter By</h1>
      <br />
      <div>
        <Text fontSize='lg' className="testing">Category</Text>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox value={"university"}>
            University
          </Checkbox>
          <Checkbox value={"school"}>
            School
          </Checkbox>
        </Stack>
      </div>
      <br />
      <hr />
      <div>
        <Text fontSize='lg'>Country</Text>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox value={"India"}>
            India
          </Checkbox>
          <Checkbox value={"USA"}>
            USA
          </Checkbox>
          <Checkbox value={"UK"}>
            UK
          </Checkbox>
          <Checkbox value={"Japan"}>
            Japan
          </Checkbox>
        </Stack>
      </div>
      <br />
      <hr />
      <div>
        <Text fontSize='lg'>City</Text>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox value={"Pasadena"}>
            Pasadena
          </Checkbox>
          <Checkbox value={"Cambridge"}>
            Cambridge
          </Checkbox>
          <Checkbox value={"Pune"}>
            Pune
          </Checkbox>
          <Checkbox value={"Nashik"}>
            Nashik
          </Checkbox>
          <Checkbox value={"Bangalore"}>
            Bangalore
          </Checkbox>
          <Checkbox value={"Tokyo"}>
            Tokyo
          </Checkbox>
        </Stack>
      </div>
      <br />
      <hr />
      <div>
        <Text fontSize='lg'>Ownership</Text>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox value={"private"}>
            Private
          </Checkbox>
          <Checkbox value={"Government"}>
            Government
          </Checkbox>
        </Stack>
      </div>
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
  )
}


