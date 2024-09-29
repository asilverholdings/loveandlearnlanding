'use client'

import React, { useState , useEffect} from "react";

import Link from "next/link";
import MegaMenu from "./mega-menu/MegaMenu";
import MegaMenuMobile from "./mega-menu/MegaMenuMobile";
import Image from "next/image";

const HeaderFour = () => {
  const [navbar, setNavbar] = useState(false);

 const changeBackground = () => {
  if (typeof window !== "undefined") {
      
      if (window.scrollY >= 68) {
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
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-four bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-four bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link     href="/">
              <Image width={136} 
              height={43} src="/images/logo/deski_05.svg" alt="brand logo" />
            </Link>
          </div>
          {/* End Logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex align-items-center">
                  <MegaMenu />
                  {/* End MegaMenu */}

                  <ul className="right-button-group d-flex align-items-center justify-content-center">
                    <li>
                      <Link     href="/login" className="signIn-action">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link     href="/signup" className="theme-btn-five">
                        Create your event
                      </Link>
                    </li>
                  </ul>
                  {/* End right-button-group  */}
                </div>
              </div>
            </div>
          </nav>
          {/* End nav */}
        </div>

        <MegaMenuMobile />

        {/* 	End Mega Menu for Mobile */}
      </div>
      {/* /.theme-main-menu */}
    </>
  );
};

export default HeaderFour;
