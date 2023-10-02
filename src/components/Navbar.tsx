// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Cart from "./Cart";

type Props = {
  cart?: any;
  setShowCart?: any;
  showCart?: any;
  toggleMenu?: any;
  isOpen?: any;
};

const Navbar = ({ cart, setShowCart, showCart, toggleMenu, isOpen }: Props) => {
  return (
    <nav className=" sticky top-0 left-0 w-full bg-slate-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-2xl font-bold">Grocery App</p>
        </Link>

        <div className="hidden md:flex space-x-4 text-[18px]  ">
          <Link href="/">
            <path className="text-white">Home</path>
          </Link>

          <Link href="/">
            <p className="text-white">About</p>
          </Link>
          <Link href="/">
            <p className="text-white">Contact</p>
          </Link>
        </div>
        <div
          className=" relative hidden md:flex text-white cursor-pointer"
          onClick={() => setShowCart(!showCart)}
        >
          <p>Cart</p>
          <p>
            (<span className=" text-red-400">{cart.length}</span>)
          </p>
          {showCart && <Cart />}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 right-2 bg-white p-4 rounded shadow">
            <Link href="/">
              <p className="block text-gray-800 py-2">Home</p>
            </Link>
            <Link href="/">
              <p className="block text-gray-800 py-2">About</p>
            </Link>
            <Link href="/">
              <p className="block text-gray-800 py-2">Contact</p>
            </Link>
            <div
              className=" flex text-gray-800"
              onClick={() => setShowCart(!showCart)}
            >
              <p>Cart</p>
              <p>
                (<span className=" text-red-400">{cart.length}</span>)
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
