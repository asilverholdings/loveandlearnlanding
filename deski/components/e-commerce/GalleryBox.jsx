'use client'
import Image from "next/image";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const GalleryBox = () => {
  const gridGallery = [
    {
      id: 1,
      img: "/images/media/img_126.jpg",
    },
    {
      id: 2,
      img: "/images/media/img_127.jpg",
    },
    {
      id: 3,
      img: "/images/media/img_128.jpg",
    },
    {
      id: 4,
      img: "/images/media/img_129.jpg",
    },
  ];
  return (
    <Gallery>
      <div className="row">
        {gridGallery.map((val) => (
          <div className="col-lg-3 col-6" key={val.id}>
            <div className="fancybox d-block w-100 mt-20">
              <Item
                original={val.img}
                thumbnail={val.img}
                width={400}
                height={394}
              >
                {({ ref, open }) => (
                  <div className="gallery-link">
                    <Image width={400} height={330} style={{width:'100%',height:'fit-content'}}    
                      src={val.img}
                      alt="Trend Ui Gallery"
                      className="w-100"
                      role="button"
                      ref={ref}
                      onClick={open}
                    />
                  </div>
                )}
              </Item>
            </div>
          </div>
        ))}
      </div>
    </Gallery>
  );
};

export default GalleryBox;
