import React from 'react';
import { Link } from 'react-scroll'; // Import the Link component from react-scroll
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <div>
      <header className="w-[1198px] flex flex-row items-start justify-center max-w-full text-left text-8xs-2 text-black font-plus-jakarta-sans">
        <div className="w-[982px] flex flex-row items-start justify-between gap-[20px] max-w-full">
          <div className="w-[427px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <b className="relative font-extrabold inline-block min-w-[9px] z-[8]">
                  TM
                </b>
              </div>
              <nav className="nav">
                <Link
                  className="nav-link nav-link-home"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={() => scrollToSection('home')}
                >
                  home
                </Link>
                <Link 
                className='nav-link nav-link-about'
                activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={() => scrollToSection('home')}
                >About Us </Link>
              
                <Link
                  className="nav-link nav-link-pricing"
                  activeClass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={() => scrollToSection('pricing')}
                >
                  pricing
                </Link>
                <Link
                  className="nav-link nav-link-features"
                  activeClass="active"
                  to="features"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={() => scrollToSection('features')}
                >
                  features
                </Link>
              </nav>
            </div>
          </div>
          <button className="button">
            <a className='btn-link'>Download</a>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
