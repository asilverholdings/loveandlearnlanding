'use client'

import React, { useEffect, useState } from "react";

import Link from "next/link";
import MegaMenuLanding from "../../header/mega-menu/MegaMenuLanding";
import Image from "next/image";

const HeaderLandingNoteTaking = () => {
  // For header select menu
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

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
            ? "theme-main-menu sticky-menu theme-menu-five fixed"
            : "theme-main-menu sticky-menu theme-menu-five"
        }
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
            <Link     href="/doc-landing">
              <Image width="138" height="47" src="/images/logo/deski_06.svg" alt="brand" />
            </Link>
          </div>
          {/* End logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
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
                    <div data-to-scrollspy-id="product"  className="nav-item">
                      <a href="#product" className="nav-link">
                        Product
                      </a>
                    </div>
                    <div data-to-scrollspy-id="features"  className="nav-item">
                      <a href="#features" className="nav-link">
                        Features
                      </a>
                    </div>
                    <div data-to-scrollspy-id="why_us"  className="nav-item">
                      <a href="#why_us" className="nav-link">
                        Why Us
                      </a>
                    </div>
               
                   
                    <div data-to-scrollspy-id="pricing"  className="nav-item">
                      <a href="#pricing" className="nav-link">
                        Pricing
                      </a>
                    </div> <div data-to-scrollspy-id="feedback"  className="nav-item">
                      <a href="#feedback" className="nav-link">
                        Feedback
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/* End Navbar */}

          <div className="right-widget">
            <ul className="d-flex align-items-center">
              <li>
                <Link
                      href="/login"
                  className="signIn-action d-flex align-items-center"
                >
                  <Image  width="14" height="19"  src="/images/icon/52.svg" alt="icon" />
                  <span>login</span>
                </Link>
              </li>
              {/* End login */}
              <li>
                <div
                  className={
                    click1
                      ? "dropdown download-btn show"
                      : "dropdown download-btn"
                  }
                >
                  <button
                    className="dropdown-toggle"
                    onClick={handleClick1}
                    type="button"
                  >
                    Download
                  </button>
                  <div
                    className={click1 ? "dropdown-menu  show" : "dropdown-menu"}
                  >
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                      onClick={handleClick1}
                    >
                      <Image  width="22" height="22" src="/images/icon/103.svg" alt="icon" />
                      <span>IOS & Android</span>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                      onClick={handleClick1}
                    >
                      <Image  width="20" height="20" src="/images/icon/104.svg" alt="icon" />
                      <span>Mac & Windows</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* End right-widget */}
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
          <div data-to-scrollspy-id="features" className="nav-item">
            <a href="#features" className="nav-link" onClick={handleClick}>
              Features
            </a>
          </div>
        
          <div data-to-scrollspy-id="product" className="nav-item">
            <a href="#product" className="nav-link" onClick={handleClick}>
              Product
            </a>
          </div>
          <div data-to-scrollspy-id="why_us" className="nav-item">
            <a href="#why_us" className="nav-link" onClick={handleClick}>
              Why Us
            </a>
          </div>
          
         
          <div data-to-scrollspy-id="pricing" className="nav-item">
            <a href="#pricing" className="nav-link" onClick={handleClick}>
              Pricing
            </a>
          </div> <div data-to-scrollspy-id="feedback" className="nav-item">
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

export default HeaderLandingNoteTaking;
