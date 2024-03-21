import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <Link to="hero" spy={true} smooth={true} duration={500}>
        <img
          src="./assets/icon-pizza-slice.webp"
          alt=""
          className="header-logo"
        />
      </Link>

      <ul className="nav-menu">
        <li>
          <Link to="hero" spy={true} smooth={true} duration={500}>
            Home{" "}
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="courses" spy={true} smooth={true} duration={500}>
            Courses
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
