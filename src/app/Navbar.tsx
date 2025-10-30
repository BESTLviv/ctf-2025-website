'use client';
import './Navbar.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    console.log(`Navigating to section: ${id}`);
    setIsMenuOpen(false); 
    if (id === 'top') {

      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.querySelectorAll('.nav-links a').forEach((link) => link.classList.remove('active'));
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelectorAll('.nav-links a').forEach((link) => link.classList.remove('active'));
        document.querySelector(`.nav-links a[href="#${id}"]`)?.classList.add('active');
      } else {
        console.log(`Element with id "${id}" not found!`);
      }
    }
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <nav id="navbar">
      <div className="container">
        <div className="logo" onClick={() => handleNavClick('top')}>
          <Image src="/images/logocopy.png" alt="CTF" width={150} height={50} className="logo-icon" />
        </div>
        <div
          className={`menu-burger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>Про подію</a></li>
            <li><a href="#format" onClick={(e) => { e.preventDefault(); handleNavClick('format'); }}>Формат</a></li>
            <li><a href="#steps" onClick={(e) => { e.preventDefault(); handleNavClick('steps'); }}>Етапи відбору</a></li>
            <li><a href="#coreteam" onClick={(e) => { e.preventDefault(); handleNavClick('coreteam'); }}>Організатори</a></li>
            <li><a href="#register" onClick={(e) => { e.preventDefault(); handleNavClick('register'); }} className="partner-button">Зареєструватися</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}