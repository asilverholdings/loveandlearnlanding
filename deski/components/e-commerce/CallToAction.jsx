'use client'


import React from "react";
import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="row align-items-end">
        <div className="col-lg-6" data-aos="fade-right">
          <div className="title-style-eleven">
            <h2 className="pe-xl-5 me-xl-2">Signup & get 20% flat dicount</h2>
            <p className="pt-25 text-dark">
              Receive offers, product alerts, styling inspiration and more. By
              signing up, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6" data-aos="fade-left">
          <div className="form-wrapper">
            <form onClick={handleSubmit}>
              <input type="email" placeholder="ihidago@ujufidnan.gov" />
              <button className="tran3s">
                <Image width={21} height={10}  src="/images/icon/53.svg" alt="image" className="m-auto" />
              </button>
            </form>
            <p className="mt-15">
              Already a member?{" "}
              <Link     href="/login" className="text-dark">
                Sign in.
              </Link>
            </p>
          </div>
          {/* <!-- /.form-wrapper --> */}
        </div>
        {/* End .col */}
      </div>
    </div>
  );
};

export default CallToAction;
