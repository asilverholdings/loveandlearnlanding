'use client'

import React, { useEffect, useState } from "react";

import Link from "next/link";
import MegaMenuLanding from "../../header/mega-menu/MegaMenuLanding";
import Image from "next/image";

const HeaderLandingWebsiteBuilder = () => {
  // For Mobile  menu
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
            ? "theme-main-menu sticky-menu theme-menu-seven bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-seven bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-1">
            <Link     href="/doc-landing">
              <Image  width="137" height="34" src="/images/logo/deski_09.svg" alt="brand" />
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
              {/* End login */}
              <li>
                <Link
                      href="/signup"
                  className="theme-btn-twelve d-none d-lg-block"
                >
                  Start Free Trial
                </Link>
              </li>
            </ul>
          </div>
          {/* End right-widget */}

          <nav
            id="mega-menu-holder"
            className="navbar navbar-expand-lg ps-xl-5 ms-xl-5 order-lg-2"
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
                <div 
                    className="navbar-nav  main-side-nav font-gordita"
                    // items={[
                    //   "home",
                    //   "feature",
                    //   "product",
                    //   "feedback",
                    //   "pricing",
                    // ]}
                    // currentClassName="active"
                    // offset={-500}
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
                    <div data-to-scrollspy-id="p-tour"  className="nav-item">
                      <a href="#p-tour" className="nav-link">
                        Product Tour
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
          </nav>
          {/* End Navbar */}
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link     href="/doc-landing">
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
          <div data-to-scrollspy-id="p-tour" className="nav-item">
            <a href="#p-tour" className="nav-link" onClick={handleClick}>
              Product Tour
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

export default HeaderLandingWebsiteBuilder;
