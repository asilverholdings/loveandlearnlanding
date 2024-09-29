'use client'
import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductGalleryContent from "./ProductGalleryContent";
import { Gallery, Item } from "react-photoswipe-gallery";

const ProductGallery = ({data}) => {
  return (
    <Gallery>
      <Tabs>
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className=" product-img-tab-content h-100 " style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
              <TabPanel>
                <div className="h-100">
                  <Item
                    original= {`/images/shop/${data.img}.png`}
                    thumbnail= {`/images/shop/${data.img}.png`}
                    width={465}
                    height={609}
                  >
                    {({ ref, open }) => (
                      <div className="fancybox h-100 w-100 d-flex align-items-center justify-content-center">
                        <Image  width={465} height={610} style={{height:'fit-content'}}    
                          src= {`/images/shop/${data.img}.png`}
                          alt="Gallery"
                          className="m-auto"
                          role="button"
                          ref={ref}
                          onClick={open}
                        />
                      </div>
                    )}
                  </Item>
                </div>
              </TabPanel>
              {/* End tabpanel */}

              <TabPanel>
                <div className="h-100">
                  <Item
                    original="/images/shop/img_21.png"
                    thumbnail="/images/shop/img_21.png"
                    width={533}
                    height={611}
                  >
                    {({ ref, open }) => (
                      <div className="fancybox h-100 w-100 d-flex align-items-center justify-content-center">
                        <Image  width={465} height={610} style={{height:'fit-content'}}    
                          src="/images/shop/img_21.png"
                          alt="Gallery"
                          className="m-auto"
                          role="button"
                          ref={ref}
                          onClick={open}
                        />
                      </div>
                    )}
                  </Item>
                </div>
              </TabPanel>
              {/* End tabpanel */}

              <TabPanel>
                <div className="h-100">
                  <Item
                    original="/images/shop/img_22.png"
                    thumbnail="/images/shop/img_22.png"
                    width={395}
                    height={588}
                  >
                    {({ ref, open }) => (
                      <div className="fancybox h-100 w-100 d-flex align-items-center justify-content-center">
                        <Image  width={465} height={610} style={{height:'fit-content'}}    
                          src="/images/shop/img_22.png"
                          alt="Gallery"
                          className="m-auto"
                          role="button"
                          ref={ref}
                          onClick={open}
                        />
                      </div>
                    )}
                  </Item>
                </div>
              </TabPanel>
            </div>
          </div>
          {/* End larget gallery */}

          <div className="col-lg-1 order-lg-1">
            <TabList className="nav nav-tabs flex-lg-column product-img-tab">
              <Tab className="nav-item">
                <button className="nav-link">
                  <Image width={465} height={610} style={{height:'fit-content'}}    
                    src= {`/images/shop/${data.img}.png`}
                    alt="shop "
                    className="m-auto"
                  />
                </button>
              </Tab>
              <Tab className="nav-item">
                <button className="nav-link">
                  <Image  width={465} height={610} style={{height:'fit-content'}}    
                    src="/images/shop/img_18.png"
                    alt="shop "
                    className="m-auto"
                  />
                </button>
              </Tab>
              <Tab className="nav-item">
                <button className="nav-link">
                  <Image  width={465} height={610} style={{height:'fit-content'}}    
                    src="/images/shop/img_19.png"
                    alt="shop "
                    className="m-auto"
                  />
                </button>
              </Tab>
            </TabList>
          </div>
          {/* End thumb gallery */}

          <div className="col-lg-6 order-lg-3">
            <ProductGalleryContent data={data} />
          </div>
          {/* End product gallery content */}
        </div>
      </Tabs>
    </Gallery>
  );
};

export default ProductGallery;
