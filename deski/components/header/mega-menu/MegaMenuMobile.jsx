'use client'

import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";

import MobileMenuTwo from "../MobileMenuTwo";
const MegaMenuMobile = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <div className={`mega-menu-wrapper   ${click ? 'active':''}`} style={{position:'fixed',top:'0px',left:'0px'}} >
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
        style={{background:'#FFFFFF', height:'100vh'}}
        className={click ? "mega-mobile-menu menu-open wrapper-two-menu active" : "mega-mobile-menu wrapper-two-menu"}
        
      >
        <div className="logo">
          <div>
            <Link href="/">
            <Image width="250" height="47" src="/images/logo/love-and-learn-text.svg" alt="menu-logo" />
            </Link>
          </div>
        </div>
        <div style={{background: '#FFFFFF',}} >
          <MobileMenuTwo/>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuMobile;
