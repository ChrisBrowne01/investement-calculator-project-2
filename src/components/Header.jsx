import React from 'react'
import logo from '../assets/logo.jpg'


// Accept title and subtitle as props
const Header = ({ title, subtitle }) => {
  return (
    <header className="text-center mx-auto p-4 ">
      <img src={logo} alt="Investment Calculator Logo" className="block mx-auto w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain bg-transparent" />
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mt-4 text-white">{title}</h1> {/* Use title prop */}
      {subtitle && <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-2">{subtitle}</p>} {/* Use subtitle prop, only show if present */}
    </header>
  );
};

export default Header;