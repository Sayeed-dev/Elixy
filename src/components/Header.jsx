"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { IoHome } from "react-icons/io5";
import { LuLogs } from "react-icons/lu";
import { ImStatsDots } from "react-icons/im";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/", icon: <IoHome /> },
    { name: "Timeline", href: "/timeline", icon: <LuLogs /> },
    { name: "Stats", href: "/stats", icon: <ImStatsDots /> },
  ];

  const RenderedNavLinks = () => {
    const pathname = usePathname();
    return navLinks.map((link) => {
      const isActive = pathname === link.href;
      return (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "border border-blue-400/30 bg-blue-500/20 text-blue-200"
                : "text-blue-100/70 hover:bg-blue-400/10 hover:text-white"
            }`}
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        </li>
      );
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-blue-400/15 bg-[#061224]/80 backdrop-blur-xl">
      <div className="navbar container mx-auto max-w-7xl justify-between px-6 sm:px-10 lg:px-16 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-blue-100 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-compact dropdown-content glass z-50 mt-3 w-52 rounded-xl p-3"
            >
              {RenderedNavLinks()}
            </ul>
          </div>
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white transition hover:text-blue-300"
          >
            ELIXY
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{RenderedNavLinks()}</ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
