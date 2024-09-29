import React from "react";
import Link from "next/link";
import { BlogContentSeven } from "@/data/blogs";
import Image from "next/image";


const Blog = () => {
  return (
    <>
      {BlogContentSeven.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDealy}
          key={i}
        >
          <article className="post-meta mt-30">
            <figure className="post-img m0">
              <Link     href={`/blogs/${val.id}`} className="w-100 d-block">
                <Image width={990} height={890} style={{width:'100%',height:'fit-content'}}    
                  src={`/images/blog/${val.img}`}
                  alt="blog"
                  className="w-100 tran4s"
                />
              </Link>
            </figure>
            <div className="post-data">
              <h3 className="blog-title">
                <Link     href={`/blogs/${val.id}`}>{val.title}</Link>
              </h3>
              <Link     href={`/blogs/${val.id}`} className="read-btn tran3s">
                Continue Reading
              </Link>
            </div>
            {/* <!-- /.post-data --> */}
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
