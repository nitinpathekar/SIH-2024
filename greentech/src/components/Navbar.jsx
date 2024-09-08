// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import the CSS file for the Navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/"><img src="/assets/greentech.png" alt="GreenTech" /></a>
      </div>
      <div className="search-container">
        <input type="text" class="search-bar" placeholder="Search For Contract" />
        <svg className="search-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.77 18.67L16.01 14.91C17.33 13.33 18.13 11.3 18.13 9.08C18.13 4.06 14.07 0 9.06 0C4.06 0 0 4.06 0 9.08C0 14.1 4.06 18.16 9.06 18.16C11.29 18.16 13.33 17.35 14.91 16.01L18.67 19.77C18.97 20.07 19.47 20.07 19.77 19.77C20.08 19.47 20.08 18.97 19.77 18.67ZM9.06 16.6C4.92 16.6 1.55 13.23 1.55 9.08C1.55 4.93 4.92 1.56 9.06 1.56C13.2 1.56 16.57 4.93 16.57 9.08C16.57 13.23 13.2 16.6 9.06 16.6Z" fill="#8B8BA3"></path>
        </svg>
      </div>
      <div className="nav-links">
        <a href="/download-app">
          <svg viewBox="0 0 16 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.16 1.87h7.68c.822 0 1.488.666 1.488 1.488v.103H2.672V3.36c0-.822.666-1.488 1.488-1.488ZM2.672 5.335v11.469h10.656V5.335H2.672Zm0 15.305v-1.964h10.656v1.964c0 .822-.666 1.488-1.488 1.488H4.16a1.488 1.488 0 0 1-1.488-1.488ZM.8 3.36A3.36 3.36 0 0 1 4.16 0h7.68a3.36 3.36 0 0 1 3.36 3.36v17.28A3.36 3.36 0 0 1 11.84 24H4.16A3.36 3.36 0 0 1 .8 20.64V3.36Zm6 16.447a.6.6 0 0 0 0 1.2h2.4a.6.6 0 1 0 0-1.2H6.8Z" fill="#333"></path>
          </svg>
          Download App
        </a>
        <div className="divider"></div>
        <a href="/become-supplier">Become a Supplier</a>
        <div className="divider"></div>
        <a href="/newsroom">Newsroom</a>
        <div className="divider"></div>
        <a href="/profile">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.316 13.016c1.512-1.058 2.516-2.797 2.516-4.784A5.835 5.835 0 0 0 12 2.4a5.835 5.835 0 0 0-5.832 5.832 5.79 5.79 0 0 0 2.517 4.784C4.343 14.291 1.2 17.996 1.2 22.37v.022c0 .896.843 1.609 1.825 1.609h17.95c.983 0 1.825-.713 1.825-1.61v-.02c0-4.375-3.143-8.08-7.484-9.354ZM7.853 8.232a4.148 4.148 0 0 1 8.294 0 4.148 4.148 0 0 1-8.294 0Zm13.122 14.083H3.025a.245.245 0 0 1-.14-.032c.054-4.45 4.126-8.057 9.115-8.057 4.99 0 9.05 3.596 9.115 8.057a.245.245 0 0 1-.14.032Z" fill="#333"></path>
          </svg>
          Profile
        </a>
        <div className="divider"></div>
        <a href="/cart">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m4.987 5.469 1.848 7.2a1 1 0 0 0 .968.752h8.675a1 1 0 0 0 .962-.726l1.697-5.952a1 1 0 0 0-.962-1.274H4.987Zm0 0-.943-3.248a1 1 0 0 0-.96-.721H1" stroke="#666" strokeWidth="1.5" strokeLinecap="round"></path>
            <ellipse cx="9.421" cy="16.744" rx="1.243" ry="1.256" stroke="#666" strokeWidth="1.5"></ellipse>
            <ellipse cx="15.221" cy="16.744" rx="1.243" ry="1.256" stroke="#666" strokeWidth="1.5"></ellipse>
          </svg>
          Cart
        </a>
      </div>
    </div>
  );
};

export default Navbar;
