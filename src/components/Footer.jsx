import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="social-icons">
          <Link
            to="https://facebook.com/"
            aria-label="Facebook"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </Link>
          <Link
            to="https://instagram.com/"
            aria-label="Instagram"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
          <Link to="https://twitter.com/" aria-label="Twitter" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </Link>
        </div>
        <div className="footer-text">
          <p>@ copyright all rights reserved Fairtown Pizza School</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
