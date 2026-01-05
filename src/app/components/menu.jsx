"use client";

import Link from 'next/link'
import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import './menu.style.css';

export function Menu() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <div className={`menu ${scrolled ? "scrolled" : ""}`}>
        <ul className='ul-menu'>
          <li className={`menu-button home-section ${pathname === "/" ? "active" : ""}`}>
            <Link href="/">Home</Link>
          </li>

          <li className={`menu-button about-section ${pathname === "/about" ? "active" : ""}`}>
            <Link href="/about">About</Link>
          </li>

          <li className={`menu-button works-section ${pathname === "/works" ? "active" : ""}`}>
            <Link href="/works">Works</Link>
          </li>

          <li className={`menu-button skills-section ${pathname === "/skills" ? "active" : ""}`}>
            <Link href="/skills">Skills</Link>
          </li>

          <li className={`menu-button contact-section ${pathname === "/contact" ? "active" : ""}`}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
