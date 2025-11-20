


import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contactform from "./components/Contactform";
import { Header } from "./components/Header";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";
import { Courses } from "./components/Courses";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="bg-base-100 text-base-content text-lg">
    <Navbar/>
    

    <Header/>
     
    <Courses/>
     
      
    <Card/>
        <Testimonial/>
     
      <Faq/>
   
     <Contactform/>
      

      <Footer/>
     
    </div>
  );
}
