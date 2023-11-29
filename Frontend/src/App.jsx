import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import { Authprovider } from "./context/Authcontext.jsx";

function App() {
  return (
    <Authprovider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<h1>post</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Authprovider>
  );
}

export default App;
