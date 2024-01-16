import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Teachers />
      <Courses />
      <Contact />
      <Footer />
    
    </>
  );
}

export default App;
