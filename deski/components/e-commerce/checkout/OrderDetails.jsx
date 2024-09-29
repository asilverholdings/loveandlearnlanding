import React from "react";

const OrderDetails = () => {
  return (
    <table className="product-review">
      <tbody>
        <tr>
          <th>
            <span>Bluthooth Speaker</span>
          </th>
          <td>
            <span>$123.78</span>
          </td>
        </tr>
        <tr>
          <th>
            <span>Subtotal</span>
          </th>
          <td>
            <span>$123.78</span>
          </td>
        </tr>
        <tr>
          <th>
            <span>Shipping</span>
          </th>
          <td>
            <span>$5.00</span>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>
            <span>Total</span>
          </th>
          <td>
            <span>$128.00</span>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default OrderDetails;
