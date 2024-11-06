import React from "react";

const formatPhoneNumber = (value) => {
    const length = value.length;
  
    if (length === 11) {
      // Format as +1 (XXX)XXX-XXXX for 11 digits
      const match = value.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        const [, countryCode, area, prefix, line] = match;
        return `+${countryCode}(${area})${prefix}-${line}`;
      }
    } else if (length === 10) {
      // Format as (XXX)XXX-XXXX for 10 digits
      const match = value.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        const [, area, prefix, line] = match;
        return `(${area})${prefix}-${line}`;
      }
    }
  
    return value; // Return the original value if it doesn't match expected patterns
  };  
  

const ParentContactInfo = ({ primaryContact, parents, handleParentSelect, handleChange, errors }) => {
  const handlePhoneChange = (event) => {
    const { name, value } = event.target;
    const numericValue = value.replace(/\D/g, ""); // Keep only numbers
    handleChange({ target: { name, value: numericValue } });
  };
  
  const handleTextChange = (event) => {
    const { name, value } = event.target;
    const textOnlyValue = value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
    handleChange({ target: { name, value: textOnlyValue } });
  };

  return (
    <div>
      <h3 className="form-section-title">Primary Contact</h3>
      <div className="bubble-selection">
        {["Parent 1", "Parent 2", "Both"].map((type) => (
          <label key={type} className={`bubble-label ${primaryContact === type ? "selected" : ""}`}>
            <input
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
            <input
              type="text"
              name="parents.parent1.firstName"
              placeholder="First Name"
              value={parents.parent1.firstName}
              onChange={handleTextChange}
              className="form-input"
            />
            {errors.parent1LastName && <span className="error">{errors.parent1LastName}</span>}
            <input
              type="text"
              name="parents.parent1.lastName"
              placeholder="Last Name"
              value={parents.parent1.lastName}
              onChange={handleTextChange}
              className="form-input"
            />
            {errors.parent1Email && <span className="error">{errors.parent1Email}</span>}
            <input
              type="email"
              name="parents.parent1.email"
              placeholder="example@example.com"
              value={parents.parent1.email}
              onChange={handleChange}
              className="form-input"
            />
            {errors.parent1Phone && <span className="error">{errors.parent1Phone}</span>}
            <input
              type="tel"
              name="parents.parent1.phone"
              placeholder="(000)000-0000"
              value={formatPhoneNumber(parents.parent1.phone)}
              onChange={handlePhoneChange}
              className="form-input"
              maxLength="14"
            />
          </div>
        )}

        {(primaryContact === "Parent 2" || primaryContact === "Both") && (
          <div>
            <h5>Parent 2</h5>
            {errors.parent2FirstName && <span className="error">{errors.parent2FirstName}</span>}
            <input
              type="text"
              name="parents.parent2.firstName"
              placeholder="First Name"
              value={parents.parent2.firstName}
              onChange={handleTextChange}
              className="form-input"
            />
            {errors.parent2LastName && <span className="error">{errors.parent2LastName}</span>}
            <input
              type="text"
              name="parents.parent2.lastName"
              placeholder="Last Name"
              value={parents.parent2.lastName}
              onChange={handleTextChange}
              className="form-input"
            />
            {errors.parent2Email && <span className="error">{errors.parent2Email}</span>}
            <input
              type="email"
              name="parents.parent2.email"
              placeholder="example@example.com"
              value={parents.parent2.email}
              onChange={handleChange}
              className="form-input"
            />
            {errors.parent2Phone && <span className="error">{errors.parent2Phone}</span>}
            <input
              type="tel"
              name="parents.parent2.phone"
              placeholder="(000)000-0000"
              value={formatPhoneNumber(parents.parent2.phone)}
              onChange={handlePhoneChange}
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
