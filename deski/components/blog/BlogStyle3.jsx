import React from "react";
import Link from "next/link";
import { BlogContentThree } from "@/data/blogs";
import Image from "next/image";


const BlogStyle3 = () => {
  return (
    <>
      {BlogContentThree.map((item, i) => (
        <div className="post-meta" key={i}>
          <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}    
            src={`/images/blog/${item.img}`}
            alt="media"
            className="image-meta"
          />
          <div className="post">
            <div className="date">{item.date}</div>
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
              <span>Continue Reading</span>
              <i className="flaticon-right-arrow"></i>
            </Link>
          </div>
          {/* End post */}
        </div>
        // /.post-meta
      ))}
    </>
  );
};

export default BlogStyle3;
