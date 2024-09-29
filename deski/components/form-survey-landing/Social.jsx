import React from "react";
import Image from "next/image";
const Social = () => {
  const socialContent = [
    { image: "16", delayAnimatin: "0" },
    { image: "logo-33", delayAnimatin: "100" },
    { image: "11", delayAnimatin: "200" },
    { image: "19", delayAnimatin: "300" },
    { image: "18", delayAnimatin: "400" },
    { image: "22", delayAnimatin: "500" },
  ];
  return (
    <ul className="d-flex align-items-center justify-content-center justify-content-lg-between">
      {socialContent.map((social, i) => (
        <li
          className="mt-20 ms-3 me-3"
          data-aos="fade-up"
          key={i}
          data-aos-delay={social.delayAnimatin}
        >
          <Image width={60} height={50} style={{width:'100%',height:'fit-content'}}     src={`/images/logo/${social.image}.png`} alt="social" />
        </li>
      ))}
    </ul>
  );
};

export default Social;
