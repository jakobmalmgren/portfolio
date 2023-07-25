import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Divider from "./components/Divider";
import Carousel from "./components/Carousel";

function App() {
  const sectionEl = document.querySelectorAll(".section");
  const navlinksEl = document.querySelectorAll(".navigation-list-mob");
  let currentSection = "home";

  window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
      sectionEl.forEach((section) => {
        if (window.scrollY >= section.offsetTop) {
          currentSection = section.id;
        }
      });
      console.log(currentSection);
    });

    // navlinksEl.forEach((link) => {
    //   if (link.href.includes(currentSection)) {
    //     document.querySelector(".active").classList.remove("active");
    //     link.classList.add("active");
    //   }
    // });
  });

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
