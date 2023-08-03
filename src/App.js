import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Divider from "./components/Divider";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Home></Home>
      <About></About>
      <Divider></Divider>
      <Projects></Projects>
      <Divider></Divider>
      <Carousel></Carousel>
      <Divider></Divider>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
