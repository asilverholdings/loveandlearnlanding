import React from "react";
import Link from "next/link";
import BlogSidebarForm from "../form/BlogSidebarForm2";
import { recentNews } from "@/data/blogs";

const categroies = [
  {
    catName: "Web Design",
    numberOfPOst: "09",
  },
  {
    catName: "Graphics",
    numberOfPOst: "13",
  },
  {
    catName: "Web Development",
    numberOfPOst: "05",
  },
  {
    catName: "IOS/Android Development",
    numberOfPOst: "24",
  },
  {
    catName: "Others",
    numberOfPOst: "08",
  },
];


const blogKeyword = ["Ideas", "Education", "Design", "Development", "Branding"];

const BlogSidebarClassic = () => {
  return (
    <>
      <div className="blog-sidebar-one">
        <div className="sidebar-search-form mb-85 sm-mb-60">
          <BlogSidebarForm />
        </div>
        {/* /.sidebar-search-form */}

        <div className="sidebar-categories mb-85 sm-mb-60">
          <h4 className="sidebar-title">Categories</h4>
          <ul>
            {categroies.map((cat, i) => (
              <li key={i}>
                <Link     href="/blogs/1">
                  {cat.catName} <span>({cat.numberOfPOst})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* /.sidebar-categories */}

        <div className="sidebar-recent-news mb-85 sm-mb-60">
          <h4 className="sidebar-title">Recent News</h4>
          <ul>
            {recentNews.map((news, i) => (
              <li key={i}>
                <Link     href={`/blogs/${news.id}`}>
                  <span className="title">{news.title}</span>
                  <span className="date">{news.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* /.sidebar-recent-news */}

        <div className="sidebar-keyword">
          <h4 className="sidebar-title">Keywords</h4>
          <ul className="cleafix">
            {blogKeyword.map((val, i) => (
              <li key={i}>
                <Link     href="/blogs/1"> {val}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* /.sidebar-keyword */}
      </div>
      {/* /.blog-sidebar-one  */}
    </>
  );
};

export default BlogSidebarClassic;
