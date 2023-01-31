import { AuthProvider } from "./context/authContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

//import pages 
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import Register from "./pages/Register";

function App() {
    return (
    <div className="App h-screen bg-purple-400">
      <AuthProvider>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register />}/>
            <Route path="protectedroute" element={<ProtectedRoute />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
