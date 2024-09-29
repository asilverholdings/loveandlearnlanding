import React from "react";
import Link from "next/link";

const BreadCrumb = ({data}) => {
  return (
    <nav className="breadcrumb-style-one mt-20">
      <ol className="breadcrumb bg-white style-none m0 p0">
        <li className="breadcrumb-item">
          <Link     href="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link     href="/e-commerce">Shop</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {data ? data.title:'Quilted Gilet With Hood'}
         
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
