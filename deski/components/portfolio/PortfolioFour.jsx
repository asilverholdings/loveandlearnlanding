
'use client'


import React, { useState  , useEffect} from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import { AllPortfolioItem } from "@/data/portfolios";
import Image from "next/image";
const TabListContent = ["All", "Development", "Plugin", "Design", "Branding"];



const PortfolioFour = () => {

  const [currentCategory, setCurrentCategory] = useState('All')
  const [fitteredItems, setFitteredItems] = useState([])
  useEffect(() => {
    if (currentCategory ==  'All') {
      setFitteredItems(AllPortfolioItem)
      
    } else {
      setFitteredItems(
      AllPortfolioItem.filter(elm=>elm.meta.split(' ').join('').split(',').includes(currentCategory)))
      
    }
    
   
  
  }, [currentCategory])
  
  return (
    <Gallery>
      <Tabs className="portfolio-container">
        <div className="controls po-control-one text-center mb-90 md-mb-50 mt-90 md-mt-60">
          <TabList className="d-flex flex-wrap justify-content-center">
            {TabListContent.map((tab, i) => (
              <Tab onClick={()=>setCurrentCategory(tab)}  key={i}>
                <button  type="button" className="control">
                  {tab}
                </button>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End pc-control-one */}

        <div>
          <div className="mixitUp-container  gutter-space-one d-flex flex-wrap">
            {fitteredItems.map((val, i) => (
              <div
                className="mix"
                key={i}
                data-aos="fade-right"
                data-aos-delay={val.dalayAnimation}
              >
                <div className="portfolio-block-two position-relative">
                  <div className="d-flex align-items-center justify-content-center">
                    <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}    
                      src={val.img}
                      alt={val.meta}
                      className="w-100 h-100 tran4s img-meta"
                    />
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={407}
                      height={496}
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
                      <Link     href={`/portfolios/${val.id}`}>{val.title}</Link>
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
        </div>
        
      </Tabs>
    </Gallery>
  );
};

export default PortfolioFour;
