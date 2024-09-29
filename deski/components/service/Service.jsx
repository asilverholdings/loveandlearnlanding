import React from "react";
import Link from "next/link";
import { serviceContent } from "@/data/service";
import Image from "next/image";

const Service = () => {
  return (
    <div className="row">
      {serviceContent.map((val, i) => (
        <div className="col-lg-4 col-md-6" key={i}>
          <div className="block-style-thirtyFour">
            <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}    
              src={`/images/gallery/${val.img}.jpg`}
              alt="gallery"
              className="w-100 tran5s"
            />
            <div className="hover-content">
              <h4 className="font-gordita">
                <Link     href={`/services/${val.id}`}>
                  {" "}
                  {val.titleTextOne} <br /> {val.TitleTextTwo}
                </Link>
              </h4>

              <Link     href={`/services/${val.id}`} className="arrow">
                <i className="flaticon-right-arrow-1"></i>{" "}
              </Link>
            </div>
            {/* <!-- /.hover-content --> */}
          </div>
          {/* <!-- /.block-style-thirtyFour --> */}
        </div>
      ))}
    </div>
  );
};

export default Service;
