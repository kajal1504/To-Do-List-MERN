import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const {id} = useParams('')
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[age,setAge]=useState('')

    const navigate = useNavigate()


    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put('http://localhost:1000/update/'+id,{name,email,age})
        .then(result => {
            console.log(result)
            navigate('/todolist')
        })
        .catch(err => { console.log(err)
            alert("update unsuccessfully")  
        })  
    }

    useEffect(()=>{
        axios.get('http://localhost:1000/getUpdate/'+id)
        .then((result)=>{console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
       },[])

  return (
    <>
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label >Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label>Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control'value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label >Age</label>
                    <input type="number" placeholder='Enter Age' className='form-control' value={age}
                    onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Update