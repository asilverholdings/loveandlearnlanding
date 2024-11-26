'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuLink from "./MenuLink";

const HomeDropdown = [
  {
    name: "Our Story",
    routerPath: "/our-story", 
  },
  {
    name: "Why Us",
    routerPath: "/why-us",
  },
];

const Services = [
  {
    name: "For Families",
    routerPath: "/for-families",
  },
  {
    name: "For Nannies",
    routerPath: "/for-nannies",
  },
  {
    name: "Screening & Matchmaking",
    routerPath: "/screening-and-matchmaking",
  },
];

const MegaMenu = () => {
  const pathname = usePathname();
  const [currentTopRoute, setCurrentTopRoute] = useState('');

  useEffect(() => {
    if (pathname === '/' || pathname === '/our-story' || pathname === '/why-us') {
      setCurrentTopRoute('Home');
    } else if (pathname === '/for-families' || pathname === '/for-nannies' || pathname === '/screening-and-matchmaking') {
      setCurrentTopRoute('Services');
    } else if (pathname === '/faq') {
      setCurrentTopRoute('FAQ');
    } else if (pathname === '/contact-us') {
      setCurrentTopRoute('Contact Us');
    }
  }, [pathname]);

  return (
    <ul className="navbar-nav">
      <li className={currentTopRoute === 'Home' ? "nav-item active dropdown" : "nav-item dropdown"}>
        <Link
          href="/"
          className={currentTopRoute === 'Home' ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}
          onClick={() => setCurrentTopRoute('Home')}
        >
          Home
        </Link>
        <ul className="dropdown-menu">
          {HomeDropdown.map((val, i) => (
            <MenuLink topMenu={'HomeDropdown'} val={val} key={i} setCurrentTopRoute={setCurrentTopRoute} />
          ))}
        </ul>
      </li>

      <li className={currentTopRoute === 'Services' ? "nav-item active dropdown" : "nav-item dropdown"}>
        <Link
          href="#"
          className={currentTopRoute === 'Services' ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}
        >
          Services
        </Link>
        <ul className="dropdown-menu">
          {Services.map((service, i) => (
            <div key={i} className={pathname === service.routerPath ? "active" : ""}>
              <li className="dropdown-item">
                <Link href={service.routerPath}>
                  {service.name}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </li>

      <li className={currentTopRoute === 'FAQ' ? "nav-item active" : "nav-item"}>
        <Link
          href="/faq"
          className={currentTopRoute === 'FAQ' ? "nav-link active" : "nav-link"}
          onClick={() => setCurrentTopRoute('FAQ')}
        >
          FAQ
        </Link>
      </li>

      <li className={currentTopRoute === 'Contact Us' ? "nav-item active" : "nav-item"}>
        <Link
          href="/contact-us"
          className={currentTopRoute === 'Contact Us' ? "nav-link active" : "nav-link"}
          onClick={() => setCurrentTopRoute('Contact Us')}
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

export default MegaMenu;
