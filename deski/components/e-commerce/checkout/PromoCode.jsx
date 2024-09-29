'use client'

import React, { useState } from "react";

const PromoCode = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="card">
      <p className="card-header">
        Have a promo code?{" "}
        <button className="d-inline-block collapsed" onClick={handleClick}>
          Click to enter your code.
        </button>
      </p>
      <form
        onClick={handleSubmit}
        id="promo-code"
        className={click ? "collapse show" : "collapse"}
      >
        <p>Please enter your promo code below.</p>
        <input type="text" placeholder="Coupon code" />
        <button className="theme-btn-seven">Apply coupon</button>
      </form>
    </div>
  );
};

export default PromoCode;
