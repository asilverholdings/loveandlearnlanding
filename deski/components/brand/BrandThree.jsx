import React from "react";
import Image from "next/image";
const BrandImages = [
  "logo-32",
  "logo-33",
  "logo-34",
  "logo-35",
  "logo-36",
  "logo-37",
  "logo-38",
];

const BrandThree = () => {
  return (
    <>
      {BrandImages.map((val, i) => (
        <div
          className="logo d-flex align-items-center justify-content-center"
          key={i}
          
        >
          <Image width={130} height={82} style={{maxHeight:'50%',objectFit:'contain'}} src={`/images/logo/${val}.png`} alt="logo" />
        </div>
      ))}
    </>
  );
};

export default BrandThree;
