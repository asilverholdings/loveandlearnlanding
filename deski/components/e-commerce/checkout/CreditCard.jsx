import React from "react";

const CreditCard = () => {
  return (
    <div className="row">
      <div className="col-12">
        <h6>Card number</h6>
        <input type="number" />
      </div>
      <div className="col-8">
        <h6>Expiry date</h6>
        <div className="d-flex align-items-center">
          <input type="number" placeholder="MM" />
          <span>/</span>
          <input type="number" placeholder="YY" />
        </div>
      </div>
      <div className="col-4 ms-auto">
        <h6>CVV</h6>
        <input type="number" />
      </div>
    </div>
  );
};

export default CreditCard;
