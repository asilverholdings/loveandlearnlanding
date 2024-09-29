'use client'

import React, { useEffect, useState } from "react";

import Link from "next/link";
import MegaMenuLanding from "../../header/mega-menu/MegaMenuLanding";
import Image from "next/image";

const HeaderLandingAppointment = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
       if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    }
   
  };

  useEffect(() => {
      window.addEventListener("scroll", changeBackground);
  
    return () => {
        window.removeEventListener("scroll", changeBackground);
    }
  }, [])
  




  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-six bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-six bg-none"
        }
      >
        <div className="d-flex align-items-center">
          <div className="logo">
            <Link     href="/project-management">
              <Image width="138" height="47" src="/images/logo/deski_06.svg" alt="brand" />
            </Link>
          </div>
          {/* End logo */}

          <div className="right-widget order-lg-3">
            <ul className="d-flex align-items-center">
              <li>
                <Link
                      href="/login"
                  className="signIn-action d-flex align-items-center"
                >
                  <Image width="20" height="21" src="/images/icon/120.svg" alt="icon" />
                  <span>login</span>
                </Link>
              </li>
              <li>
                <Link     href="/signup" className="signup-btn">
                  <span>Sign up</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* End .right-widget */}

          <nav
            id="mega-menu-holder"
            className="navbar navbar-expand-lg ms-lg-auto order-lg-2"
          >
            <div className="container nav-container">
              <div className="mob-header">
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
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                <div 
                    className="navbar-nav  main-side-nav font-gordita"
               
                  >
                    <div data-to-scrollspy-id="home" className="nav-item dropdown position-static">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#home"
                        data-toggle="dropdown"
                       
                      >
                        Home
                      </a>
                      <div className="dropdown-menu">
                        <MegaMenuLanding />
                      </div>
                    </div>
                    <div data-to-scrollspy-id="feature"  className="nav-item">
                      <a href="#feature" className="nav-link">
                        Features
                      </a>
                    </div>
                    <div data-to-scrollspy-id="service"  className="nav-item">
                      <a href="#service" className="nav-link">
                        Service
                      </a>
                    </div>
                    <div data-to-scrollspy-id="feedback"  className="nav-item">
                      <a href="#feedback" className="nav-link">
                        Feedback
                      </a>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link     href="/project-management">
            <Image width="138" height="47" src="/images/logo/deski_06.svg" alt="brand" />
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <Image  width="14" height="14"  src="/images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <div 
         
        >
          <p  data-to-scrollspy-id="home" className="nav-item">
            <a href="#home" className="nav-link" onClick={handleClick}>
              Home
            </a>
          </p>
          <div data-to-scrollspy-id="feature" className="nav-item">
            <a href="#feature" className="nav-link" onClick={handleClick}>
              Features
            </a>
          </div>
          <div data-to-scrollspy-id="service" className="nav-item">
            <a href="#service" className="nav-link" onClick={handleClick}>
            Service
            </a>
          </div>
          <div data-to-scrollspy-id="feedback" className="nav-item">
            <a href="#feedback" className="nav-link" onClick={handleClick}>
              Feedback
            </a>
          </div>
       
        </div>
      </div>
      {/* Mobile Menu End */}
    </>
  );
};

export default HeaderLandingAppointment;
