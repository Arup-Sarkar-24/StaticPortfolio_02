import About from "./components/About";
import Home from "./components/Home";
import LeftSider from "./components/LeftSider";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import UsedTech from "./components/UsedTech";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <LeftSider/>
      <About/>
      <UsedTech/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
