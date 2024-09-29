import React from "react";
import Image from "next/image";
const FancyBlock = () => {
  const fancyBlockCotent = [
    {
      id: 1,
      icon: "203",
      title: "Free Shipping",
      text: `Simplify the process to create proposals.`,
      delayAnim: "0",
    },
    {
      id: 2,
      icon: "204",
      title: "Free Return",
      text: `Return money within 7 days only!`,
      delayAnim: "100",
    },
    {
      id: 3,
      icon: "205",
      title: "Secured Payment",
      text: `We ensure secure payment with PEV`,
      delayAnim: "200",
    },
    {
      id: 4,
      icon: "206",
      title: "100% Safe",
      text: `We provide world best security system`,
      delayAnim: "300",
    },
  ];

  return (
    <>
      {fancyBlockCotent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="block-style-thirtyNine mt-40 text-center">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <Image width={30} height={30} style={{objectFit:'contain'}}     src={`/images/icon/${item.icon}.svg`} alt="icon" />
            </div>
            <h3>{item.title}</h3>
            <p className="ps-xl-3 pe-xl-3">{item.text}</p>
          </div>
          {/* <!-- /.block-style-thirtyNine --> */}
        </div>
      ))}
    </>
  );
};

export default FancyBlock;
