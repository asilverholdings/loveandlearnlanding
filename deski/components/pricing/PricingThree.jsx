import Image from "next/image";
import React from "react";

const PricingContent = [
  {
    title: "Free Event",
    price: "0",
    priceMeta: "per user/month",
    packageName: "pc1",
    skewClass: "skew-right",
    priceList: [
      {
        list: "60-day chat history",
        listClass: "",
      },
      {
        list: "Basic widget customization",
        listClass: "",
      },
      {
        list: "Ticketing system",
        listClass: "disable",
      },
      {
        list: "Data security",
        listClass: "disable",
      },
    ],
    animatinDelay: "0",
  },
  {
    title: "Pre Day",
    price: "0.32",
    priceMeta: "per user/month",
    packageName: "pc2",
    skewClass: "skew-left",
    priceList: [
      {
        list: "60-day chat history",
        listClass: "",
      },
      {
        list: "Basic widget customization",
        listClass: "",
      },
      {
        list: "Ticketing system",
        listClass: "",
      },
      {
        list: "Data security",
        listClass: "disable",
      },
    ],
    animatinDelay: "100",
  },
  {
    title: "Pay As You Go",
    price: "0.65",
    priceMeta: "per user/month",
    packageName: "pc3",
    skewClass: "skew-right",
    priceList: [
      {
        list: "60-day chat history",
        listClass: "",
      },
      {
        list: "Basic widget customization",
        listClass: "",
      },
      {
        list: "Ticketing system",
        listClass: "",
      },
      {
        list: "Data security",
        listClass: "",
      },
    ],
    animatinDelay: "200",
  },
];

const PricingThree = () => {
  return (
    <div className="row justify-content-center">
      {PricingContent.map((item, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animatinDelay}
        >
          <div className={`pr-table-wrapper ${item.skewClass}`}>
            <div className={`pack-name font-slab ${item.packageName}`}>
              <span>{item.title}</span>
            </div>
            <div className="price font-slab">${item.price}</div>
            <p className="user-condition">{item.priceMeta}</p>
            <Image width="321" height="4" src="/images/shape/114.svg" alt="shape" className="line" />
            <ul>
              {item.priceList.map((val, i) => (
                <li className={val.listClass} key={i}>
                  {val.list}
                </li>
              ))}
            </ul>
            <a href="#" className="subscribe-btn font-rubik">
              Subscribe Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingThree;
