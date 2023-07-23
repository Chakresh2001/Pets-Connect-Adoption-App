import React from 'react'
// import bgImg from '../assets/img1.jpg'
import { useForm } from 'react-hook-form';
import login_picture from "../Assets/login_picture.jpg"
export default function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
   <div className='Regis'>
     <section>
        <div className="register">
            <div className="col-1">
            <h2 className="Sign">Login</h2>
            <span className="Sign1">login to meet your furry friend</span>

 <form id='form' className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
     <input type="email" {...register("email", { required: true })}  placeholder='Username' />
     {errors.email && <span style={{ color: "red" }}>
         *Email* is mandatory </span>}
     <input type="password" {...register("password")} placeholder='Password' />
     <button className='btn'>Sign In</button>
 </form>
            </div>
            <div className="col-2">
                <img src={login_picture} alt="" />
            </div>
        </div>
    </section>
   </div>
  )
}

{/* <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
             
                </form> */}
