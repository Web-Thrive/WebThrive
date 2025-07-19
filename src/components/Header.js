import React from 'react';

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
      <div className="text-2xl font-bold text-indigo-600">WebThrive</div>
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><a href="#about" className="hover:text-indigo-600 transition">About</a></li>
        <li><a href="#services" className="hover:text-indigo-600 transition">Services</a></li>
        <li><a href="#projects" className="hover:text-indigo-600 transition">Projects</a></li>
        <li><a href="#team" className="hover:text-indigo-600 transition">Team</a></li>
        <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
      </ul>
      <button className="md:hidden block text-indigo-600 focus:outline-none text-xl">
        ☰
      </button>
    </nav>
  </header>
);

export default Header;
