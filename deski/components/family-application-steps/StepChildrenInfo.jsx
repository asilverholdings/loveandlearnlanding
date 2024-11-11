import React from 'react';
import CustomInput from '../custom-input-fields/CustomInput';
import CustomTextArea from '../custom-input-fields/CustomTextArea';

function ChildrenInfo({ formData, handleChange }) {
  const specialNeedsOptions = [
    "ADD", "ADHD", "Autism", "Asthma", 
    "Blind", "Cerebral Palsy", "Food Allergies", "Other"
  ];

  const sexOptions = ["Male", "Female"];

  // Generate an array of numbers for the dropdown (1 to 10)
  const childrenOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div>
      <h4 className="form-subtitle">Children Information</h4>

      {/* Dropdown for number of children */}
      <label>
        Number of children:
        <select
          name="childrenInfo.number"
          value={formData.childrenInfo.number || ""}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Select</option>
          {childrenOptions.map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </label>

      {/* Render age and sex input fields based on the number of children selected */}
      {formData.childrenInfo.number > 0 && (
        <div className="children-info-fields">
          <div className="children-info-header">
            <div className="child-info-item">Age of Child</div>
            <div className="child-info-item">Sex of Child</div>
          </div>
          {Array.from({ length: formData.childrenInfo.number }).map((_, index) => (
            <div key={index} className="child-info">
              <CustomInput
                type="text"
                name={`childrenInfo.ages[${index}]`}
                placeholder={"Age"}
                value={formData.childrenInfo.ages[index] || ""}
                onChange={handleChange}
                className="form-input"
              />
              <select
                name={`childrenInfo.sex[${index}]`}
                value={formData.childrenInfo.sex[index] || ""}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select</option>
                {sexOptions.map((sex) => (
                  <option key={sex} value={sex}>{sex}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      <h4 className="form-subtitle">Please describe the children’s schedule:</h4>
      <CustomTextArea
        type="text"
        name="childrenInfo.schedule"
        placeholder="Schedule"
        value={formData.childrenInfo.schedule}
        onChange={handleChange}
        className="form-input"
      />

      <h4 className="form-subtitle">Do your children have any special needs?</h4>
      {specialNeedsOptions.map((need) => (
        <label key={need} className="form-checkbox-label">
          <CustomInput
            type="checkbox"
            name="specialNeeds"
            value={need}
            checked={formData.specialNeeds.includes(need)}
            onChange={handleChange}
            className="form-checkbox"
          /> {need}
        </label>
      ))}
    </div>
  );
}

export default ChildrenInfo;
