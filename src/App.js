import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import About from "./component/About";
import AboutPage from "./component/AboutPage";
import { ContactPage } from "./component/ContactPage";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import RequestProjectForm from "./component/RequestProjectForm";
import ServicesPage from "./component/ServicesPage";

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="all-service" element={<ServicesPage/>} />
        <Route path="project-request-form" element={<RequestProjectForm/>} />
     </Routes>
    </>
  );
}

export default App;
