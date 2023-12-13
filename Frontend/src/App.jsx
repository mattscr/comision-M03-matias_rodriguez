import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import { Authprovider } from "./context/Authcontext.jsx";
import Profile from "./pages/Profile.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import PostForm from "./pages/PostForm.jsx";
import { PostProvider } from "./context/PostContext.jsx";

function App() {
  return (
    <Authprovider>
      <PostProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/newpost" element={<PostForm />} />
              <Route path="/updatepost/:id" element={<PostForm />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </PostProvider>
    </Authprovider>
  );
}

export default App;
