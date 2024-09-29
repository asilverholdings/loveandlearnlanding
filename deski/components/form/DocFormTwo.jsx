
'use client'


import React from 'react'
import Image from "next/image";
export default function DocFormTwo() {
    const handleSubmit = (event) => {
        event.preventDefault();
      };
  return (
    <div className="search-form">
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Search here.." />
      <button>
        <Image width={17} height={16} style={{width:'100%',height:'fit-content'}}     src="/images/icon/59.svg" alt="icon" />
      </button>
    </form>
  </div>
  )
}
