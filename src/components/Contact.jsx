const Contact = () => {
  return (
    <>
      <div className="contact-container" id="contact">
        <img
          src="./assets/location.webp"
          alt="fairtown pizza school location"
        />
        <div className="contact">
          <div className="contact-location">
            <h3>Location</h3>
            <p>
              Located in the heart of Fairtown, within easy walking distance of
              public transport. <br />
              We also have limited parking to the rear of the building.
            </p>
          </div>
          <div className="contact-info">
            <h4>Contact info:</h4>
            <ul>
              <li>21 Flat Road, Fairtown 123-PIZ</li>
              <li>Phone: 0123-4567</li>
              <li>Email: info@fairtownpizzaschool.com</li>
            </ul>
          </div>
          <div className="contact-opening-hours">
            <h4>Opening Hours:</h4>
            <p>Mon-Sun: 9am - 9pm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
