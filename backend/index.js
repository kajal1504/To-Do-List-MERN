const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const AdduserModel = require('./models/Addusers')
const StudentModel = require('./models/students')



const app = express()
app.use(express.json())
app.use(cors())

//Authentication
//Mongodb connected
mongoose.connect('mongodb://127.0.0.1:27017/curds') // 127.0.0.1:


app.post('/signup',(req,res)=>{
   
    StudentModel.create(req.body)
    .then(studs => res.json(studs))
    .catch(err => res.json(err))
})

app.post('/login',(req,res)=>{
    const{email,pass}=req.body
    StudentModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.pass==pass){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("record is not exists")
        }
    })
})

//Curd operation
//add new user data
app.post("/create",(req,res)=>{
    AdduserModel.create(req.body)
    .then((user)=>res.json(user))
    .catch((err)=> res.json(err))
})

//show list in the todolist page
app.get('/todolist',(req,res)=>{
    AdduserModel.find({})
    .then(users =>res.json(users))
    .catch(err => res.json(err))
})

//update the list

//GET user by ID
app.get('/getUpdate/:id', (req, res) => {
    AdduserModel.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: 'Failed to fetch user', details: err }));
  });
  
  // PUT update user by ID
  app.put('/update/:id', (req, res) => {
    const { name, email, age } = req.body;
  
    AdduserModel.findByIdAndUpdate(
      req.params.id,
      { name, email, age },
      { new: true }
    )
      .then(updatedUser => res.json(updatedUser))
      .catch(err => res.status(500).json({ error: 'Failed to update user', details: err }));
  });
 


//delete users
app.delete('/deleteUser/:id', (req,res)=>{
    const id = req.params.id;
    AdduserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})


app.listen(1000,()=>{
    console.log("server is running")
})