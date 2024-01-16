import { useState } from "react";
import DatePicker from "react-datepicker";

import Header from "./Header";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <Header />
      <div className="booking-form">
        <h2>Restaurant Booking Request</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="date">Date:</label>
          <DatePicker
            showIcon
            toggleCalendarOnIconClick
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
          <input type="date" id="date" name="date" required />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required />

          <label htmlFor="guests">Number of Guests:</label>
          <input type="number" id="guests" name="guests" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
