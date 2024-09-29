


'use client'



import Image from 'next/image';
import React from 'react'

export default function FaqForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
      };
  return (
    <form onClick={handleSubmit} className="search-form">
    <input type="text" placeholder="Search for articles..." />
    <button>
      <Image width="27" height="23" src="/images/icon/47.svg" alt="icon" />
    </button>
  </form>
  )
}
