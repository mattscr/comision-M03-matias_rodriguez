import Navbar from "./components/Navbar.jsx";
import Postcard from "./components/Postcard.jsx";
import Register from "./components/Register.jsx";
function App() {
  return (
    <main className="px-4 pt-6">
      <Navbar />
      <Register />
      <Postcard />
    </main>
  );
}

export default App;
