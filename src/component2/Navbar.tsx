import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-500">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-lg font-semibold">
            <Link href="/">Interactive Menu</Link>
          </h1>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
