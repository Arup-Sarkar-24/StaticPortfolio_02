import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { useState } from "react";
import Loader from "./components/Loader";
{/* import TypingBox from "./components/TypingBox"; */}
{/* import TextBox from "./components/TextBox"; */}


function App() {
  const [showLoading, /*setShowLoading*/] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        {showLoading ? <Loader/>:null}
        <Routes>
          <Route path="/" element={
            <>
              <NavBar/>
              <Home/>
              {/*<TextBox/>
              <TypingBox/>
          */}
              <LeftSider/>
              <About/>
              <UsedTech/>
              <Experiences/>
              <Projects/>
              <Courses/>
              <Contact/>
              <Footer/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
