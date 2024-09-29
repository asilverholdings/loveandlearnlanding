import React from "react";
import FormDoc from "../form/FormDoc";
import Link from "next/link";
import Image from "next/image";

const HeroBannerThree = () => {
  return (
    <div className="hero-banner-three">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-11 col-md-8 m-auto">
            <h1 className="font-rubik">Doc software you looking for.</h1>
          </div>
          {/* End .col */}

          <div className="col-xl-8 col-lg-9 m-auto">
            <p className="sub-text font-rubik">
              With deski Docs, you can write, edit, and collaborate wherever you
              are with 7 day trial
            </p>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}

        <div className="search-filter-form">
          <FormDoc />
        </div>
        {/* End search-filter-from */}

        <p className="sing-in-call">
          Already using deski?{" "}
          <Link     href="/login" className="font-rubik">
            Sign in.
          </Link>
          .
        </p>

        <Image width="1174" height="567" 
          src="/images/assets/ils_09.svg"
          alt="illustration"
          className="illustration"
        />
      </div>
      {/* /.container */}

      <Image width={32} height={33} src="/images/shape/68.svg" alt="shape" className="shapes shape-one" />
      <Image width={24} height={34} src="/images/shape/69.svg" alt="shape" className="shapes shape-two" />
      <Image width="26" height="33"
        src="/images/shape/70.svg"
        alt="shape"
        className="shapes shape-three"
      />
      <Image width="21" height="21"
        src="/images/shape/71.svg"
        alt="shape"
        className="shapes shape-four"
      />
      <Image width="248" height="61"
        src="/images/shape/72.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <Image width="224" height="55" src="/images/shape/73.svg" alt="shape" className="shapes shape-six" />
      <Image width="33" height="8"
        src="/images/shape/74.svg"
        alt="shape"
        className="shapes shape-seven"
      />
      <Image width="22" height="23"
        src="/images/shape/75.svg"
        alt="shape"
        className="shapes shape-eight"
      />
      <Image width="19" height="29"
        src="/images/shape/76.svg"
        alt="shape"
        className="shapes shape-nine"
      />
      <Image width="49" height="50" src="/images/shape/77.svg" alt="shape" className="shapes shape-ten" />
    </div>
    // End hero-banner-three
  );
};

export default HeroBannerThree;
