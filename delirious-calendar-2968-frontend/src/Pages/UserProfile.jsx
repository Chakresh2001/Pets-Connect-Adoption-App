import { Box, Input, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { authContext } from "../context/AuthContext";

export const UserProfile = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    location: "",
    gender: "",
  });

  let {AuthNameFunc} = useContext(authContext)

  const toast = useToast()

  let getUserData = ()=>{
    let token = JSON.parse(localStorage.getItem("token"));
    fetch("https://cute-erin-tick-hat.cyclic.cloud/admin/users/get", {
      method: "GET",
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.users);
        setData(res.users);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUserData()
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(data)
    let token = JSON.parse(localStorage.getItem("token"));

    // The endpoint URL for updating user data
    const updateUserEndpoint =
      "https://cute-erin-tick-hat.cyclic.cloud/user/patch";

    // Assuming the API expects a PATCH request with the updated data in the "data" variable.
    // You may need to adjust the API endpoint and data structure based on your specific backend requirements.
    axios
      .patch(
        updateUserEndpoint,
        {
          name: data.name,
          email: data.email,
          location: data.location,
          gender: data.gender,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast({
            title: response.data.message,
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
        console.log("User data updated successfully:", response.data);
        getUserData()
        AuthNameFunc(data.name)
        // Add any success handling logic here (e.g., show a success message).
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
        // Add any error handling logic here (e.g., show an error message).
      });
  };

  return (
    <Box mb="50px" display={"flex"} justifyContent={"center"}>
      <Box
        width={"50%"}
        boxShadow={
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        }
        borderRadius={"15px"}
        padding="20px"
        mt="120px"
      >
        <FormControl >
          <FormLabel mt="15px">User Name</FormLabel>
          <Input type="text" placeholder="Name" value={data.name} name="name" onChange={handleInputChange} />
          <FormHelperText>We'll never share your Name.</FormHelperText>

          <FormLabel mt="15px">Email Address</FormLabel>
          <Input type="email" placeholder="Email" value={data.email} name="email" onChange={handleInputChange} />
          <FormHelperText>We'll never share your email.</FormHelperText>

          <FormLabel mt="15px">User Location</FormLabel>
          <Input type="text" placeholder="Location" value={data.location} name="location" onChange={handleInputChange} />
          <FormHelperText>We'll never share your Location.</FormHelperText>

          <FormLabel mt="15px">User Gender</FormLabel>
          <select value={data.gender} name="gender" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Others">Not To Mention</option>
          </select>
          <FormHelperText>We'll never share your Gender.</FormHelperText>

          <Input
            mt="15px"
            bg="green.400"
            color="white"
            _hover={{ cursor: "pointer", backgroundColor: "green.500" }}
            type="submit"
            onClick={handleFormSubmit}
          />
        </FormControl>
      </Box>
    </Box>
  );
};
