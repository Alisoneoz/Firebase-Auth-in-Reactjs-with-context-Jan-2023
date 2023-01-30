import { useState } from "react";
import { NavLink } from "react-router-dom";
//Custom Hook importation from context file
import { useAuth } from "../context/authContext"

const Register = () => {
  
  const [user, setUser] = useState({
    email:"",
    password:""
  });
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Custom hook instantiation
  const { signUp } = useAuth();


  const handleChange = (e) => {
    setUser((prevProps)=> ({
      ...prevProps,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegistration = async(e) => {
    e.preventDefault();
    setError("");
    if (user.password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    try{
      await signUp(user.email, user.password)
    } catch(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error ocurred: ${errorCode}, ${errorMessage}`)
      setError(errorMessage)
    }
  }
  return (
    <div>
      {error && <p>{error}</p>}
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