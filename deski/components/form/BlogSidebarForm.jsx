'use client'


import Image from "next/image";
import React from "react";

const BlogSidebarForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Search" />
      <button>
        <Image width="18" height="20" src="/images/icon/50.svg" alt="icon" />
      </button>
    </form>
  );
};

export default BlogSidebarForm;
