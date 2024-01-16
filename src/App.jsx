import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookingForm />} />
      </Routes>
    </>
  );
}

export default App;
