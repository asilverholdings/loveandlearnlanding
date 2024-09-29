
'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { All } from "@/data/team";



const TeamThree = () => {

  const TabListContent = ["All", "Leadership", "Designer", "Developer", "Marketing"];
  const [currentCategory, setCurrentCategory] = useState('All')
  const [fitteredItems, setFitteredItems] = useState([])
  useEffect(() => {
    if (currentCategory ==  'All') {
      setFitteredItems(All)
      
    } else {
      setFitteredItems(All.filter(elm=>elm.category == currentCategory))
      
    }
    
   
  
  }, [currentCategory])
  return (
    <>
      <Tabs>
        <TabList className="controls d-flex align-items-center justify-content-center mb-100 md-mb-60">
        {TabListContent.map((tab, i) => (
              <Tab onClick={()=>setCurrentCategory(tab)}  key={i}>
                <button  type="button" className="control">
                  {tab}
                </button>
              </Tab>
            ))}
        </TabList>
        {/* End .Tablist */}
        <div>
          <div className="mixitUp-container">
            {fitteredItems.map((item, i) => (
              <Link     href={`/teams/${item.id}`} className="mix" key={i}>
                <div className="team-member">
                  <Image width={181} height={181}   src={`/images/media/${item.img}.png`} alt="media" />
                  <h4>{item.title}</h4>
                  <strong>{item.designation}</strong>
                </div>
                {/* /.team-member */}
              </Link>
            ))}

            <div className="gap"></div>
            <div className="gap"></div>
            <div className="gap"></div>
          </div>
          {/* /.mixitUp-container */}
        </div>
    
      </Tabs>
    </>
  );
};

export default TeamThree;
