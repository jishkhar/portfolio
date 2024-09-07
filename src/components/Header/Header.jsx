import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons'; // Import faSun icon

function Header() {
  const [activeLink, setActiveLink] = useState('');
  const [icon, setIcon] = useState(faBars);
  const [navOpen, setNavOpen] = useState(false);
  const [themeIcon, setThemeIcon] = useState(faMoon); // Add state for theme icon

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const toggleNav = () => {
    setIcon((prevIcon) => (prevIcon === faBars ? faX : faBars));
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };

  const toggleThemeIcon = () => {
    setThemeIcon((prevIcon) => (prevIcon === faMoon ? faSun : faMoon)); // Toggle between faMoon and faSun
  };

  return (
    <>
      <header className="header mx-auto">
        <nav className="flex justify-between items-center w-[80%] my-[2.5vh] fixed lg:left-48 md:left-24 left-10  ">
          <div>
            <Link to="#home" className="text-3xl font-bold" onClick={() => handleClick('')}>
              JK
            </Link>
          </div>

          <div
            className={`md:static fixed left-0 text-xl bg-gray-200 md:rounded-full py-[2vh] px-[1vw] md:min-h-fit min-h-[26vh] ${
              navOpen ? 'top-[10%]' : 'top-[-100%]'
            } md:w-auto w-full transition-all duration-500 ease-in-out`}
          >
            <ul className="flex md:flex-row flex-col items-center md:gap-[0.5vw] gap-6">
              <li>
                <Link
                  className={`text-black py-[1vh] px-7 rounded-full ${
                    activeLink === 'about' ? 'bg-cyan-200' : 'hover:bg-cyan-200'
                  }`}
                  to="#about"
                  smooth
                  onClick={() => {
                    handleClick('about');
                    toggleNav();
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`text-black py-[1vh] px-7 rounded-full  ${
                    activeLink === 'skills' ? 'bg-cyan-200' : 'hover:bg-cyan-200'
                  }`}
                  to="#skills"
                  smooth
                  onClick={() => {
                    handleClick('skills');
                    toggleNav();
                  }}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className={`text-black py-[1vh] px-7 rounded-full  ${
                    activeLink === 'projects' ? 'bg-cyan-200' : 'hover:bg-cyan-200'
                  }`}
                  to="#projects"
                  smooth
                  onClick={() => {
                    handleClick('projects');
                    toggleNav();
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={`text-black py-[1vh] px-7 rounded-full  ${
                    activeLink === 'contact' ? 'bg-cyan-200' : 'hover:bg-cyan-200'
                  }`}
                  to="#contact"
                  smooth
                  onClick={() => {
                    handleClick('contact');
                    toggleNav();
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex">
            <div className="text-2xl" onClick={toggleThemeIcon}>
              <FontAwesomeIcon className="h-8 md:py-3 px-4 rounded-full cursor-pointer md:hover:bg-slate-100" icon={themeIcon} />
            </div>

            <div onClick={toggleNav}>
              <FontAwesomeIcon
                icon={icon}
                style={{ cursor: 'pointer' }}
                className="md:hidden h-6 flex items-center justify-center pt-1"
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
