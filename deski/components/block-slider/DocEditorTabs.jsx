
'use client'

import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const tabList = [
  { iconOne: "105", iconTwo: "105-c" },
  { iconOne: "106", iconTwo: "106-c" },
  { iconOne: "107", iconTwo: "107-c" },
  { iconOne: "108", iconTwo: "108-c" },
  { iconOne: "109", iconTwo: "109-c" },
  { iconOne: "110", iconTwo: "110-c" },
  { iconOne: "111", iconTwo: "111-c" },
];

const tabListContent = [
  {
    img: "img_81",
    innerText: "Track Human faces",
    title: "Motation Tracking",
    description: `From its medieval origins to the digital earn everything
  there is to know about the ubi lorem ipsum passage.`,
  },
  {
    img: "img_92",
    innerText: "keyframing experience",
    title: "Keyframing",
    description: `From its medieval origins to the digital earn everything
    there is to know about the ubi lorem ipsum passage.`,
  },
  {
    img: "img_93",
    innerText: "Audio track down",
    title: "Audio Ducking",
    description: `From its medieval origins to the digital earn everything
    there is to know about the ubi lorem ipsum passage.`,
  },
  {
    img: "img_94",
    innerText: "Take the color",
    title: "Color Matching",
    description: `From its medieval origins to the digital earn everything
    there is to know about the ubi lorem ipsum passage.`,
  },
  {
    img: "img_95",
    innerText: "Edit videos at up to 4K",
    title: "4K Editing Support",
    description: `From its medieval origins to the digital earn everything
    there is to know about the ubi lorem ipsum passage.`,
  },
  {
    img: "img_96",
    innerText: "Remove unwanted noise",
    title: "Noise Removal",
    description: `From its medieval origins to the digital earn everything
    there is to know about the ubi lorem ipsum passage.`,
  },
  {
    img: "img_97",
    innerText: "Layer multiple video clips",
    title: "Picture in Picture (PIP)",
    description: `From its medieval origins to the digital earn everything
    there is to know about the ubi lorem ipsum passage.`,
  },
];

const DocEditorTabs = () => {
  return (
    <>
      <Tabs>
        <TabList>
          {tabList.map((img, i) => (
            <Tab key={i}>
              <div className="nav-link d-flex align-items-center justify-content-center">
                <Image width={55} height={55} style={{width:'100%',height:'fit-content'}}    
                  src={`/images/icon/${img.iconOne}.svg`}
                  alt="icon"
                  className="current tran3s"
                />
                <Image width={55} height={55} style={{objectFit:'contain'}}    
                  src={`/images/icon/${img.iconTwo}.svg`}
                  alt="icon"
                  className="hover tran3s"
                />
              </div>
            </Tab>
          ))}
        </TabList>

        <div className="mt-60 sm-mt-40 tab-content">
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="row no-gutters align-items-center">
                <div className="col-md-6">
                  <div className="img-holder">
                    <Image width={768} height={520} style={{height:'fit-content'}}    
                      src={`/images/media/${tabContent.img}.png`}
                      alt="media"
                    />
                    <div className="ripple-box d-flex align-items-center justify-content-center">
                      <p>{tabContent.innerText}</p>
                    </div>
                  </div>{" "}
                  {/* /.img-holder */}
                </div>
                <div className="col-md-6">
                  <div className="text-wrapper">
                    <h4>{tabContent.title}</h4>
                    <p>{tabContent.description}</p>
                  </div>{" "}
                  {/* /.text-wrapper */}
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
        {/* /.pricing-table-area-six */}
      </Tabs>
    </>
  );
};

export default DocEditorTabs;
