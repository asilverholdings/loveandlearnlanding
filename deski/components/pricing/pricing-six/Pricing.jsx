'use client'

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingMonthly from "./PricingMonthly";
import PricingYearly from "./PricingYearly";

const Pricing = () => {
  return (
    <Tabs>
      <TabList className="nav nav-tabs justify-content-center pricing-nav-four">
        <Tab>Monthly</Tab>
        <Tab>Yearly</Tab>
      </TabList>

      <div className="pricing-table-area-six">
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
