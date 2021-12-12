import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  withRouter,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./components/mainComponents/home.jsx";
import { createContext, useContext } from "react";
import { useState } from "react";
import ImageSection from './components/sub-components/imageSection';
import Themecontext from "./components/context.js";
import Button from "react-bootstrap/Button";
import Navbar from "./components/mainComponents/navbar";
import About from "./components/mainComponents/about";
import Contact from "./components/mainComponents/contact";
import Main from './components/sub-components/mainTab'
import SectionOne from './components/sub-components/sectionOne'
import Product from "./components/mainComponents/products";
import Section2 from  './components/sub-components/section2'
function App() {
  return <div className="App">

<Navbar/>
<Main/>
<SectionOne/>
<ImageSection/>
<Section2/>

  </div>;
}

export default App;











{
  /* <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Contact />} />
        <Route path="/examp" element={<Examp />} />
        <Route path="/products/:productsid" element={<Product />} />



</Routes> */
}
