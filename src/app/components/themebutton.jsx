'use client';

import './theme-button.style.css'
import { BsSun, BsMoon } from "react-icons/bs";
import { useState } from "react";

export default function ThemeButton() {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("light");
    setIsLight(document.documentElement.classList.contains("light"));
  };

  return (
    <div className='container-theme-button'>
      <button className="theme-btn" onClick={toggleTheme}>
        {isLight ? <BsMoon className='icon' /> : <BsSun className='icon' />}
      </button>
    </div>

  );
}
