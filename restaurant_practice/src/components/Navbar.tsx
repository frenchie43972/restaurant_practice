'use client'

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { routes } from "@/routes";
import { usePathname } from "next/navigation";


const Navbar: React.FC = () => {
  const pathname = usePathname();

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

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
      {/* Language switcher placeholder */}
      <span className="font-semibold mr-12">
          EN | JP
        </span>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className={`hover:text-secondary hover:underline ${
            pathname === link.href ? "font-bold underline text-secondary" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <Bars3Icon className="w-6 h-6"/>
      </div>
    </nav>
  );
};

export default Navbar;
