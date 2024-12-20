'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MegaMenu from "./mega-menu/MegaMenu";
import MegaMenuMobile from "./mega-menu/MegaMenuMobile";
import Image from "next/image";

const HeaderTwo = () => {
  const innerWidth = 0;
  const [navbar, setNavbar] = useState(false);
  const [logoSize, setLogoSize] = useState(innerWidth <= 768 ? 120 : 400);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 68) {
        setNavbar(true);
        setLogoSize(innerWidth <= 768 ? 50 : 200);
      } else {
        setNavbar(false);
        setLogoSize(innerWidth <= 768 ? 120 : 400);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-two bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-two bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
            <Link href="/">
              <Image
                width={logoSize}
                height={logoSize}
                src="/images/logo/love-and-learn-logo.svg"
                alt="brand logo"
                style={{ transition: "width 0.3s, height 0.3s" }}
              />
            </Link>
          </div>
          {/* End Logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <MegaMenu />
                  {/* End MegaMenu */}
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

export default HeaderTwo;
