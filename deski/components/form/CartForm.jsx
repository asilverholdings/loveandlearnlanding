

'use client'
import React from 'react'
import Coupon from '../e-commerce/cart/Coupon';
import CartTotal from '../e-commerce/cart/CartTotal';
import CartProduct from '../e-commerce/cart/CartProduct';

export default function CartForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
      };
  return (
    <form className="cart-list-form" onClick={handleSubmit}>
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">Product</th>
            <th>Price</th>
            <th>QTY</th>
            <th>Total</th>
            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          <CartProduct />
        </tbody>
      </table>
    </div>
    {/* <!-- /.table-responsive --> */}

    <div className="d-sm-flex justify-content-between cart-footer">
      <Coupon />
      {/* <!-- /.coupon-section --> */}

      <div className="cart-total-section d-flex flex-column sm-pt-40">
        <CartTotal />
      </div>
    </div>
    {/* <!-- /.cart-footer --> */}
  </form>
  )
}
