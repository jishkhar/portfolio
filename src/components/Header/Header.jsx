import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
      <header className="header">
            <a href="/" className="logo">JK</a>

            <nav className="navbar">
                <a href="/">About</a>
                <a href="/">Work</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
                <a href="/"></a>
            </nav>

            <div className='text-2xl font-bold'>D/N</div>
        </header>
    </>
  )
}

export default Header
