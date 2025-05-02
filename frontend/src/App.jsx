import {RouterProvider , createBrowserRouter} from  "react-router-dom"
import Login from './pages/Login'
import Todolist from "./pages/Todolist"
import Create from "./pages/Create"
import Update from "./pages/Update"
import Signup from "./pages/Signup"
 


const router=createBrowserRouter([
  {path:'/', element: <Signup/> },
  {path:'/login', element:<Login/>},
  {path:'/todolist',element:<Todolist/>},
  {path:'/create',element:<Create/>},
  {path:'/update/:id',element:<Update/>}
])


function App() {
  return <RouterProvider router={router} />
}


export default App
