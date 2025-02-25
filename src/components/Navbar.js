import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const apiurl = process.env.REACT_APP_API_URL

  function isLogout() {
    console.log(`${apiurl}/logout`)
    fetch(`${apiurl}/logout`, {
      method: "GET",
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message)
        if (data.success === true) {
          navigate('/');
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

        <button className="btn btn-dark" onClick={isLogout}> Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;