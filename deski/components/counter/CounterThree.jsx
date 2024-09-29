'use client'



import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";
const counterUpContent = [
  {
    icon: "23",
    startCount: "0",
    endCount: "13",
    meta: "Ticket Sold",
  },
  {
    icon: "24",
    startCount: "0",
    endCount: "3000",
    meta: "Event organisers",
  },
  {
    icon: "25",
    startCount: "0",
    endCount: "134",
    meta: "Countries",
  },
];

const CounterThree = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="row justify-content-center">
      {counterUpContent.map((val, i) => (
        <div
          className="col-lg-4 col-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="counter-box-three">
            <div className="icon">
              <Image width={72} height={62} style={{objectFit:'contain'}}     src={`/images/icon/${val.icon}.svg`} alt="icon" />
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
            <p className="font-rubik">{val.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterThree;
