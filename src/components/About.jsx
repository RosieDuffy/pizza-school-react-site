const About = () => {
  return (
    <>
      <div className="intro" >
        <img src="src/assets/award.png" alt="" />
      </div>
      <div className="about" id="about">
        <div className="about-text">
          <h4>Welcome to</h4>
          <h2>Fairtown Pizza School</h2>
        </div>
      </div>
      <div className="icons">
        <div className="icons-pizza">
          <i className="fa-solid fa-pizza-slice fa-6x"></i>
          <p>
            Learn to make pizza <br />
            from scratch
          </p>
        </div>
        <div className="icons-hat">
          <i className="fa-solid fa-graduation-cap fa-6x"></i>
          <p>
            Professional Chefs <br />
            teach you all they know
          </p>
        </div>
        <div className="icons-food">
          <i className="fa-solid fa-utensils fa-6x"></i>
          <p>
            Enjoy your delicious <br />
            creations
          </p>
        </div>
        <div className="icons-party">
          <i className="fa-solid fa-cake-candles fa-6x"></i>
          <p>
            Celebrate with a<br />
            pizza party!
          </p>
        </div>
      </div>
      <div className="more-info"></div>
      <div className="tagline">
        <h4>
          Immerse yourself in a culinary journey tailored for all skill levels.
          <br />
          Unleash your creativity, savor the art of pizza making, and join us
          for a slice of flavorful fun!
        </h4>
      </div>
    </>
  );
};

export default About;
