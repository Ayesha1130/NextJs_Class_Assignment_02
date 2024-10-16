"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex  bg-[#CF102D] justify-between h-20 p-4 items-center ">
      <button title="button" onClick={toggleMenu}>
        {!isOpen ? (
          <IoMdMenu size={20} className="md:hidden lg:hidden block " />
        ) : (
          <RxCross2 size={20} className="md:hidden lg:hidden block " />
        )}
      </button>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic  ">
        WonderToys
      </h1>
      <nav className="hidden md:flex lg:flex flex-grow justify-center">
        <ul className="text-2xl flex flex-row justify-center gap-14 font-semibold italic  ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/collection">Our Collection</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
  
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <nav className="md:hidden lg:hidden absolute top-20 left-0 w-full">
          <ul className="flex flex-col font-semibold gap-4 p-4 mt-2 bg-pink-200 absolute  left-2  rounded-lg shadow-lg ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/collection" >Our Collection</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}

      <Link
        href={"/contact"}
        className="flex items-end bg-white p-1  rounded-md font-bold text-center  "
      >
        Find Us
      </Link>
    </header>
  );
};

export default Navbar;
