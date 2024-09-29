import React from "react";
import Image from "next/image";
const socialContent = [
  {
    classCol: "col-lg-3 col-md-4 col-6",
    boxClass: "bx-a",
    img: "p-1",
    link: "#",
    animationDelay: "",
  },
  {
    classCol: "col-lg-2 col-md-4 col-6",
    boxClass: "bx-b",
    img: "p-2",
    link: "#",
    animationDelay: "50",
  },
  {
    classCol: "col-lg-3 col-md-4 col-6",
    boxClass: "bx-c",
    img: "p-3",
    link: "#",
    animationDelay: "100",
  },
  {
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-d",
    img: "p-4",
    link: "#",
    animationDelay: "150",
  },
  {
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-e",
    img: "p-5",
    link: "#",
    animationDelay: "200",
  },
  {
    classCol: "col-xl-4 col-lg-2 col-md-4 col-6",
    boxClass: "bx-f",
    img: "p-6",
    link: "#",
    animationDelay: "50",
  },
  {
    classCol: "col-xl-2 col-lg-3 col-md-4 col-6",
    boxClass: "bx-g",
    img: "p-7",
    link: "#",
    animationDelay: "100",
  },
  {
    classCol: "col-xl-3 col-lg-3 col-md-4 col-6",
    boxClass: "bx-h",
    img: "p-8",
    link: "#",
    animationDelay: "150",
  },
  {
    classCol: "col-xl-3 col-lg-11 col-md-4 col-6",
    boxClass: "bx-i",
    img: "p-9",
    link: "#",
    animationDelay: "200",
  },
];

const SocialTwo = () => {
  return (
    <div className="row justify-content-center">
      {socialContent.map((val, i) => (
        <div
          className={val.classCol}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDelay}
          key={i}
        >
          <div className={`img-box ${val.boxClass}`}>
            <a href="#">
              <Image  width={130} height={82} style={{maxHeight:'50%',objectFit:'contain'}} src={`/images/logo/${val.img}.png`} alt="logo" />
            </a>
          </div>
          {/* /.img-box */}
        </div>
      ))}

      {/* End .col */}
    </div>
  );
};

export default SocialTwo;
