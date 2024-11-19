import React from "react";
import { allowOnlyLetters, allowOnlyNumbers, formatPhoneNumber } from "@/utils/inputSanitizers";
import CustomInput from "../custom-input-fields/CustomInput";

const ParentContactInfo = ({ parent, handleChange, errors }) => {
  return (
    <div>
      <h3 className="form-section-title">Primary Contact</h3>

      <div className="parent-information">
         <div>
            {errors.parentFirstName && <span className="error">{errors.parentFirstName}</span>}
            <CustomInput
              type="text"
              name="parent.firstName"
              placeholder="First Name"
              value={parent.firstName}
              onChange={(e) => allowOnlyLetters(e, handleChange)}
              className="form-input"
            />
            {errors.parentLastName && <span className="error">{errors.parentLastName}</span>}
            <CustomInput
              type="text"
              name="parent.lastName"
              placeholder="Last Name"
              value={parent.lastName}
              onChange={(e) => allowOnlyLetters(e, handleChange)}
              className="form-input"
            />
            {errors.parentEmail && <span className="error">{errors.parentEmail}</span>}
            <CustomInput
              type="email"
              name="parent.email"
              placeholder="example@example.com"
              value={parent.email}
              onChange={handleChange}
              className="form-input"
            />
            {errors.parentPhone && <span className="error">{errors.parentPhone}</span>}
            <CustomInput
              type="tel"
              name="parent.phone"
              placeholder="(000)000-0000"
              value={parent.phone}
              onChange={(e) => formatPhoneNumber(e, handleChange)}
              className="form-input"
            />
          </div>

      </div>
    </div>
  );
};

export default ParentContactInfo;
