import React from 'react'
// import bgImg from '../assets/img1.jpg'
import { useForm } from 'react-hook-form';
import login_picture from "../Assets/login_picture.jpg"
import "./Register.css"
export default function Register() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
   <div className='Regis'> <section>
   <div className="register">
       <div className="col-1">
           <h2 className='Sign'>Sign Up</h2>
           <span className='Sign1'>Register and Enjoy the service</span>

           <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
               <input type="text" {...register("username")} placeholder='UserName' />
               <input type="text" {...register("email")} placeholder='Email' />
               <input type="text" {...register("password")} placeholder='Password' />
               <input type="text" {...register("confirmpwd")} placeholder='Confirm Password' />
            
               <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Mobile Number' />
               {errors.mobile?.type === "required" && "Mobile Number is required"}
               {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
               <button className='btn'>Sign Up</button>
           </form>

       </div>
       <div className="col-2">
           <img src={login_picture} alt="" />
       </div>
   </div>
</section></div>
  )
}