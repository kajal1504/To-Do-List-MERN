import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'


const Login = () => {

  const[email , setemail]=useState()
  const[pass , setpass]=useState()
  const navigate = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault();

    axios.post('http://localhost:1000/login',{ email,pass})
     .then((result)=>{
       console.log(result)
       if(result.data==="success"){
        navigate('/Todolist')
       }
      })
      .catch((err)=>console.log(err))
  }

  return (
   <>
   <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'placeholder='Enter email' autoCapitalize='off'
            name='email'
            className='form-control rounded-0'
            onChange={(e)=>{setemail(e.target.value)}}
          />
       </div>
       <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input
            type='password'placeholder='Enter password' autoCapitalize='off'
            name='password'
            className='form-control rounded-0'
            onChange={(e)=>{setpass(e.target.value)}}
          />
       </div>
       <button type='submit' className='btn btn-success w-100 rounded-0'>
         Login 
        </button>
      </form>
      <p>Register</p>
        <Link to='/' className='btn btn-default border bg-light w-100 rounded-0 text-decoration-none'>
        Signup</Link>
    </div>
   </div>
   </>
  )
}

export default Login