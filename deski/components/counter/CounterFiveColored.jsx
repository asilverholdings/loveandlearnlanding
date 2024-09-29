'use client'



import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "1200",
    endPointText: "+",
    countMeta: "Positive Review",
    meta: "A place to think and track ideas",
    animationDelay: "0",
  },
  {
    startCount: "0",
    endCount: "200",
    endPointText: "+",
    countMeta: "Branches",
    meta: "A home for your iqu team, best",
    animationDelay: "100",
  },
  {
    startCount: "0",
    endCount: "3",
    endPointText: "k+",
    countMeta: "Work Done",
    meta: "Beautiful docs for your APIs, Products",
    animationDelay: "200",
  },
];

const CounterFiveColored = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="row justify-content-center">
      {counterUpContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDelay}
          key={i}
        >
          <div className="counter-box-two">
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
                </CountUp>
              </span>
              {val.endPointText}
            </h2>
            <em>{val.countMeta}</em>
            <p className="font-rubik">{val.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterFiveColored;
