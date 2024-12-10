'use client'

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { routes } from "@/routes";
import { usePathname } from "next/navigation";


const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {name: "Home", href: routes.home},
    {name: "Menu", href: routes.menu},
    {name: "Gallery", href: routes.gallery},
    {name: "Contact", href: routes.contact},
  ];

  return(
    <nav className="flex items-center justify-between px-4 py-3 bg-primary text-neutral min-h-32">
      {/* Logo Goes Here */}
      <div>
        <Link href={routes.home}>
          A Little Bit Chowder Now
        </Link>
      </div>

      {/* Language switcher placeholder */}
      <div className="min-w-32 text-right">
        <span className="font-semibold">
          EN | JP
        </span>
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10 pr-2">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className={`hover:text-secondary hover:underline ${
            pathname === link.href ? "font-bold underline text-secondary" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="relative md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Bars3Icon className="w-6 h-6" aria-expanded={isMenuOpen}/>
        {isMenuOpen && (
          <div className="absolute top-full right-0 min-w-full bg-primary text-neutral flex flex-col space-y-4 mt-4 px4 py-4 shadow-md">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-secondary hover:underline mr-4 ml-4"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
