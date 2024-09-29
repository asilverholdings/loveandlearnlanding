'use client'

import React, { useState } from "react";
import CreditCard from "./CreditCard";

const Payment = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="order-review">
      {/* <!-- /.product-review --> */}
      <div className="payment-option">
        <ul className="payment-list style-none">
          <li>
            <input
              type="radio"
              name="paymenttype"
              defaultValue="directbank"
              defaultChecked="checked"
              className="payment-radio-button"
              id="directbank"
            />
            <label htmlFor="directbank">Direct Bank Transfer</label>
            <p>
              Make your payment directly into our account. Plase use your Order
              ID as payment reference.
            </p>
          </li>
          <li>
            <input
              type="radio"
              name="paymenttype"
              defaultValue="paypal"
              id="paypal"
              className="payment-radio-button"
            />
            <label htmlFor="paypal">PayPal</label>
          </li>
          <li>
            <input
              type="radio"
              name="paymenttype"
              value="creditCard"
              id="credit-card"
              className="payment-radio-button"
              onClick={handleClick}
            />
            <label>Credit Card</label>
          </li>
          <li className={click ? "credit-card-form show" : "credit-card-form"}>
            <CreditCard />
          </li>
        </ul>
        {/* <!-- /.payment-list --> */}
      </div>
      {/* <!-- /.payment-option --> */}

      <p className="policy-text">
        Your personal data will be use for your order, support your experience
        through this website & for other purpose described in our privacy policy
      </p>
      <div className="agreement-checkbox">
        <input type="checkbox" id="agreement" />
        <label htmlFor="agreement">
          I have read and agree to the website terms and conditions*
        </label>
      </div>
      {/* <!-- /.agreement-checkbox --> */}

      <button className="theme-btn-seven w-100">Place Order</button>
    </div>
  );
};

export default Payment;
