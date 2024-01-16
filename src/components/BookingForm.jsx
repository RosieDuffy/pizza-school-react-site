import { React, useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="booking-container">
        <Link to="/">
          <button className="exit-button">&times;</button>
        </Link>
        <div className="booking-form">
          <img
            src="src/assets/Main logo-cropped.svg"
            alt="Fairtown Pizza School logo"
          />
          <h2>Booking Request</h2>
          <form className="form-inputs" onSubmit={handleSubmit}>
            <label htmlFor="course">Pizza Course / Pizza Party</label>
            <select id="course" name="course" required>
              <option hidden>Select Pizza Course/ Pizza Party</option>
              <option disabled value="">
                --Please select--
              </option>
              <option value="bambino-basics">Bambino Basics</option>
              <option value="pizza-pals">Pizza Pals</option>
              <option value="pizza-pros">Pizza Pros</option>
              <option value="pizza-party">Pizza Party</option>
            </select>

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
              minDate={new Date()}
              onChange={(date) => setSelectedDate(date)}
              required
            />

            <label htmlFor="time">Time</label>
            <select id="time" name="time" required>
              <option hidden>Select a preferred time</option>
              <option value="morning">Morning: 9am - 12pm</option>
              <option value="afternoon">Afternoon: 1pm - 4pm</option>
              <option value="evening">Evening: 6pm - 9pm</option>
            </select>

            <label htmlFor="number">Number of guests</label>
            <select id="number" name="number" required>
              <option hidden>Select Number of Guests</option>
              <option disabled value="">
                --Please select--
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            {submitted ? (
              <h4 className="submitted">Request submitted!</h4>
            ) : (
              <button className="submit-button" type="submit">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
