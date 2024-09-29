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
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
  },
  {
    title: "How do you weigh different criteria in your process?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
  },
  {
    title: " What does First Round look for in an idea?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
  },
  {
    title: "	What do you look for in a founding team?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
  },
  {
    title: " Do you recommend Pay as you go or Pre pay?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
  },
  {
    title: " Can I pass the fees on to my customers?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
  },
  {
    title: "Roem ipsum dummy text here will some questions?",
    desc: `mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.`,
  },
  {
    title: " How do I get paid for the tickets sold?",
    desc: `As a dealer, you are as yet in charge of chargebacks as the vendor account is possessed by you. ChargeMonk causes you with the correct apparatuses to convey regularly &amp; impartunambiguously to keep away from chargebacks from your customers. Here are some extra resources on how to avoid chargebacks.`,
  },
  {
    title: "Do you invest in companies located outside of New York?",
    desc: `Yes, you will be able to at any time. It’s referred to as the "DBA name" ("Doing-Business-As"). Please contact your trader account provider/payment gateway to update the proper name.`,
  },
  {
    title: "  How do i pay fees?",
    desc: `Yes, you will be able to at any time. It’s referred to as the "DBA name" ("Doing-Business-As"). Please contact your trader account provider/payment gateway to update the proper name.`,
  },
];

const FaqThree = () => {
  return (
    <div className="accordion-style-three">
      <div className="faq-wrraper">
        <Accordion allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem
              className="card"
              key={i}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
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

export default FaqThree;
