'use client'
import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ProductTabContent = () => {
  return (
    <div className="product-review-tab mt-150 lg-mt-100">
      <Tabs>
        <TabList className="nav nav-tabs">
          <Tab className="nav-item">
            <button className="nav-link">Description</button>
          </Tab>
          <Tab className="nav-item">
            <button className="nav-link ">Technical Info</button>
          </Tab>
          <Tab className="nav-item">
            <button className="nav-link "> Feedback</button>
          </Tab>
        </TabList>

        <div className="tab-content mt-40 lg-mt-20">
          <TabPanel>
            <div className="row gx-5">
              <div className="col-xl-6">
                <h5>Specifications:</h5>
                <p>
                  One touch of a red-hot stove is usually all we need to avoid
                  that . The same is true as we experience in emotional
                  sensation of stress from our first instances of social
                  rejection ridicule.
                </p>
              </div>
              <div className="col-xl-6">
                <h5>Check product main features:</h5>
                <ul className="style-none product-feature">
                  <li>
                    Lorem ipsum best lightweight bra cool rejection avoid text
                  </li>
                  <li>Lightweight bras cool rejection quickly quis.</li>
                  <li>
                    We quickly learn to fear and automatically avoid potentially
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row gx-5">
              <div className="col-xl-6">
                <h5>Check product main features:</h5>
                <ul className="style-none product-feature">
                  <li>
                    Lorem ipsum best lightweight bra cool rejection avoid text
                  </li>
                  <li>Lightweight bras cool rejection quickly quis.</li>
                  <li>
                    We quickly learn to fear and automatically avoid potentially
                  </li>
                </ul>
              </div>
              <div className="col-xl-6">
                <h5>Specifications:</h5>
                <p>
                  One touch of a red-hot stove is usually all we need to avoid
                  that . The same is true as we experience in emotional
                  sensation of stress from our first instances of social
                  rejection ridicule.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="user-comment-area">
              <div className="single-comment d-flex align-items-top">
                <Image width={60} height={60} style={{height:'fit-content'}}    
                  src="/images/shop/avatar_01.jpg"
                  alt="image"
                  className="user-img"
                />
                <div className="user-comment-data">
                  <h6 className="name">Rashed ka.</h6>
                  <ul className="style-none d-flex rating">
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </li>
                  </ul>
                  <p>
                    One touch of a red-hot stove is usually all we need to avoid
                    that kind of discomfort in future. The same true we
                    experience the emotional sensation.
                  </p>
                </div>
                {/* <!-- /.user-comment-data --> */}
              </div>
              {/* <!-- /.single-comment --> */}
              <div className="single-comment d-flex align-items-top">
                <Image width={60} height={60} style={{height:'fit-content'}}    
                  src="/images/shop/avatar_02.jpg"
                  alt="image"
                  className="user-img"
                />
                <div className="user-comment-data">
                  <h6 className="name">Zubayer hasan</h6>
                  <ul className="style-none d-flex rating">
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </li>
                  </ul>
                  <p>
                    One touch of a red-hot stove is usually all we need to avoid
                    that kind of discomfort in future. The same true we
                    experience the emotional sensation.
                  </p>
                </div>
                {/* <!-- /.user-comment-data --> */}
              </div>
              {/* <!-- /.single-comment --> */}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ProductTabContent;
