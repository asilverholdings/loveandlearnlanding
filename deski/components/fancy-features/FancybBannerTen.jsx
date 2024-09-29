'use client'



import Image from "next/image";
import React, { useState } from "react";

export default function FancybBannerTen() {
      // For header select menu
      const [selected, setSelected] = useState('')
      const [click1, setClick1] = useState(false);
      const handleClick1 = (elm) => {setClick1(!click1);
        setSelected(elm)}
  return (
    <div className="fancy-short-banner-ten mt-170 md-mt-80">
    <div className="container">
      <div className="row">
        <div
          className="col-xl-8 col-lg-11 m-auto"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="text-center">
            <h2>Try Deski Free</h2>
            <p>
              After your 14-day trial of our Professional plan, enjoy the
              Free version of Calendly – forever.
            </p>
          </div>
          {/*  /.title-style-six */}
        </div>
      </div>
      {/* End .row */}
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
      <div
              className={
                click1 ? "dropdown download-btn show" : "dropdown download-btn"
              }
            >
              <button
                className="dropdown-toggle"
                onClick={()=>setClick1(pre=>!pre)}
                type="button"
              >
                {selected  ||  ' Get Deski app'}
     
              </button>
              <div className={click1 ? "dropdown-menu  show" : "dropdown-menu"}>
                <div
                  className="dropdown-item d-flex align-items-center"
                  style={{cursor:'pointer'}}
                  onClick={()=>handleClick1('IOS & Android')}
                >
                  <Image  width="22" height="22" src="/images/icon/103.svg" alt="icon" />
                  <span>IOS & Android</span>
                </div>
                <div
                  className="dropdown-item d-flex align-items-center"
                  style={{cursor:'pointer'}}
                  
                  onClick={()=>handleClick1('Mac & Windows')}
                >
                  <Image  width="20" height="20" src="/images/icon/104.svg" alt="icon" />
                  <span>Mac & Windows</span>
                </div>
              </div>
            </div>
        {/* End dropdown */}
        <div className="info-text">
          No Credit Card Required. Cancel Anytime
        </div>
      </div>
    </div>
    {/*  /.container */}
    <Image width="321" height="471"
      src="/images/shape/210.svg"
      alt="shape"
      className="shapes shape-one"
    />
    <Image  width="311" height="445"
      src="/images/shape/211.svg"
      alt="shape"
      className="shapes shape-two"
    />
  </div>
  )
}
