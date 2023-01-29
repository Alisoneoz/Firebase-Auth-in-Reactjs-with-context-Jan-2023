import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="register">Register</NavLink>
      <NavLink to="protectedroute">Secret</NavLink>
    </div>
  )
}

export default NavBar