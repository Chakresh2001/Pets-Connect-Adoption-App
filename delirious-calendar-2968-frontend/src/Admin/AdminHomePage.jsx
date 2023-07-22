import { Box, Button, Flex, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { UserCard } from './UserCard'
import { PostCard } from './PostCard'

export const AdminHomePage = () => {
    
    const toast = useToast()

    const [users, setUsers] = useState([])
    const [userState, setUserState] = useState(false)

    const [posts, setPosts] = useState([])
    const [postsState, setPostsState] = useState(false)

    const [dogs, setDogs] = useState([])
    const [DogsState, setDogsState] = useState(false)


    const [Cats, setCats] = useState([])
    const [CatsState, setCatsState] = useState(false)

    const [formState, setFormState] = useState(false)

    const [currentPage, setCurrentPage] = useState(1);


  // Function to handle "Next" button click
  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle "Previous" button click
  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [petType, setPetType] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');


    let getUserData = ()=>{
        axios.get("https://shy-erin-perch-kit.cyclic.app/admin/users")
        .then((res)=>{
            setUsers(res.data.users)
        })
        .catch((err)=>console.log(err))

    }

    let getPostData = ()=>{
      axios.get("https://shy-erin-perch-kit.cyclic.app/admin/forms")
        .then((res)=>{
            setPosts(res.data.posts)
        })
        .catch((err)=>console.log(err))
    }

    let handleClickUsers = ()=>{

        setUserState(!userState)
        setPostsState(false)
        setDogsState(false)
        setCatsState(false)
        setFormState(false)
        getUserData()
       
    }

    let handleClickPosts = ()=>{
        setUserState(false)
        setDogsState(false)
        setCatsState(false)
        setFormState(false)
        setPostsState(!postsState)
        getPostData()
    }

    let handleBlockUSer = (id)=>{

        axios.post(`https://shy-erin-perch-kit.cyclic.app/admin/block/${id}`)
        .then((res)=>{
            getUserData()
            toast({
                title: 'User Successfully Blocked',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        })
        .catch((err)=>console.log(err))

    }

    let handleDogsData = ()=>{
        setDogsState(!DogsState)
        setUserState(false)
        setPostsState(false)
        setCatsState(false)
        setFormState(false)
        axios.get(`https://shy-erin-perch-kit.cyclic.app/dogs/get?page=${currentPage}&limit=10`)
        .then((res)=>{
            setDogs(res.data.dogs)
        })
        .catch((err)=>console.log(err))
    }

    let handleCatsData = ()=>{
        setDogsState(false)
        setUserState(false)
        setPostsState(false)
        setFormState(false)
        setCatsState(!CatsState)
        axios.get("https://shy-erin-perch-kit.cyclic.app/cats/get")
        .then((res)=>{
            setCats(res.data.cats)
        })
        .catch((err)=>console.log(err))
    }

    let handleFormState=()=>{
        setDogsState(false)
        setUserState(false)
        setPostsState(false)
        setCatsState(false)
        setFormState(!formState)
    }

    let handleReject=(id)=>{
      axios.delete(`https://shy-erin-perch-kit.cyclic.app/post/delete/${id}`)
      .then((res)=>{
        toast({
          title: 'Request Rejected',
          status: 'error',
          duration: 2000,
          isClosable: true,
      })
        getPostData()
      })
    }

    let handleApprove = (id)=>{
      axios.patch(`https://shy-erin-perch-kit.cyclic.app/post/patch/${id}`)
      .then((res)=>{
        toast({
          title: 'Request Approved',
          status: 'success',
          duration: 2000,
          isClosable: true,
      })
        getPostData()
      })
    }

    

  return (
    <div>

    <Flex justifyContent={"space-evenly"} alignItems={"center"} border={"1px solid red"} height="100px">

    <Button onClick={handleClickUsers}>Users</Button>
    <Button onClick={handleClickPosts}>Requests</Button>
    <Button onClick={handleDogsData}>Dog's Data</Button>
    <Button onClick={handleCatsData}>Cat's Data</Button>
    <Button onClick={handleFormState}>Add Data</Button>

    </Flex>

    
        {userState && <div style={{marginTop:"40px"}}>
        <h1 style={{fontSize:"24px", fontWeight:"bold"}}>Users Data</h1>
        <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap="20px" mt="45px" >
            {
                users.map((ele)=>(
                        
                   
                    <Box padding="10px">
                      <UserCard {...ele} handleBlockUSer={handleBlockUSer}/>
                    </Box>
                  
                ))
            }
        </Box>
        </div>
        }
    

    {
        postsState && <div style={{marginTop:"40px"}}>
                    <h1 style={{fontSize:"24px", fontWeight:"bold"}}>Request Data</h1>
                    <Box  display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap="20px" mt="45px"  >

            {
                posts.map((ele)=>(
                    <div>
                      <PostCard {...ele} handleReject={handleReject} handleApprove={handleApprove}/>
                    </div>
                ))
            }
                    </Box>
        </div>
    }

    {
        DogsState && <div style={{marginTop:"40px"}}>
                    <h1 style={{fontSize:"24px", fontWeight:"bold"}}>Dogs Data</h1>
                    <Box  display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap="20px" mt="45px"  >

            {
                dogs.map((ele)=>(
                    <div>
                      <PostCard {...ele} handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick}/>
                    </div>
                ))
            }
                    </Box>
        </div>
    }

    {
        CatsState && <div>
            <h1>Cats Data</h1>
            {
                Cats.map((ele)=>(
                    <div key={ele._id} style={{border:"1px solid black", marginTop:"10px"}}>
                    <p>{ele.cat_name}</p>
                    <p>{ele.breed}</p>
                    <p>{ele.age}</p>
                    <p>{ele.location}</p>
                    <p>{ele.price}</p>
                    <Button>Delete</Button>
                    </div>
                ))
            }
        </div>
    }

    {
        formState && <div>
            <h1>Add Pets</h1>
            <div className="contribution-form-container">
      <br />
      <h2 className='header'>Contribute to Petfinder</h2>
      <form >
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>



        <div className="form-group">
          <label htmlFor="petType">Pet Type:</label>
          <input
            type="text"
            id="petType"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="petBreed">Pet Breed:</label>
          <input
            type="text"
            id="petBreed"
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button className="Button" type="submit">Submit</button>
      </form>
    </div>
        </div>
    }

    </div>
  )
}
