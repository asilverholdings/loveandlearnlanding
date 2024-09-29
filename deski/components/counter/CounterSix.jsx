'use client'



import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "13",
    endPointText: "k",
    meta: "Job done successfully",
    animationDelay: "0",
    bgColor: "#25E5DA",
  },
  {
    startCount: "0",
    endCount: "20",
    endPointText: "million",
    meta: "3,280 avg rating",
    animationDelay: "100",
    bgColor: "#FF36AF",
  },
  {
    startCount: "0",
    endCount: "3000",
    endPointText: "+",
    meta: "Using Deski",
    animationDelay: "200",
    bgColor: "#FFB13A",
  },
];

const CounterSix = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="row justify-content-center">
      {counterUpContent.map((val, i) => (
        <div
          className="col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDelay}
          key={i}
        >
          <div className="counter-box-five text-center mb-65">
            <div className="dot" style={{ background: val.bgColor }}></div>
            <h2 className="number font-gordita">
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
                </CountUp>
              </span>
              {val.endPointText}
            </h2>
            <p>{val.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterSix;
