import Image from "next/image";
import React from "react";

const CallToActionSix = () => {
  return (
    <div className="title-style-twelve">
      <h2>
        <span>
          Try Deski Free{" "}
          <Image  width="355" height="37" src="/images/shape/line-shape-13.svg" alt="sahpe" />
        </span>
      </h2>
      <p className="pt-45 pb-50 text-dark">
        After your 14-day trial of our Professional plan, enjoy the Free version
        of deski– forever.
      </p>
      <a href="#" className="theme-btn-nine">
        Start Free Trial
      </a>
    </div>
  );
};

export default CallToActionSix;
