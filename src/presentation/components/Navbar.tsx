"use client"
import React, { useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-10 bg-transparent backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      {/* <aside className="flex items-center gap-[2px]">
        <Link className="flex font-bold flex-row " href="/">
          <Image
            src="/logodoko3.png"
            width={120}
            height={120}
            alt="doko logo"
            className=""
          />
        </Link>
      </aside> */}
      <div className="hidden lg:flex flex-grow justify-center space-x-8">
        <a href="/" className="p-2 text-md font-bold leading-6 text-white">
          MarIA Hospitality
        </a>
        <a href="/" className="p-2 text-md font-bold leading-6 text-white">
          MarIA Sales
        </a>
      </div>
      <aside className="flex items-center gap-4">
      </aside>
    </header>
  );
};

export default Navbar;