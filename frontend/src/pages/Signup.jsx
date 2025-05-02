import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
  
  const[name , setName]=useState()
  const[email , setemail]=useState()
  const[pass , setpass]=useState()
  const navigate = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault()
    
    axios.post('http://localhost:1000/signup',{name,email,pass})
         .then((result)=>{
          console.log(result)
          navigate('/login')

         })
         .catch((err)=>{
          console.log(err)
          alert("Registration failed")
         })


  }
  return (
    
    <>
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
           <div className='bg-white p-3 rounded w-25'>
               <h2>Register</h2>
               <form onSubmit={handleSubmit}>
                   <div className='mb-3'>
                      <label htmlFor='email'>Name</label>
                      <input
                        type='text'placeholder='Enter name' autoCapitalize='off'
                        name='name'
                        className='form-control rounded-0'
                        onChange={(e)=>{setName(e.target.value)}}
                      />
                   </div>
                   <div className='mb-3'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='email'placeholder='Enter email' autoCapitalize='off'
                        name='email'
                        className='form-control rounded-0'
                        onChange={e=>setemail(e.target.value)}
                      />
                   </div>
                   <div className='mb-3'>
                      <label htmlFor='email'>Password</label>
                      <input
                        type='password'placeholder='Enter password' autoCapitalize='off'
                        name='pass'
                        className='form-control rounded-0'
                        onChange={e=>setpass(e.target.value)}
                      />
                   </div>

                   <button type='submit' 
                  //  onClick={()=> alert("register successfully")}
                   className='btn btn-success w-100 rounded-0'>
                    Sign-up 
                   </button>
                   </form>
                   <p>Already Have an Account</p>
                   <Link to='/login' className='btn btn-default border bg-light w-100 rounded-0 text-decoration-none'>
                   Login</Link>
                
          </div>

        </div>
    </>
  )
}

export default Signup