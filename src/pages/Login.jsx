import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email:"",
    password:""
  });
  const [ error, setError] = useState("");

  const handleChange = (e) => {
    setUser((prevProps) =>({
      ...prevProps,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = (e)=>{
    e.preventDefault();
    setError("")
  }


  return (
    <div>
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