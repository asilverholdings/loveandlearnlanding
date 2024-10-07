'use client'
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuLink from "./MenuLink";
import MenuLinkTwo from "./MenuLinkTwo";

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

// const Pricing = [
//   {
//     name: "Customer Support",
//     routerPath: "/pricing-cs",
//   },
//   {
//     name: "Event Organiser",
//     routerPath: "/pricing-eo",
//   },
//   {
//     name: "Project Management",
//     routerPath: "/pricing-pm",
//   },
// ];
// const AboutUs = [
//   {
//     name: "Customer Support",
//     routerPath: "/about-cs",
//   },
//   {
//     name: "Event Organiser",
//     routerPath: "/about-eo",
//   },
//   {
//     name: "Project Management",
//     routerPath: "/about-pm",
//   },
//   {
//     name: "Documentation",
//     routerPath: "/about-doc",
//   },
// ];

// const ContactUS = [
//   {
//     name: "Customer Support",
//     routerPath: "/contact-cs",
//   },
//   {
//     name: "Event Organiser",
//     routerPath: "/contact-eo",
//   },
//   {
//     name: "Project Management",
//     routerPath: "/contact-pm",
//   },
//   {
//     name: "Documentation",
//     routerPath: "/contact-doc",
//   },
// ];
// const Team = [
//   {
//     name: "Team Version 01",
//     routerPath: "/team-1",
//   },
//   {
//     name: "Team Version 02",
//     routerPath: "/team-2",
//   },
//   {
//     name: "Team Version 03",
//     routerPath: "/team-3",
//   },
//   {
//     name: "Team Version 04",
//     routerPath: "/team-4",
//   },
//   {
//     name: "Team Version 05",
//     routerPath: "/team-5",
//   },
//   {
//     name: "Team Version 06",
//     routerPath: "/team-6",
//   },
//   {
//     name: "Team Details",
//     routerPath: "/teams/1",
//   },
//   {
//     name: "Team Details Slider",
//     routerPath: "/team-details-v2/1",
//   },
// ];

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
    name: "Sreening & Matchmaking",
    routerPath: "/screening-and-matchmaking",
  },
];

const Miscellaneous = [
  {
    name: "Terms & Condition",
    routerPath: "/terms-conditions",
  },
  {
    name: "Login",
    routerPath: "/login",
  },
  {
    name: "Signup",
    routerPath: "/signup",
  },
  {
    name: "404",
    routerPath: "/not-found",
  },
];

// const Portfolio = [
//   {
//     name: "Classic Style",
//     routerPath: "/classic-style",
//   },
//   {
//     name: "Grid 2 Columns",
//     routerPath: "/grid-two-col",
//   },
//   {
//     name: "Grid 3 Columns",
//     routerPath: "/grid-three-col",
//   },
//   {
//     name: "Gallery Slider",
//     routerPath: "/gallery-slider",
//   },
//   {
//     name: "Grid Single",
//     routerPath: "/grid-single",
//   },
//   {
//     name: "Classic Details",
//     routerPath: "/portfolios/3",
//   },
// ];

const Blogs = [
  {
    name: "Blog Version 01",
    routerPath: "/blog-v1",
  },
  {
    name: "Blog Version 02",
    routerPath: "/blog-v2",
  },
  {
    name: "Blog Version 03",
    routerPath: "/blog-v3",
  },
  {
    name: "Blog Version 04",
    routerPath: "/blog-v4",
  },
  {
    name: "Blog Version 05",
    routerPath: "/blog-v5",
  },
  {
    name: "Blog Version 06",
    routerPath: "/blog-v6",
  },
  {
    name: "Blog Details",
    routerPath: "/blogs/1",
  },
];

const Docs = [
  {
    name: "Full Width",
    routerPath: "/doc-full-width",
  },
  {
    name: "Full Width Banner",
    routerPath: "/doc-full-width-banner",
  },
  {
    name: "Doc Box",
    routerPath: "/doc-box",
  },
  {
    name: "Doc Box With Banner",
    routerPath: "/doc-box-with-banner",
  },
  {
    name: "Changelog ***",
    routerPath: "/changelog",
  },
];

const MegaMenu = () => {
  const pathname = usePathname();
  const [currentTopRoute, setCurrentTopRoute] = useState('Home')
  return (
    <ul className="navbar-nav">
      <li className={currentTopRoute == 'Home' ? "nav-item active dropdown" : "nav-item dropdown"}>
        {/* Update 'a' tag to use Next.js Link */}
        <Link 
          href="/" 
          className={currentTopRoute == 'Home' ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} 
          data-toggle="dropdown"
        >
          Home
        </Link>

        {/* Dropdown Menu */}
        <ul className="dropdown-menu">
          {HomeDropdown.map((val, i) => 
            <MenuLink topMenu={'HomeDropdown'} val={val} key={i} setCurrentTopRoute={setCurrentTopRoute} />
          )}
        </ul>
      </li>
      {/* End li */}

      <li className={currentTopRoute === 'Pages' ? "nav-item active dropdown" : "nav-item dropdown"}>
        <a 
          className={currentTopRoute === 'Pages' ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} 
          href="#" 
          data-toggle="dropdown"
          onClick={(e) => e.preventDefault()}
        >
          Services
        </a>

        <ul className="dropdown-menu">
          <li className="dropdown-item">
          <a 
            href={Services[0].routerPath}
            className={pathname === Services[0].routerPath ? "active" : ""}
          >
            For Families
          </a>
          </li>
          <li className="dropdown-item">
            <a 
              href={Services[1].routerPath} 
              className={pathname === Services[1].routerPath ? "active" : ""}
            >
              For Nannies
            </a>
          </li>
          <li className="dropdown-item">
            <a 
              href={Services[2].routerPath}
              className={pathname ===  Services[2].routerPath ? "active" : ""}
            >
              Screening & Matchmaking
            </a>
          </li>
          
        </ul>
        {/* /.dropdown-menu */}
      </li>

      {/* End li */}

      <li className={currentTopRoute == 'rates' ? "nav-item active dropdown" : "nav-item dropdown"}>
        <Link
          href="/rates"
          className={currentTopRoute == 'rates' ? "nav-link active" : "nav-link"}
          onClick={() => setCurrentTopRoute('rates')}
        >
          Rates
        </Link>
      </li>
      {/* End li */}

      <li className={currentTopRoute == 'faq' ? "nav-item active dropdown" : "nav-item dropdown"}>
        <Link
          href="/faq"
          className={currentTopRoute == 'faq' ? "nav-link active" : "nav-link"}
          onClick={() => setCurrentTopRoute('faq')}
        >
          FAQ
        </Link>
      </li>
      {/* End li */}

      <li className={currentTopRoute == 'contact-us' ? "nav-item active dropdown" : "nav-item dropdown"}>
        <Link
          href="/contact-us"
          className={currentTopRoute == 'contact-us' ? "nav-link active" : "nav-link"}
          onClick={() => setCurrentTopRoute('contact-us')}
        >
          Contact Us
        </Link>
      </li>
      {/* End li */}
    </ul>
  );
  // End navbar nav mega menu main
};

export default MegaMenu;
