import React from 'react';

function ChildrenInfo({ formData, handleChange, handleCheckboxChange }) {
  const specialNeedsOptions = [
    "ADD", "ADHD", "Autism", "Asthma", 
    "Blind", "Cerebral Palsy", "Food Allergies", "Other"
  ];

  return (
    <div>
      <h4 className="form-subtitle">Children Information</h4>
      <input
        type="number"
        name="childrenInfo.number"
        placeholder="Number of children"
        value={formData.childrenInfo.number}
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="text"
        name="childrenInfo.ages"
        placeholder="Ages of children"
        value={formData.childrenInfo.ages}
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="text"
        name="childrenInfo.schedule"
        placeholder="Schedule of children"
        value={formData.childrenInfo.schedule}
        onChange={handleChange}
        className="form-input"
      />

      <h4 className="form-subtitle">Do your children have any special needs?</h4>
      {specialNeedsOptions.map((need) => (
        <label key={need} className="form-checkbox-label">
          <input
            type="checkbox"
            name="specialNeeds"
            value={need}
            checked={formData.specialNeeds.includes(need)}
            onChange={handleCheckboxChange}
          /> {need}
        </label>
      ))}
    </div>
  );
}

export default ChildrenInfo;
