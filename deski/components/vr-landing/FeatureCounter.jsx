'use client'

import Image from "next/image";

import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    icon: "194",
    startCount: "0",
    endCount: "300",
    meta: "Focal Adjustment",
  },
  {
    icon: "195",
    startCount: "0",
    endCount: "108",
    meta: "Field of View",
  },
  {
    icon: "196",
    startCount: "0",
    endCount: "237",
    meta: "Weight",
  },
  {
    icon: "197",
    startCount: "0",
    endCount: "32",
    meta: "HD Lens Diameter",
  },
];

const FeatureCounter = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="counter-box-six text-center mt-40">
            <div className="icon d-flex align-items-end justify-content-center">
              <Image width={57} height={45} style={{objectFit:'contain'}}      src={`/images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h2 className="number">
              <span className="timer">
                {" "}
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={1}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>{" "}
              </span>{" "}
              m
            </h2>
            <p>{val.meta}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureCounter;
