"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 lg:px-10 bg-white backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[#2c2e3a] focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden lg:flex flex-grow justify-end space-x-8">
        <a href="/" className="p-2 text-md font-bold leading-6 text-[#2c2e3a]">
          Hospitalidad María
        </a>
        <a href="/" className="p-2 text-md font-bold leading-6 text-[#2c2e3a]">
          Ventas María
        </a>
        <a href="https://opensea.io/collection/maria-netfy-ai-collection" className="p-2 text-md font-bold leading-6 text-[#2c2e3a]">
          Nuestra colección NFT
        </a>
      </div>

      {/* Mobile menu (hidden on desktop) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white bg-opacity-90 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block p-2 text-md font-bold leading-6 text-[#2c2e3a]">
              Hospitalidad María
            </a>
            <a href="/" className="block p-2 text-md font-bold leading-6 text-[#2c2e3a]">
              Ventas María
            </a>
            <a href="https://opensea.io/collection/maria-netfy-ai-collection" className="block p-2 text-md font-bold leading-6 text-[#2c2e3a]">
              Nuestra colección NFT
            </a>
          </div>
        </div>
      )}

      <aside className="flex items-center gap-4">
      </aside>
    </header>
  );
};

export default Navbar;