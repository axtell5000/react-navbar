import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  // state
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>

        { showLinks && (
          <div className="links-container show-container">
            <ul className="links">
              {links.map(link => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url} title={text}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
  

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url} target="_blank">{icon}</a>
              </li>
            );
          })}
        </ul>        
      </div>
    </nav>
  )
}

export default Navbar
