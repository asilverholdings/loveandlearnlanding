import React from "react";
import Link from "next/link";
import { BlogContentTwo } from "@/data/blogs";
import Image from "next/image";


const BlogStyle2 = () => {
  return (
    <>
      {BlogContentTwo.map((item, i) => (
        <div className="post-meta" key={i}>
          <Image width={681} height={336} style={{height:'fit-content'}}    
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
          <p>{item.desc}</p>
          <Link
               href={`/blogs/${item.id}`}
            className="read-more d-flex justify-content-between align-items-center"
          >
            <span>Read More</span>
            <i className="flaticon-right-arrow"></i>
          </Link>
        </div>
        // /.post-meta
      ))}
    </>
  );
};

export default BlogStyle2;
