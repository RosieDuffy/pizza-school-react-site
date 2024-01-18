import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import BookingForm from "./components/BookingForm";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
