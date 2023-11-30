import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import { Authprovider } from "./context/Authcontext.jsx";
import Profile from "./pages/Profile.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import NewPost from "./pages/NewPost.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Authprovider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<h1>post</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </Authprovider>
  );
}

export default App;
