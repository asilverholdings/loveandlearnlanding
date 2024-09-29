import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div
      className="
          bg-wrapper
          d-lg-flex
          align-items-center
          justify-content-between
        "
    >
      <h2 className="font-gilroy-bold">
        Don’t find the answer? contact us for any query.
      </h2>
      <Link     href="contact-cs">Contact us</Link>
      <div className="bubble-one"></div>
      <div className="bubble-two"></div>
      <div className="bubble-three"></div>
      <div className="bubble-four"></div>
      <div className="bubble-five"></div>
    </div>
    //  /.bg-wrapper
  );
};

export default CallToAction;
