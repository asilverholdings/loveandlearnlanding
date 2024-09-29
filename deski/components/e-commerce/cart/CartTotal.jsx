import React from "react";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
const CartTotal = () => {
  const {totalPrice,cartProducts} = useContextElement()
  return (
    <>
      <table className="cart-total-table">
        <tbody>
          <tr>
            <th>Subtotal</th>
            <td>${totalPrice.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Shipping Cost</th>
            <td>${(cartProducts.length * 10).toFixed(2)}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>${((cartProducts.length * 10) + (totalPrice)).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      {/* <!-- /.cart-total-table --> */}
      <Link     href="/checkout" className="theme-btn-seven checkout-process mt-30">
        Checkout
      </Link>
    </>
  );
};

export default CartTotal;
