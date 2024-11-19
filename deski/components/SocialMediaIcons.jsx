"use client";
import React from "react";
import socialContent from "@/data/socialMediaData";

const SocialMediaIcons = ({ className = "" }) => {
  return (
    <ul className="social-icons d-flex justify-content-center">
  {socialContent.map((val, i) => (
    <li key={i}>
      <a href={val.link} target="_blank" rel="noreferrer">
        <i className={`fa ${val.icon} fa-${val.size}`}></i>
      </a>
    </li>
  ))}
</ul>

  );
};

export default SocialMediaIcons;
