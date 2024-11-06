import React from "react";

const ParentContactInfo = ({ primaryContact, parents, handleParentSelect, handleChange }) => (
  <div>
    <h3 className="form-section-title">Primary Contact</h3>
    <div className="bubble-selection">
      {["Parent 1", "Parent 2", "Both"].map((type) => (
        <label key={type} className={`bubble-label ${primaryContact === type ? 'selected' : ''}`}>
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
          <input
            type="text"
            name="parents.parent1.firstName"
            placeholder="First Name"
            value={parents.parent1.firstName}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="parents.parent1.lastName"
            placeholder="Last Name"
            value={parents.parent1.lastName}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="email"
            name="parents.parent1.email"
            placeholder="example@example.com"
            value={parents.parent1.email}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="tel"
            name="parents.parent1.phone"
            placeholder="Area Code Phone Number"
            value={parents.parent1.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      )}

      {(primaryContact === "Parent 2" || primaryContact === "Both") && (
        <div>
          <h5>Parent 2</h5>
          <input
            type="text"
            name="parents.parent2.firstName"
            placeholder="First Name"
            value={parents.parent2.firstName}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="parents.parent2.lastName"
            placeholder="Last Name"
            value={parents.parent2.lastName}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="email"
            name="parents.parent2.email"
            placeholder="example@example.com"
            value={parents.parent2.email}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="tel"
            name="parents.parent2.phone"
            placeholder="Area Code Phone Number"
            value={parents.parent2.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      )}
    </div>
  </div>
);

export default ParentContactInfo;
