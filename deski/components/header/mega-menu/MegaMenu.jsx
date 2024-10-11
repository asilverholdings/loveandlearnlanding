'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuLink from "./MenuLink";

const HomeDropdown = [
  {
    name: "Our Story",
    routerPath: "/#our-story",
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
    if (pathname === '/') {
      setCurrentTopRoute('Home');
    } else if (pathname === '/for-families' || pathname === '/for-nannies' || pathname === '/screening-and-matchmaking') {
      setCurrentTopRoute('Services');
    } else if (pathname === '/rates') {
      setCurrentTopRoute('Rates');
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
          href=""
          className={currentTopRoute === 'Services' ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}
        >
          Services
        </Link>
        <ul className="dropdown-menu">
          <div className={pathname === Services[0].routerPath ? "active" : ""}>
            <li className="dropdown-item">
              <Link href={Services[0].routerPath}>
                For Families
              </Link>
            </li>
          </div>
          <div className={pathname === Services[1].routerPath ? "active" : ""}>
            <li className="dropdown-item">
              <Link href={Services[1].routerPath}>
                For Nannies
              </Link>
            </li>
          </div>
          <div className={pathname === Services[2].routerPath ? "active" : ""}>
            <li className="dropdown-item">
              <Link href={Services[2].routerPath}>
                Screening & Matchmaking
              </Link>
            </li>
          </div>
        </ul>
      </li>

      <li className={currentTopRoute === 'Rates' ? "nav-item active" : "nav-item"}>
        <Link
          href="/rates"
          className={currentTopRoute === 'Rates' ? "nav-link active" : "nav-link"}
          onClick={() => setCurrentTopRoute('Rates')}
        >
          Rates
        </Link>
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
