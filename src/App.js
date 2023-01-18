import './App.css';
import Navigation from "./nav/Navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./vitrine/Home";
import Valeurs from "./vitrine/Valeurs";
import Contact from "./vitrine/Contact";
import Blog from "./vitrine/Blog";
import Footer from "./footer/Footer";


function App() {

  return (
    <div>
        <BrowserRouter>
            <Navigation/>
            <Footer/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/valeurs" element={<Valeurs/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
