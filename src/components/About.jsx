import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faGraduationCap, faUtensils, faCakeCandles  } from "@fortawesome/free-solid-svg-icons";



const About = () => {
  return (
    <>
      <div className="intro">
        <img src="./assets/award.webp" alt="" />
      </div>
      <div className="about" id="about">
        <div className="about-text">
          <h4>Welcome to</h4>
          <h2>Fairtown Pizza School</h2>
        </div>
      </div>
      <div className="icons">
        <div className="icon">
        <FontAwesomeIcon icon={faPizzaSlice} size="6x"/>
          <p>
            Learn to make pizza <br />
            from scratch
          </p>
        </div>
        <div className="icon">
        <FontAwesomeIcon icon={faGraduationCap} size="6x" />
          <p>
            Professional Chefs <br />
            teach you all they know
          </p>
        </div>
        <div className="icon">
        <FontAwesomeIcon icon={faUtensils} size="6x"  />
          <p>
            Enjoy your delicious <br />
            creations
          </p>
        </div>
        <div className="icon">
        <FontAwesomeIcon icon={faCakeCandles} size="6x"/>
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
          <br />
          Unleash your creativity, savor the art of pizza making, and join us
          for a slice of flavorful fun!
        </h4>
      </div>
    </>
  );
};

export default About;
