import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'

const Todolist = () => {
  
  const[users, setUsers] = useState([])

  // const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:1000/todolist')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])

  const handleDelete =(id)=>{
    axios.delete('http://localhost:1000/deleteUser/'+id)
    .then((res)=>{
      console.log(res)
      window.location.reload()
      // navigate('/todolist')
    })
    .catch((err)=>console.log(err))
  }

  return (
     <>
     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to='/create' className='btn btn-success mb-3'>Add +</Link>

        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((data)=>{
              return <tr key={data._id}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.age}</td>
                  <td>
                    <Link to={`/update/${data._id}`} className='btn btn-success'>Update</Link>
                    <button className='btn btn-danger'
                    onClick={(e)=>{handleDelete(data._id)}}>Delete</button>
                  </td>
                </tr>
              })                  //
            }               
          </tbody>
        </table>
      </div>
     </div>
     </>
  )
}

export default Todolist