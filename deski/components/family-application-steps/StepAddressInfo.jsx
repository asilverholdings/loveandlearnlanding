// AddressInfo.js
import React from "react";

const AddressInfo = ({ addressData, handleChange }) => (
  <div>
    <h4 className="form-subtitle">Primary Residential Address</h4>
    <input
      type="text"
      name="addressLine1"
      placeholder="Address Line 1"
      value={addressData.addressLine1}
      onChange={handleChange}
      className="form-input"
    />
    <input
      type="text"
      name="addressLine2"
      placeholder="Address Line 2"
      value={addressData.addressLine2}
      onChange={handleChange}
      className="form-input"
    />
    <input
      type="text"
      name="city"
      placeholder="City"
      value={addressData.city}
      onChange={handleChange}
      className="form-input"
    />
    <input
      type="text"
      name="state"
      placeholder="State"
      value={addressData.state}
      onChange={handleChange}
      className="form-input"
    />
    <input
      type="text"
      name="zip"
      placeholder="Zip"
      value={addressData.zip}
      onChange={handleChange}
      className="form-input"
    />
  </div>
);

export default AddressInfo;
