import { Link } from "react-scroll";

const Header = () => {
  return (
    <header id="header">
      <nav className="nav-bar">
        <div className="logo">
          <Link to="header" spy={true} smooth={true} duration={500}>
            <img src="/assets/icon-pizza-slice.png" alt="" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="header" spy={true} smooth={true} duration={500}>
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
      </nav>
    </header>
  );
};

export default Header;
