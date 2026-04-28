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
            className={isActive ? "bg-gray-800 text-white" : ""}
          >
            {link.icon}
            <span className="ml-1">{link.name}</span>
          </Link>
        </li>
      );
    });
  };

  return (
    <div className=" bg-gray-200 sticky top-0 z-10 shadow-xl">
      <div className="navbar container mx-auto justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-compact dropdown-content bg-base-100 z-1 mt-3 w-52 p-2 shadow"
            >
              {RenderedNavLinks()}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">ELIXY</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{RenderedNavLinks()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
