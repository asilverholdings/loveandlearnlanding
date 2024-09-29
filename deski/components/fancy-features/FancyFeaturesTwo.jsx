

'use client'

import Image from "next/image";
import React, { useState } from "react";




export default function FancyFeaturesTwo() {
  const [click1, setClick1] = useState(false);
  const [selected, setSelected] = useState('')
  const handleClick1 = (elm) => {setClick1(!click1);
    setSelected(elm)}
  
  return (
    <div className="fancy-short-banner-eight mt-170 md-mt-80">
    <div className="container">
      <div className="row">
        <div
          className="col-xl-8 col-lg-11 m-auto"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="title-style-seven text-center">
            <h2>
              <span>200k+</span> Customers have our deski.Try it now!
            </h2>
            <p>Try it risk free — we don’t charge cancellation fees.</p>
          </div>
          {/*  /.title-style-six */}
        </div>
      </div>
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
      </div>
    </div>
    {/*  /.container */}
    <Image width="78" height="131"
      src="/images/shape/171.svg"
      alt="shape"
      className="shapes shape-one"
    />
    <Image width="78" height="131"
      src="/images/shape/172.svg"
      alt="shape"
      className="shapes shape-two"
    />
  </div>
  )
}
