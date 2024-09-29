

'use client'


import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import { AllPortfolioTwo } from "@/data/portfolios";
const TabListContent = ["All", "Development", "Plugin", "Design", "Branding"];
import Image from "next/image";


const PortfolioSix = () => {
  const [currentCategory, setCurrentCategory] = useState('All')
  const [fitteredItems, setFitteredItems] = useState([])
  useEffect(() => {
    if (currentCategory ==  'All') {
      setFitteredItems(AllPortfolioTwo)
      
    } else {
      setFitteredItems(AllPortfolioTwo.filter(elm=>elm.meta.split(' ').join('').split(',').includes(currentCategory)))
      
    }
    
   
  
  }, [currentCategory])
  return (
    <div className="portfolio-container">
      <Tabs className="controls po-control-two text-center mb-90 md-mb-50 mt-90 md-mt-60">
        <TabList className="d-flex flex-wrap justify-content-center">
        {TabListContent.map((tab, i) => (
              <Tab onClick={()=>setCurrentCategory(tab)} key={i}>
                <button type="button" className="control">
                  {tab}
                </button>
              </Tab>
            ))}
        </TabList>
      </Tabs>
      {/* End pc-control-one */}

      <Gallery>
        <Tab>
          <div className="mixitUp-container  gutter-space-one d-flex flex-wrap">
            {fitteredItems.map((val, i) => (
              <div
                className="mix"
                key={i}
                data-aos="fade-right"
                data-aos-delay={val.dalayAnimation}
              >
                <div className="portfolio-block-two position-relative">
                  <div className="d-flex align-vals-center justify-content-center">
                    <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}    
                      src={val.img}
                      alt={val.meta}
                      className="w-100 h-100 tran4s img-meta"
                    />
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={1050}
                      height={525}
                    >
                      {({ ref, open }) => (
                        <div
                          className="fancybox"
                          role="button"
                          ref={ref}
                          onClick={open}
                        >
                          <i
                            className="fa fa-arrows-alt"
                            aria-hidden="true"
                          ></i>
                        </div>
                      )}
                    </Item>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link       href={`/portfolios/${val.id}`}>{val.title}</Link>
                    </h3>
                    <div className="tag">{val.meta}</div>
                  </div>
                  {/* /.hover-content */}
                </div>
                {/* /.portfolio-block-two */}
              </div>
            ))}
          </div>
          {/* single mixitUp-container */}
        </Tab>
     
        {/* End branding */}
      </Gallery>
    </div>
  );
};

export default PortfolioSix;
