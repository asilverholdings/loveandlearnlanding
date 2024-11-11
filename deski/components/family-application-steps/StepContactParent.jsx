import React from "react";
import { allowOnlyLetters, allowOnlyNumbers, formatPhoneNumber } from "@/utils/inputSanitizers";
import CustomInput from "../custom-input-fields/CustomInput";

const ParentContactInfo = ({ primaryContact, parents, handleParentSelect, handleChange, errors }) => {
  return (
    <div>
      <h3 className="form-section-title">Primary Contact</h3>
      <div className="bubble-selection">
        {["Parent 1", "Parent 2", "Both"].map((type) => (
          <label key={type} className={`bubble-label ${primaryContact === type ? "selected" : ""}`}>
            <CustomInput
              type="radio"
              name="parentType"
              value={type}
              checked={primaryContact === type}
              onChange={() => handleParentSelect(type)}
              className="bubble-input"
            />
            {type}
          </label>
        ))}
      </div>

      <h4>
        {primaryContact
          ? `${primaryContact.charAt(0).toUpperCase() + primaryContact.slice(1)} Information`
          : ""}
      </h4>

      <div className="parent-information">
        {(primaryContact === "Parent 1" || primaryContact === "Both") && (
          <div>
            <h5>Parent 1</h5>
            {errors.parent1FirstName && <span className="error">{errors.parent1FirstName}</span>}
            <CustomInput
              type="text"
              name="parents.parent1.firstName"
              placeholder="First Name"
              value={parents.parent1.firstName}
              onChange={(e) => allowOnlyLetters(e, handleChange)}
              className="form-input"
            />
            {errors.parent1LastName && <span className="error">{errors.parent1LastName}</span>}
            <CustomInput
              type="text"
              name="parents.parent1.lastName"
              placeholder="Last Name"
              value={parents.parent1.lastName}
              onChange={(e) => allowOnlyLetters(e, handleChange)}
              className="form-input"
            />
            {errors.parent1Email && <span className="error">{errors.parent1Email}</span>}
            <CustomInput
              type="email"
              name="parents.parent1.email"
              placeholder="example@example.com"
              value={parents.parent1.email}
              onChange={handleChange}
              className="form-input"
            />
            {errors.parent1Phone && <span className="error">{errors.parent1Phone}</span>}
            <CustomInput
              type="tel"
              name="parents.parent1.phone"
              placeholder="(000)000-0000"
              value={parents.parent1.phone}
              onChange={(e) => formatPhoneNumber(e, handleChange)}
              className="form-input"
            />
          </div>
        )}

        {(primaryContact === "Parent 2" || primaryContact === "Both") && (
          <div>
            <h5>Parent 2</h5>
            {errors.parent2FirstName && <span className="error">{errors.parent2FirstName}</span>}
            <CustomInput
              type="text"
              name="parents.parent2.firstName"
              placeholder="First Name"
              value={parents.parent2.firstName}
              onChange={(e) => allowOnlyLetters(e, handleChange)}
              className="form-input"
            />
            {errors.parent2LastName && <span className="error">{errors.parent2LastName}</span>}
            <CustomInput
              type="text"
              name="parents.parent2.lastName"
              placeholder="Last Name"
              value={parents.parent2.lastName}
              onChange={(e) => allowOnlyLetters(e, handleChange)}
              className="form-input"
            />
            {errors.parent2Email && <span className="error">{errors.parent2Email}</span>}
            <CustomInput
              type="email"
              name="parents.parent2.email"
              placeholder="example@example.com"
              value={parents.parent2.email}
              onChange={handleChange}
              className="form-input"
            />
            {errors.parent2Phone && <span className="error">{errors.parent2Phone}</span>}
            <CustomInput
              type="tel"
              name="parents.parent2.phone"
              placeholder="(000)000-0000"
              value={parents.parent2.phone}
              onChange={(e) => formatPhoneNumber(e, handleChange)}
              className="form-input"
              maxLength="14"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentContactInfo;
