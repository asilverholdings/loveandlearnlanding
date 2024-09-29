'use client'

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AboutTabs = () => {
  return (
    <>
      <Tabs>
        <TabList className="nav nav-tabs md-mt-50">
          <Tab className="nav-link font-slab">Our Story</Tab>
          <Tab className="nav-link font-slab">Our Mission</Tab>
          <Tab className="nav-link font-slab">Our Vision</Tab>
        </TabList>
        {/* End TabList */}

        <div className="tab-content mt-20">
          <TabPanel>
            <p className="font-rubik">
              Lorem ipsum dolor sit amet, consecteur adipiscng elit sed do
              eiusmod tempor non sunt
            </p>
            <p className="font-rubik">
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore nulla
              pariaturExcepteur sint occaecat cu proident, sunter in culpa qui
              officia deserunt mollit .
            </p>
          </TabPanel>
          <TabPanel>
            <p className="font-rubik">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <p className="font-rubik">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="font-rubik">
              There are many variations of passages of Lorem Ipsum available,
              but the majority,
            </p>
            <p className="font-rubik">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>
          </TabPanel>
        </div>
        {/* End TabContent */}
      </Tabs>
    </>
  );
};

export default AboutTabs;
