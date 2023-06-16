import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>

    // <BrowserRouter>

    //   <Routes>
    //     <Route path="About" element={<About></About>}></Route>
    //     <Route path="Projects" element={<Projects></Projects>}></Route>
    //     <Route path="Home" element={<Home></Home>}></Route>
    //     <Route path="Contact" element={<Contact></Contact>}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
