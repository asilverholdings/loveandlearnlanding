'use client'


import React from "react";

const FormEvent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="text" placeholder="ihidago@ujufidnan.gov" />
      <button>Try free demo</button>
    </form>
  );
};

export default FormEvent;
