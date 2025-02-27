import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/createAccount/Login'
import Register from './components/createAccount/Register'
import { Dashboard } from './components/Admin/Dashboard'
import Loading from './components/Loading'

export const App = () => {

    const [currentUser, setCurrentUser] = useState(null)
    const apiurl = process.env.REACT_APP_API_URL
  
    useEffect(()=>{
      if(apiurl){
        fetch(`${apiurl}/checkauth`, {
          method: "GET",
          credentials: 'include'
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              setCurrentUser(data.user)
            } else {
              setCurrentUser({})
              console.log(data.message);
            }
          })
          .catch(err => {
            setCurrentUser(null)
            alert("Trouble in connecting to the server, please try again later.")
            console.log("Error in fetching current user:", err);
          });
      }
    },[apiurl])

    if(!currentUser){
      return <Loading/>
    }

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={Object.entries(currentUser).length>0?<Dashboard/>:<Login/>}></Route>
        <Route path='/create-account' element={<Register/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  )
}

