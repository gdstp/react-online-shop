import React from "react";
import { Link } from "react-router-dom";

const MenuDropdown: React.FC = () => {
  return (
    <div className="w-11/12 px-6 flex-col lg:hidden flex absolute top-36 bg-white z-40">
      <Link
        to="/categories/women's clothing"
        className="w-full px-4 py-2 border-b border-primary"
      >
        Women
      </Link>

      <Link
        to="/categories/men's clothing"
        className="w-full px-4 py-2 border-b border-primary"
      >
        Men
      </Link>

      <Link
        to="/categories/jewelery"
        className="w-full px-4 py-2 border-b border-primary"
      >
        Jewelry
      </Link>

      <Link
        to="/categories/electronics"
        className="w-full px-4 py-2 border-b border-primary"
      >
        Electronics
      </Link>

      <Link to="/about" className="w-full px-4 py-2 border-b border-primary">
        About
      </Link>

      <Link to="/contact" className="w-full px-4 py-2 border-b border-primary">
        Contact
      </Link>
    </div>
  );
};

export default MenuDropdown;
