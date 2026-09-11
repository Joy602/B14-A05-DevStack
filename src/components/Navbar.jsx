import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-indigo-600">DevStack Builder</div>
      <div className="flex gap-6 items-center">
        <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">
          Stack
        </a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">
          Saved
        </a>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
