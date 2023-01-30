import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {

  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    setUser((prevProps)=> ({
      ...prevProps,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegistration = (e) => {
    e.preventDefault()
    if (user.password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    
  }
  return (
    <div>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Email</label>
          <input 
            name="email"
            value={user.email}
            type="email"
            placeholder="enter your email"
            onChange={handleChange}

          />
        </div>

        <div>
          <label>Password</label>
          <input 
            name="password"
            type="password"
            value={user.password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <label>Confirm Password</label>
          <input 
            name="password"
            type="password"
            placeholder="Please confirm your password"
            onChange={(e)=> setConfirmPassword(e.target.value)}
          />
        </div>

        <div>
          <button>Register</button>
        </div>
      </form>

      <NavLink to="/login">Already have an account? Login!</NavLink>
    </div>
  )
}

export default Register