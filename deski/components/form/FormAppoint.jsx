'use client'


import Image from "next/image";
import React from "react";

const FormAppoint = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="email" placeholder="ihidago@ujufidnan.gov" />
      <button className="d-flex justify-content-center align-items-center">
        <Image  width="28" height="15" src="/images/icon/119.svg" alt="icon" />
      </button>
    </form>
  );
};

export default FormAppoint;
