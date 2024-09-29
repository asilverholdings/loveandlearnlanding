'use client'

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
  {
    title: "How the affiliate programe works?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
    expand: "a",
  },
  {
    title: "How delete my account?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
    expand: "b",
  },
  {
    title: "How to invite people with refferel link?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
    expand: "c",
  },
  {
    title: "Is ios app available for the iphone?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
    expand: "d",
  },
];
const FaqContentTwo = [
  {
    title: " Do you recommend Pay as you go?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
    expand: "e",
  },
  {
    title: " Can I pass the fees on to my customers?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
    expand: "f",
  },
  {
    title: "How to create Signup?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
    expand: "g",
  },
  {
    title: "What's the last dat of this offer?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
    expand: "h",
  },
];

const FaqClassic = () => {
  return (
    <div className="accordion-style-four">
      <div className="faq-wrraper">
        <div className="row">
          <div className="col-lg-6">
            <Accordion allowZeroExpanded>
              <div className="row">
                {FaqContent.map((item, i) => (
                  <div className="col-lg-12" key={i}>
                    <AccordionItem className="card">
                      <AccordionItemHeading className="card-header">
                        <AccordionItemButton>
                          <h5 className="mb-0">
                            <button className="btn btn-link">
                              {item.title}
                            </button>{" "}
                          </h5>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      {/* Accordion Heading */}
                      <AccordionItemPanel className="card-body fadeInUp">
                        <p>{item.desc}</p>
                      </AccordionItemPanel>
                      {/* Accordion Body Content */}
                    </AccordionItem>
                  </div>
                ))}
              </div>
            </Accordion>
          </div>
          {/* End.col */}

          <div className="col-lg-6">
            <Accordion allowZeroExpanded>
              <div className="row">
                {FaqContentTwo.map((item, i) => (
                  <div className="col-lg-12" key={i}>
                    <AccordionItem className="card">
                      <AccordionItemHeading className="card-header">
                        <AccordionItemButton>
                          <h5 className="mb-0">
                            <button className="btn btn-link">
                              {item.title}
                            </button>{" "}
                          </h5>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      {/* Accordion Heading */}
                      <AccordionItemPanel className="card-body fadeInUp">
                        <p>{item.desc}</p>
                      </AccordionItemPanel>
                      {/* Accordion Body Content */}
                    </AccordionItem>
                  </div>
                ))}
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqClassic;
