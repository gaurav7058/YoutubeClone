import React,{useMemo, useState} from 'react'
import axios from "axios";
import "./registration.css"
import { Link,useNavigate } from 'react-router-dom'
export default function Regitration_page() {
    const navigate=useNavigate();
    const [full_name, setFull_name] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    function register(e){
      e.preventDefault();
        axios.post("http://localhost:2000/registration_form",{
          full_name:full_name,
          email:email,
          password:password
        }
         )
        .then((result) => {        
                console.log("Sccess", result);
                alert("Registration succesfully");
                navigate("/")
        })
        .catch((error) => console.log("something wrong in registration",error));
      }
  return (
    <div className="container-1">
    <form onSubmit={(e)=>register(e)}>
      <div className="title">Registration form</div>
      <div className="user-details">
        <div className="input-box">
        <span className="details">Full Name</span>
          <input
            type="text"
            placeholder="Enter full Name"
            required
            autoComplete="new-password"
            name="full_name"
            value={full_name || ""}
            onChange={(e) => setFull_name(e.target.value)}
          />
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input
            type="email"
            placeholder="Enter your Email"
            required
            autoComplete="new-password"
            name="email"
            value={email || ""}
            onChange={(e)=>setEmail(e.target.value)} 
          />
        </div>
        <div className="input-box">
          <span className="details">Password</span>
          <input
            type="password"
            placeholder="Enter your password"
            required
            autoComplete="new-password"
            name="password"
            value={password || ""}
            onChange={(e)=>setPassword(e.target.value)} 
          />
        </div>
        <div className="button">
          <input type="submit" value="Register"/>
          <div className="signup_link"><Link to="/"><h3>Login</h3></Link> </div>
        </div>
      </div>
    </form>
  </div>

  )
}
