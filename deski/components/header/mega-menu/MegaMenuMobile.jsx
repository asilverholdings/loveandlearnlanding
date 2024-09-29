'use client'

import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";

const HomeMobileMenu = [
  {
    label: "Event Organiser",
    href: "/",
  },
  {
    label: "Project Management",
    href: "/project-management",
  },
  {
    label: "Customer Support",
    href: "/customer-support",
  },
  {
    label: "Doc landing",
    href: "/doc-landing",
  },
  {
    label: "Product landing",
    href: "/product-landing",
  },
  {
    label: "Product landing Dark",
    href: "/product-landing-dark",
  },
  {
    label: "Note Taking App landing",
    href: "/note-taking-landing",
  },
  {
    label: "Video Editor Landing",
    href: "/video-editor-landing",
  },
  {
    label: "Appointment Scheduling",
    href: "/appointment-scheduling",
  },
  {
    label: "Mobile App",
    href: "/mobile-app-landing",
  },
  {
    label: "Doc Signature",
    href: "/doc-signature",
  },
  {
    label: "Website Builder",
    href: "/website-builder",
  },
  {
    label: "Form Survey",
    href: "/form-survey-landing",
  },
  {
    label: "VR Landing",
    href: "/vr-landing",
  },
  {
    label: "E-Commerce",
    href: "/e-commerce",
  },
  {
    label: "Coming Soon",
    href: "/coming-soon",
  },
];

const Pricing = [
  {
    label: "Customer Support",
    href: "/pricing-cs",
  },
  {
    label: "Event Organiser",
    href: "/pricing-eo",
  },
  {
    label: "Project Management",
    href: "/pricing-pm",
  },
];
const AboutUs = [
  {
    label: "Customer Support",
    href: "/about-cs",
  },
  {
    label: "Event Organiser",
    href: "/about-eo",
  },
  {
    label: "Project Management",
    href: "/about-pm",
  },
  {
    label: "Documentation",
    href: "/about-doc",
  },
];
const ContactUs = [
  {
    label: "Custom Support",
    href: "/contact-cs",
  },
  {
    label: "Event Organizer",
    href: "/contact-eo",
  },
  {
    label: "Project Management",
    href: "/contact-pm",
  },
  {
    label: "Documentation",
    href: "/contact-doc",
  },
];
const Team = [
  {
    label: "Team Version 01",
    href: "/team-1",
  },
  {
    label: "Team Version 02",
    href: "/team-2",
  },
  {
    label: "Team Version 03",
    href: "/team-3",
  },
  {
    label: "Team Version 04",
    href: "/team-4",
  },
  {
    label: "Team Version 05",
    href: "/team-5",
  },
  {
    label: "Team Version 06",
    href: "/team-6",
  },
  {
    label: "Team Details",
    href: "/teams/1",
  },
  {
    label: "Team Details Slider",
    href: "/team-details-v2/1",
  },
];
const Services = [
  {
    label: "Service Version 01",
    href: "/service-v1",
  },
  {
    label: "Service Version 02",
    href: "/service-v2",
  },
  {
    label: "Service Version 03",
    href: "/service-v3",
  },
  {
    label: "Service Version 04",
    href: "/service-v4",
  },
  {
    label: "Service Details",
    href: "/services/3",
  },
];
const Miscellaneous = [
  {
    label: "Terms & Condition)",
    href: "/terms-conditions",
  },
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Signup",
    href: "/signup",
  },
  {
    label: "404",
    href: "/not-found",
  },
];
const Portfolio = [
  {
    label: "Classic Style",
    href: "/classic-style",
  },
  {
    label: "Grid 2 Columns",
    href: "/grid-two-col",
  },
  {
    label: "Grid 3 Columns",
    href: "/grid-three-col",
  },
  {
    label: "Gallery Slider",
    href: "/gallery-slider",
  },
  {
    label: "Grid Single",
    href: "/grid-single",
  },
  {
    label: "Classic Details",
    href: "/portfolios/2",
  },
];
const Blogs = [
  {
    label: "Blog Version 01",
    href: "/blog-v1",
  },
  {
    label: "Blog Version 02",
    href: "/blog-v2",
  },
  {
    label: "Blog Version 03",
    href: "/blog-v3",
  },
  {
    label: "Blog Version 04",
    href: "/blog-v4",
  },
  {
    label: "Blog Version 05",
    href: "/blog-v5",
  },
  {
    label: "Blog Version 06",
    href: "/blog-v6",
  },
  {
    label: "Blog Details",
    href: "/blogs/3",
  },
];
const Docs = [
  {
    label: "Full Width",
    href: "/doc-full-width",
  },
  {
    label: "Full Width Banner",
    href: "/doc-full-width-banner",
  },
  {
    label: "Doc Box",
    href: "/doc-box",
  },
  {
    label: "Doc Box With Banner",
    href: "/doc-box-with-banner",
  },
  {
    label: "Changelog",
    href: "/changelog",
  },
];
import { usePathname } from "next/navigation";
import MenuLinkTwo from "./MenuLinkTwo";
import MobileMenuTwo from "../MobileMenuTwo";
const MegaMenuMobile = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <div className={`mega-menu-wrapper   ${click ? 'active':''}`} style={{position:'fixed',top:'0px',left:'0px'}} >
      <div className="mega-swicher"></div>
      <div  className="mob-header multi-mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      <div
      style={{background:'#17192B',height:'100vh'}}

        className={click ? "mega-mobile-menu menu-open wrapper-two-menu active" : "mega-mobile-menu wrapper-two-menu"}

        
      >
        <div>
          <div className="logo position-static" style={{paddingTop:'40px',paddingLeft:'16px'}} >
            <Link    href="/">
              <Image   width="137" height="34" src="/images/logo/deski_07.svg" alt="home-demo" />
            </Link>
          </div>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <Image  width="14" height="15"  src="/images/icon/close-w.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}

          {/* End logo */}
        </div>
        <div style={{background:'#17192B',}} >
          <MobileMenuTwo/>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuMobile;
