import React from "react";
import { allowOnlyLetters, allowOnlyNumbers, formatZipCode} from "@/utils/inputSanitizers";
import CustomInput from "../custom-input-fields/CustomInput";

const AddressInfo = ({ addressData, handleChange, errors}) => {
  return (
    <div>
      <h4 className="form-subtitle">Primary Residential Address</h4>
      {errors.addressLine1 && <span className="error">{errors.addressLine1}</span>}
      <CustomInput
        type="text"
        name="addressLine1"
        placeholder="Address Line 1"
        value={addressData.addressLine1}
        onChange={handleChange}
        className="form-input"
      />
      <CustomInput
        type="text"
        name="addressLine2"
        placeholder="Address Line 2"
        value={addressData.addressLine2}
        onChange={handleChange}
        className="form-input"
      />
      {errors.city && <span className="error">{errors.city}</span>}
      <CustomInput
        type="text"
        name="city"
        placeholder="City"
        value={addressData.city}
        onChange={(e) => allowOnlyLetters(e, handleChange)}
        className="form-input"
      />
      {errors.state && <span className="error">{errors.state}</span>}
      <CustomInput
        type="text"
        name="state"
        placeholder="State"
        value={addressData.state}
        onChange={(e) => allowOnlyLetters(e, handleChange)}
        className="form-input"
      />
      {errors.zip && <span className="error">{errors.zip}</span>}
      <CustomInput
        type="text"
        name="zip"
        placeholder="Zip"
        value={addressData.zip}
        onChange={(e) => formatZipCode(e, handleChange)}
        className="form-input"
      />
    </div>
)};

export default AddressInfo;
