import { Link } from "react-scroll";
import { useState } from "react";

export default function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleHamburger(event) {
    event.preventDefault();
    setIsDisplayed(!isDisplayed);
  }

  return (
    <>
      <header>
        <div className="name__logo">
          <Link to="home" spy={true} smooth={true} offset={-200} duration={500}>
            &lt;kevin.dev&gt;
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                Project
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div
          onClick={(event) => handleHamburger(event)}
          className="nav-toggle"
          aria-label="toggle navigation"
        >
          {!isDisplayed ? (
            <i className="fa fa-bars bar"></i>
          ) : (
            <i className="fa fa-times cross"></i>
          )}
        </div>
      </header>
      <div
        className={
          "hamburger__options " + (isDisplayed ? "display__hamburger" : null)
        }
      >
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={handleHamburger}
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={handleHamburger}
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={handleHamburger}
            >
              Project
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
              onClick={handleHamburger}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
