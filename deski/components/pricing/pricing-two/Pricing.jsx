
'use client'


import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingMonthly from "./PricingMonthly";
import PricingYearly from "./PricingYearly";

const Pricing = () => {
  return (
    <Tabs>
      <TabList className="nav nav-tabs pricing-nav-one pricing-custom-nav-one mb-0">
        <div className="d-flex flex-wrap justify-content-center mb-1">
          <Tab>Monthly</Tab>
          <Tab>Yearly</Tab>
        </div>
        <div className="offer-text font-rubik mt-3">
          Save 30% on annual plan
        </div>
      </TabList>

      <div className="tab-content-wrpper">
        <TabPanel>
          <PricingMonthly />
        </TabPanel>
        {/* End Pricing Month */}
        <TabPanel>
          <PricingYearly />
        </TabPanel>
        {/* End Pricing Year */}
      </div>
    </Tabs>
  );
};

export default Pricing;
