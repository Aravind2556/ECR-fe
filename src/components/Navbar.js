import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
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

  function isLogout() {
    fetch(`${apiurl}/logout`, {
      method: "GET",
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message)
        if (data.success === true) {
          window.location.href="/"
        } else {
          console.log(data.message);
        }
      })
      .catch(err => {
        alert("Trouble in connecting to the server, please try agaon later.")
        console.log("Logout fetching error", err);
      });
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
      <div className="container">
        {/* Logo / Brand */}
        <a className="navbar-brand fw-bold text-light" href="/">
          ECG
        </a>

        {currentUser && 
          (Object.entries(currentUser).length>0 &&
          <button className="btn btn-dark" onClick={isLogout}> Logout</button>)
        }
        {currentUser&& 
          (Object.entries(currentUser).length===0 &&
          <button className="btn btn-dark" onClick={()=>window.location.href="/"}> Login</button>)
        }

      </div>
    </nav>
  );
};

export default Navbar;