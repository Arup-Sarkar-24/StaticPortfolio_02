import About from "./components/About";
import Home from "./components/Home";
import LeftSider from "./components/LeftSider";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import UsedTech from "./components/UsedTech";
import Courses from "./components/Courses";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <LeftSider/>
      <About/>
      <UsedTech/>
      <Experiences/>
      <Projects/>
      <Courses/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
