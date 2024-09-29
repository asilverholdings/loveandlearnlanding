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
  {
    title: "  How to create customer panel?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
    expand: "e",
  },
];

const FaqClassic = () => {
  return (
    <div className="accordion-style-four">
      <div className="faq-wrraper">
        <Accordion preExpanded={["b"]} allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem className="card" key={i} uuid={item.expand}>
              <AccordionItemHeading className="card-header">
                <AccordionItemButton>
                  <h5 className="mb-0">
                    <button className="btn btn-link">{item.title}</button>{" "}
                  </h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel className="card-body fadeInUp">
                <p>{item.desc}</p>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqClassic;
