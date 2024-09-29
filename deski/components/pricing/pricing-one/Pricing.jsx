
'use client'

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingMonthly from "./PricingMonthly";
import PricingYearly from "./PricingYearly";

const Pricing = () => {
  return (
    <div>
      <Tabs>
        <TabList className="nav nav-tabs justify-content-center pricing-nav-two pricing-nav-two-custom">
          <Tab>Monthly</Tab>
          <Tab>Yearly</Tab>
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
    </div>
  );
};

export default Pricing;
