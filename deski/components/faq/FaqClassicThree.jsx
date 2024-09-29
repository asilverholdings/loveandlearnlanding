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
    title: "How does the free trial work?",
    desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
    expand: "a",
  },
  {
    title: "How do you different criteria in your process?",
    desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
    expand: "b",
  },
  {
    title: "What does First Round look for in an idea?",
    desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
    expand: "c",
  },
  {
    title: "What do you look for in a founding team?",
    desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
    expand: "d",
  },
  {
    title: "Do you recommend Pay as you go or Pre pay?",
    desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
    expand: "e",
  },
  {
    title: "Can I pass the fees on to my customers?",
    desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
    expand: "f",
  },
  {
    title: " How do I get paid for the tickets sold?",
    desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
    expand: "g",
  },
];

const FaqClassicThree = () => {
  return (
    <div className="accordion-style-five md-mt-60">
      <div className="faq-wrraper">
        <Accordion allowZeroExpanded>
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

export default FaqClassicThree;
