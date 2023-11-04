import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss'
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Pricing from "./pages/pricing/Pricing";
import Concepts from "./pages/Concepts/Concepts";
import AboutUs from "./pages/about-us/AboutUs";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter className="App">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route  path="/" element={ <Home /> }/>
            <Route  path="/pricing" element={ <Pricing /> }/>
            <Route  path="/concepts" element={ <Concepts /> }/>
            <Route  path="/about-us" element={ <AboutUs /> }/>
            <Route  path="/contact" element={ <Contact /> }/>
          </Routes>
        </div>
        <Footer className="footer"/>
      </BrowserRouter>
    </>
  )
}

export default App
