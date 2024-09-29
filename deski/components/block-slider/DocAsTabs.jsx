'use client'

import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const DocAsTabs = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>
            <div className="d-flex align-items-center">
              <Image  width="17" height="18" src="/images/icon/90.svg" alt="icon" />
              <p>Team Box</p>
            </div>
          </Tab>
          {/* End .d-felx */}
          <Tab>
            <div className="d-flex align-items-center ">
              <Image  width="17" height="18" src="/images/icon/91.svg" alt="icon" />
              <p>Project & Task</p>
            </div>
          </Tab>
          {/* End .d-felx */}
          <Tab>
            <div className="d-flex align-items-center">
              <Image width={18} height={18}      src="/images/icon/92.svg" alt="icon" />
              <p>Note & Docs</p>
            </div>
          </Tab>
          {/* End .d-felx */}
        </TabList>

        <div className="mt-50 sm-mt-30">
          <TabPanel>
            <Image width={1155} height={685} style={{height:'fit-content'}}    
              src="/images/assets/screen_11.png"
              alt="screen"
              className="m-auto"
              data-aos="fade"
              data-aos-duration="1200"
            />
          </TabPanel>
          <TabPanel>
            <Image width={1155} height={685} style={{height:'fit-content'}}    
              src="/images/assets/screen_15.png"
              alt="screen"
              className="m-auto"
              data-aos="fade"
              data-aos-duration="1200"
            />
          </TabPanel>
          <TabPanel>
            <Image width={1155} height={685} style={{height:'fit-content'}} 
              src="/images/assets/screen_16.png"
              alt="screen"
              className="m-auto"
              data-aos="fade"
              data-aos-duration="1200"
            />
          </TabPanel>
        </div>
        {/* /.pricing-table-area-six */}
      </Tabs>
    </>
  );
};

export default DocAsTabs;
