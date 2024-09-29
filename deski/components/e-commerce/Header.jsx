'use client'

import React, { useState , useEffect } from "react";
import Link from "next/link";
import CartDropdown from "./CartDropdown";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { useContextElement } from "@/context/Context";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [click2, setClick2] = useState(false);
  const handleClick2 = () => setClick2(!click2);

  const {cartProducts} = useContextElement()

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {

    window.addEventListener("scroll", changeBackground);
   
    return () => {
  window.removeEventListener("scroll", changeBackground);
    }
  }, [])
  



  return (
    <div
      className={
        navbar
          ? "theme-main-menu sticky-menu bg-none theme-menu-eight fixed"
          : "theme-main-menu sticky-menu bg-none theme-menu-eight"
      }
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link     href="/">
            <Image  width="137" height="34"  src="/images/logo/deski_10.svg" alt="brand" />
          </Link>
        </div>

        <div className="right-widget d-flex align-items-center">
          <Link
                href="/login"
            className="signIn-action d-none d-sm-flex align-items-center"
          >
            <Image  width="20" height="21"  src="/images/icon/199.svg" alt="icon" className="me-2" />
            <span>login</span>
          </Link>

          <div className="cart-group-wrapper position-relative">
            <button
              className="btn dropdown-toggle"
              type="button"
              onClick={handleClick}
            >
              <Image  width="24" height="24"  src="/images/icon/200.svg" alt="image" className="m-auto" />
              <span className="item-count">{cartProducts.length}</span>
            </button>
            <div
              className={click ? "dropdown-cart cart-show" : "dropdown-cart"}
            >
              <CartDropdown />
            </div>
          </div>
          {/* End .cart-group-wrapper */}

          <button className="sidebar-nav-button" onClick={handleClick2}>
            <Image  width="20" height="20" src="/images/icon/201.svg" alt="icon" />
          </button>
          {/* sidebar nav  toggle button */}

          <div
            className={click2 ? "main-sidebar-nav show" : "main-sidebar-nav"}
          >
            <div className="offcanvas-header d-flex justify-content-between align-items-center">
              <div className="logo">
                <Link     href="/" className="d-block">
                  <Image  width="137" height="34"  src="/images/logo/deski_10.svg" alt="brand" />
                </Link>
              </div>
              {/* End logo */}

              <button
                type="button"
                className="close-btn tran3s"
                onClick={handleClick2}
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
            {/* offcanvas-header */}

            <Sidebar />
          </div>
          {/* main-sidebar-nav */}
        </div>
        {/* <!-- /.right-widget --> */}
      </div>
    </div>
  );
};

export default Header;
