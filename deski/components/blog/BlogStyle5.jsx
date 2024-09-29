import React from "react";
import Link from "next/link";
import { BlogContentSix } from "@/data/blogs";
import Image from "next/image";


const BlogStyle5 = () => {
  return (
    <>
      {BlogContentSix.map((val, i) => (
        <div
          className="col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDealy}
          key={i}
        >
          <div className="feature-article-meta">
            <div className="img-meta">
              <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}     src={`/images/blog/${val.img}`} alt="media" />
            </div>
            <div className="post-meta">
              <h3>
                <Link     href={`/blogs/${val.id}`}>{val.title}</Link>
              </h3>
              <div className="author_info">
                {val.author}. <span>{val.designation}</span>
              </div>
            </div>
          </div>
          {/* /.feature-article-meta */}
        </div>
      ))}
    </>
  );
};

export default BlogStyle5;
