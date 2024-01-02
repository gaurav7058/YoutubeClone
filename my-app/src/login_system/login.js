import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [incorrectPasswordCount, setIncorrectPasswordCount] = useState(1);
  function login(e) {
    e.preventDefault();
    setIncorrectPasswordCount(incorrectPasswordCount+1);
    if (email === null || password == null) {
      alert("filled is require");
    }
    if (incorrectPasswordCount >= 5) {
      alert(
        "your enter five times wrong password so your account is block for one hour"
      );
    }
    axios
      .post("http://localhost:2000/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        if (result.data === "logged-in") {
          alert("Thank You to Login")
          navigate("/home");
        }
        else if (incorrectPasswordCount === 3)  {
          axios.post("http://localhost:2000/SendIncorrectPasswordMail", {
              email: email,
            })
            .then((result) => {
              alert("you recive mail",result);
            });        
      }
        else if(result.data === "incorrect password"){
          alert("incorrect-password")
        } 
        else{
          alert("invalid-user")
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div>
        <div className="center">
          <h1>{incorrectPasswordCount}</h1>
          <h1>Login</h1>
          <form>
            <div className="txt_field">
              <input
                type="email"
                autoComplete="new-password"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>email</label>
            </div>
            <div className="txt_field">
              <input
                type="password"
                autoComplete="new-password"
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <input type="Submit" value="Login" onClick={(e) => login(e)} />
            <div className="signup_link"><Link to="/registration_form">Create New Account</Link> </div>
          </form>
        </div>
      </div>
    </>
  );
}
