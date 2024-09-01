import React from 'react'
import './Header.css'
import { HashLink as Link } from 'react-router-hash-link'

function Header() {
  return (
    <>
      <header className="header">
            <Link to="#home" className='logo'>JK</Link>

            <nav className="navbar">
                <ul>

                  <li>
                    <Link to="#about" smooth>About</Link>
                  </li>

                  <li>
                    <Link to="#skills" smooth>Skills</Link>
                  </li>

                  <li>
                    <Link to="#projects" smooth>Projects</Link>
                  </li>

                  <li>
                    <Link to="#contact" smooth>Contact</Link>
                  </li>

                </ul>
            </nav>

            <div className='text-2xl font-bold'>D/N</div>
        </header>
    </>
  )
}

export default Header
