

'use client'
import React, { useState } from "react";
import Image from "next/image";
import DocSidebarContent from "./DocSidebarContent";

export default function DocSidebarThree() {
    const handleSubmit = (event) => {
        event.preventDefault();
      };
      const [click, setClick] = useState(false);
      const handleClick = () => setClick(!click);
  return (
    <div className="col-xl-3 col-md-4 doc-sidebar">
    <div className="clearfix">
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
    </div>
    <nav
      className={
        click
          ? "doc-links collapse clearfix nav-fix  show"
          : "doc-links collapse clearfix nav-fix"
      }
      id="doc-sidebar-nav"
    >
      <div className="search-form">
        <form onClick={handleSubmit}>
          <input type="text" placeholder="Search here.." />
          <button>
            <Image width={17} height={16} style={{height:'fit-content'}}     src="/images/icon/59.svg" alt="icon" />
          </button>
        </form>
      </div>
      <DocSidebarContent />
    </nav>
    {/* /.doc-links */}
  </div>
  )
}
