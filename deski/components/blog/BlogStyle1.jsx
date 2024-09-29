import React from "react";
import Link from "next/link";
import { BlogContent } from "@/data/blogs";
import Image from "next/image";


const BlogStyle1 = () => {
  return (
    <>
      {BlogContent.map((item, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
          data-aos-delay={item.dealyAnimation}
        >
          <div className="post-meta">
            <Image width={321} height={241} style={{width:'100%',height:'fit-content'}}    
              src={`/images/blog/${item.img}`}
              alt="media"
              className="image-meta"
            />
            <div className="tag">{item.tag}</div>
            <h3>
              <Link     href={`/blogs/${item.id}`} className="title">
                {item.title}
              </Link>
            </h3>
            <Link
                  href={`/blogs/${item.id}`}
              className="read-more d-flex justify-content-between align-items-center"
            >
              <span>Read More</span>
              <i className="flaticon-right-arrow"></i>
            </Link>
          </div>
          {/* /.post-meta */}
        </div>
      ))}
    </>
  );
};

export default BlogStyle1;
