import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeatureContent = [
  {
    icon: "ils_09",
    meta: "Comprehensive Process",
    subTitle: `We make finding the perfect nanny easy and stress-free`,
  },
  {
    icon: "ils_14",
    meta: "Dependable Service",
    subTitle: `We want to ensure that you always have high-quality care you can trust`,
  },
  {
    icon: "ils_21",
    meta: "Continued Support",
    subTitle: `We foster open communication to provide seamless support for both families and nannies.`,
  },
  {
    icon: "ils_20",
    meta: "Curriculum",
    subTitle: `Our curriculum equips nannies with structured activities to foster your child's development.`,
  },
];

const WhyUs = () => {
  return (
    <div>
      <div className="row justify-content-center">
        {FeatureContent.map((val, i) => (
          <div
            className="col-lg-3 col-md-6"
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="block-style-fourteen">
              <div className="illustration">
                <Image
                  width={240}
                  height={230}
                  style={{ objectFit: 'contain' }}
                  src={`/images/assets/${val.icon}.svg`}
                  alt="icon"
                />
              </div>
              <div className="title">{val.meta}</div>
              <p className="font-rubik">{val.subTitle}</p>
            </div>
            {/* /.block-style-fourteen */}
          </div>
        ))}
      </div>
      
      {/* Center the button */}
      <div className="row justify-content-center mt-4">
        <Link
          href="/why-us"
          className="theme-btn-five"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
          style={{ width: '15%' }}
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default WhyUs;
