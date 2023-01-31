import { useState } from "react";
import { NavLink } from "react-router-dom";
//Custom Hook importation from context file
import { useAuth } from "../context/authContext"

const Login = () => {
  const [user, setUser] = useState({
    email:"",
    password:""
  });
  const [error, setError] = useState("");

    //Custom hook instantiation
    const { login } = useAuth();

  const handleChange = (e) => {
    setUser((prevProps) =>({
      ...prevProps,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = async(e)=>{
    e.preventDefault();
    setError("")
    try{
      await login(user.email, user.password)
    }catch(err){
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(`An error ocurred: ${errorCode}, ${errorMessage}`);
      setError(errorMessage);
    }
  }


  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input 
            name="email"
            type="email"
            onChange={handleChange}
            required
            value={user.email}
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}          
          />
        </div>

        <div>
          <button type="submit">Log In</button>          
        </div>
      </form>      
     {error && <p>{error}</p>}
      <NavLink to="/register">Don't have an account? Register</NavLink>

    </div>
  )
}

export default Login