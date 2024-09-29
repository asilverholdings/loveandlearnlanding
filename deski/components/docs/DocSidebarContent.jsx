
'use client'

import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import HeaderThree from "../header/HeaderThree";

const FaqContent = [
  {
    title: " Getting Started",
    sidebarContent: [
      {
        itemName: "Quick start",
        activeClass: "",
        link: "",
      },
      {
        itemName: " Installation",
        activeClass: "active",
        link: "",
      },
      {
        itemName: "Site Preparation",
        activeClass: "",
        link: "",
      },
      {
        itemName: "Manual Installation",
        activeClass: "",
        link: "",
      },
      {
        itemName: "Publishing your site",
        activeClass: "",
        link: "",
      },
      {
        itemName: "Deski",
        activeClass: "",
        link: "",
      },
    ],
    expand: "a",
  },
  {
    title: " Customization",
    sidebarContent: [
      {
        itemName: "Theme color",
        activeClass: "",
        link: "",
      },
      {
        itemName: " Header",
        activeClass: "",
        link: "",
      },
      {
        itemName: "Blog widget",
        activeClass: "",
        link: "",
      },
      {
        itemName: "Theme Footer",
        activeClass: "",
        link: "",
      },
    ],
    expand: "b",
  },

  {
    title: "Layout",
    sidebarContent: [
      {
        itemName: "Box Layout",
        activeClass: "",
        link: "",
      },
      {
        itemName: "Full width Layout",
        activeClass: "",
        link: "",
      },
    ],
    expand: "c",
  },

  {
    title: "Table of Content",
    sidebarContent: [
      {
        itemName: "HTML Structure",
        activeClass: "",
        link: "",
      },
      {
        itemName: "Favicon Settings",
        activeClass: "",
        link: "",
      },
      {
        itemName: "Logo Settings",
        activeClass: "",
        link: "",
      },
      {
        itemName: "CSS Structure",
        activeClass: "",
        link: "",
      },
    ],
    expand: "d",
  },

  {
    title: "API",
    sidebarContent: [
      {
        itemName: "Getting started",
        activeClass: "",
        link: "",
      },
      {
        itemName: " Subscriptions",
        activeClass: "",
        link: "",
      },
      {
        itemName: "Invoices",
        activeClass: "",
        link: "",
      },
      {
        itemName: "Refunds",
        activeClass: "",
        link: "",
      },
    ],
    expand: "e",
  },
];

const DocSidebarContent = () => {
  return (
    <div className="accordion-style-two doc-sidebar-menu">
      
      {/* End Page SEO Content */}
      <HeaderThree />
      {/* End Header */}

      <div className="faq-wrraper ">
        <Accordion preExpanded={["a"]} allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem className="card" key={i} uuid={item.expand}>
              <AccordionItemHeading className="card-header">
                <AccordionItemButton>
                  <h4 className="mb-0">
                    <button className="btn btn-link">{item.title}</button>{" "}
                  </h4>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel className="card-body fadeInUp">
                <ul className="sub-menu">
                  {item.sidebarContent.map((val, i) => (
                    <li key={i}>
                      <a className={val.activeClass} href={val.link}>
                        {val.itemName}
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default DocSidebarContent;
