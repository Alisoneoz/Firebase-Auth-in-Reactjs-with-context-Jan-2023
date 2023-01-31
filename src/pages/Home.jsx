import { useAuth } from "../context/authContext";

const Home = () => {
  const { user } = useAuth()
  return (
    <div>Home
      <p>Hello {user.email}!</p>
    </div>
  )
}

export default Home