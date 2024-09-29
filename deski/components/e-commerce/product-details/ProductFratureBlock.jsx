import Image from "next/image";
import React from "react";

const ProductFratureBlock = () => {
  return (
    <>
      <div className="col-lg-3 col-sm-6" data-aos="fade-up">
        <div className="block-style-thirtyNine mt-40 text-center">
          <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
            <Image  width="26" height="26" src="/images/icon/203.svg" alt="image" />
          </div>
          <h3>Free Shipping</h3>
          <p className="ps-xl-3 pe-xl-3">
            Simplify the process to create proposals.
          </p>
        </div>
        {/* <!-- /.block-style-thirtyNine --> */}
      </div>
      <div
        className="col-lg-3 col-sm-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="block-style-thirtyNine mt-40 text-center">
          <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
            <Image  width="30" height="31"  src="/images/icon/204.svg" alt="image" />
          </div>
          <h3>Free Return</h3>
          <p className="ps-xl-3 pe-xl-3">Return money within 7 days only!</p>
        </div>
        {/* <!-- /.block-style-thirtyNine --> */}
      </div>
      <div
        className="col-lg-3 col-sm-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="block-style-thirtyNine mt-40 text-center">
          <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
            <Image  width="26" height="26"  src="/images/icon/205.svg" alt="image" />
          </div>
          <h3>Secured Payment</h3>
          <p className="ps-xl-3 pe-xl-3">We ensure secure payment with PEV</p>
        </div>
        {/* <!-- /.block-style-thirtyNine --> */}
      </div>
      <div
        className="col-lg-3 col-sm-6"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="block-style-thirtyNine mt-40 text-center">
          <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
            <Image  width="34" height="34"  src="/images/icon/206.svg" alt="image" />
          </div>
          <h3>100% Safe</h3>
          <p className="ps-xl-3 pe-xl-3">
            We provide world best security system
          </p>
        </div>
        {/* <!-- /.block-style-thirtyNine --> */}
      </div>
    </>
  );
};

export default ProductFratureBlock;
