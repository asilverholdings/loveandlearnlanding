'use client'

import React, { useEffect, useState } from "react";

import Link from "next/link";
import Modal from "react-modal";
import HeaderPopupForm from "../../form/HeaderPopupForm";
import MegaMenuLanding from "../../header/mega-menu/MegaMenuLanding";
import Image from "next/image";

// Modal.setAppElement("#root");

const HeaderLandingDark = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

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
                    <div data-to-scrollspy-id="about"  className="nav-item">
                      <a href="#about" className="nav-link">
                        About Us
                      </a>
                    </div>
                    <div data-to-scrollspy-id="features"  className="nav-item">
                      <a href="#features" className="nav-link">
                        Features
                      </a>
                    </div>
                    <div data-to-scrollspy-id="product"  className="nav-item">
                      <a href="#product" className="nav-link">
                        Product
                      </a>
                    </div>
                    <div data-to-scrollspy-id="feedback"  className="nav-item">
                      <a href="#feedback" className="nav-link">
                        Feedback
                      </a>
                    </div>
                    <div data-to-scrollspy-id="pricing"  className="nav-item">
                      <a href="#pricing" className="nav-link">
                        Pricing
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="right-widget">
            <button className="demo-button" onClick={toggleModalOne}>
              <span>Request A Demo</span>
              <Image width={20} height={20}  src="/images/icon/user.svg" alt="icon" />
            </button>
          </div>
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
             <a href="#feature" className="nav-link" onClick={handleClick}>
               Features
             </a>
           </div>
           <div data-to-scrollspy-id="about" className="nav-item">
             <a href="#about" className="nav-link" onClick={handleClick}>
               About Us
             </a>
           </div>
           <div data-to-scrollspy-id="product" className="nav-item">
             <a href="#product" className="nav-link" onClick={handleClick}>
               Product
             </a>
           </div>
           <div data-to-scrollspy-id="feedback" className="nav-item">
             <a href="#feedback" className="nav-link" onClick={handleClick}>
               Feedback
             </a>
           </div>
           <div data-to-scrollspy-id="pricing" className="nav-item">
             <a href="#pricing" className="nav-link" onClick={handleClick}>
               Pricing
             </a>
           </div>
         </div>
      </div>
      {/* Mobile Menu End */}

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal  modal-contact-popup-one dark-style"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="box_inner ">
          <main className="main-body box_inner modal-content clearfix">
            <button className="close" onClick={toggleModalOne}>
              <Image  width="14" height="14"  src="/images/icon/close.svg" alt="close" />
            </button>
            {/* End close icon */}

            <div className="left-side">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="row">
                  <div className="col-xl-10 col-lg-8 m-auto">
                    <blockquote>
                      “I never dreamed about success. I worked for it.”
                    </blockquote>
                    <span className="bio">—Estée Lauder</span>
                  </div>
                </div>
                <Image  width="649" height="516"
                  src="/images/assets/ils_19.svg"
                  alt="image"
                  className="illustration mt-auto"
                />
              </div>
            </div>
            {/* /.left-side */}

            <div className="right-side">
              <h2 className="form-title">Contact us</h2>
              <HeaderPopupForm />
            </div>
            {/*  /.right-side */}
          </main>
          {/* /.main-body */}
        </div>
      </Modal>
      {/* End  Modal For Request a demo */}
    </>
  );
};

export default HeaderLandingDark;
