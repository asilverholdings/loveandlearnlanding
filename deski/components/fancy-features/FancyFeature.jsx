'use client'

import Tilt from "react-parallax-tilt";
import React from 'react'
import Image from "next/image";

export default function FancyFeature() {
  return (
    <div className="fancy-feature-fourteen mt-250 pt-80 md-mt-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="title-style-six">
                <h6 style={{ color: "#FF2759", fontSize: "15" }}>
                  Integrategration
                </h6>
                <h2>
                  Connect App <br /> with the <span>Software</span> you use.
                </h2>
                <p className="text-xs pe-5 me-5">
                  Lorem ipsum dolor on adipisci elit io quis sed do eiusmod tem.
                </p>
              </div>
              {/*  /.title-style-six */}
            </div>

            <div className="col-lg-5 ms-auto">
              <div className="right-side md-mt-60">
                <div className="row">
                  <div className="col-md-6">
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <Image  width="142" height="54" src="/images/logo/logo-17.svg" alt="logo" />
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta d-flex align-items-center justify-content-center ">
                        <Image  width="146" height="37"  src="/images/logo/logo-18.svg" alt="logo" />
                      </div>
                    </Tilt>
                  </div>
                  {/* End .col */}

                  <div className="col-md-6">
                    <Tilt>
                      <div className="logo-meta mt-40 d-flex align-items-center justify-content-center ">
                        <Image  width="162" height="50" src="/images/logo/logo-19.svg" alt="logo" />
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <Image width="140" height="76"  src="/images/logo/logo-20.svg" alt="logo" />
                        <Image width="98" height="83"
                          src="/images/shape/154.svg"
                          alt="shape"
                          className="shapes shape-one"
                        />
                      </div>
                    </Tilt>
                  </div>
                  {/* End .col */}
                </div>
              </div>
              {/* /.right-side */}
            </div>
          </div>
        </div>
      </div>
  )
}
