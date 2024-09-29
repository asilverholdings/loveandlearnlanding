'use client'



import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "13",
    meta: "Projects",
    colorClass: "color-one",
  },
  {
    startCount: "0",
    endCount: "3",
    meta: "Workers",
    colorClass: "color-two",
  },
  {
    startCount: "0",
    endCount: "123",
    meta: "Offices",
    colorClass: "color-three",
  },
];

const CounterOne = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="counter-info-classic">
      {counterUpContent.map((val, i) => (
        <div className={`counter-box-one ${val.colorClass}`} key={i}>
          <h2 className="number font-rubik">
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
            k
          </h2>
          <p className="font-rubik">{val.meta}</p>
        </div>
      ))}

      <div className="bubble-one"></div>
      <div className="bubble-two"></div>
      <div className="bubble-three"></div>
      <div className="bubble-four"></div>
      <div className="bubble-five"></div>
      <div className="bubble-six"></div>
      <div className="bubble-seven"></div>
      <Image width="242" height="387" src="/images/shape/8.svg" alt="image" className="cs-screen dot-shape" />
    </div>
  );
};

export default CounterOne;
