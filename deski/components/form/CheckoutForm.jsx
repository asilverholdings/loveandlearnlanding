'use client'


import React from 'react'
import BillingDetails from '../e-commerce/checkout/BillingDetails'
import Payment from '../e-commerce/checkout/Payment'

export default function CheckoutForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
      };
  return (
    <form onClick={handleSubmit} className="checkout-form">
    <div className="row">
      <div className="col-xl-6 col-lg-7">
        <h2 className="main-title">Billign Details</h2>
        <BillingDetails />
        {/* <!-- /.user-profile-data --> */}
      </div>
      {/* <!-- /.col- --> */}

      <div className="col-xxl-4 col-lg-5 ms-auto">
        <div className="order-confirm-sheet md-mt-60">
          <h2 className="main-title">Order Details</h2>
          <Payment />
        </div>
        {/* <!-- /.order-confirm-sheet --> */}
      </div>
    </div>
    {/* <!-- /.row --> */}
  </form>
  )
}
