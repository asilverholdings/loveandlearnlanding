
'use client'

import Image from "next/image";
import React from "react";

const featureContent = [
  {
    delayAnimation: "0",
    colorOfBorder: "#FFCE22",
    icon: "112",
    title: "Green Screen",
    description: `Change your background and create special effects using the Green Screen tool.`,
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#8F6BF6",
    icon: "113",
    title: "Audio Mixer",
    description: `Adjust the audio of each individual track on your timeline lorem elit extract.`,
  },
  {
    delayAnimation: "0",
    colorOfBorder: "#FF5C5C",
    icon: "114",
    title: "Pan & Zoom",
    description: `Add panning and zooming movements to still footage.`,
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#63EAA9",
    icon: "115",
    title: "Advanced Text Editing",
    description: `Edit the color, size, font, and even animation of your text and titles.`,
  },
  {
    delayAnimation: "",
    colorOfBorder: "#5BE2FF",
    icon: "116",
    title: "Color Tuning",
    description: `Adjust the white balance and dynamic range of your clips & long videos.`,
  },
  {
    delayAnimation: "150",
    colorOfBorder: "#FF56EE",
    icon: "117",
    title: "3D Lut",
    description: `Choose from a selection of color grading presets inspired by popular movies.`,
  },
];

const FancyFeatureNinteen = () => {
  return (
    <div className="row">
      {featureContent.map((val, i) => (
        <div
          className="col-lg-6"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div
            className="block-style-nineteen"
            style={{ borderLeftColor: val.colorOfBorder }}
          >
            <div className="d-flex align-items-start">
              <Image width={57} height={57} style={{objectFit:'contain'}}     
                src={`/images/icon/${val.icon}.svg`}
                alt="icon"
                className="icon"
              />
              <div className="text">
                <h4>{val.title}</h4>
                <p>{val.description}</p>
              </div>
            </div>
          </div>
          {/* /.block-style-nineteen */}
        </div>
      ))}

      {/* End .col */}
    </div>
  );
};

export default FancyFeatureNinteen;
