import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages 
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App h-screen bg-purple-400">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register />}/>
          <Route path="protectedroute" element={<ProtectedRoute />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
