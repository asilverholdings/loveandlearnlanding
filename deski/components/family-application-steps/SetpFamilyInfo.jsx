import React from 'react';

function FamilyInfo({ formData, handleChange }) {
  return (
    <div>
      <h4 className="form-subtitle">Family Information</h4>
      <textarea
        name="familyDescription"
        placeholder="Tell us about your family"
        value={formData.familyDescription}
        onChange={handleChange}
        className="form-textarea"
      ></textarea>

      <h4 className="form-subtitle">Adjectives to describe your family:</h4>
      <input
        type="text"
        name="adjectives"
        placeholder="Enter adjectives (comma-separated)"
        value={formData.adjectives}
        onChange={handleChange}
        className="form-input"
      />

      <h4 className="form-subtitle">Family Values</h4>
      <textarea
        name="values"
        placeholder="What values are important to your family?"
        value={formData.values}
        onChange={handleChange}
        className="form-textarea"
      ></textarea>

      <h4 className="form-subtitle">Family Traditions</h4>
      <textarea
        name="traditions"
        placeholder="What family traditions do you have?"
        value={formData.traditions}
        onChange={handleChange}
        className="form-textarea"
      ></textarea>

      <h4 className="form-subtitle">What is your parenting philosophy?</h4>
      <textarea
        name="parentingPhilosophy"
        placeholder="Your philosophy here"
        value={formData.parentingPhilosophy}
        onChange={handleChange}
        className="form-textarea"
      ></textarea>

      <h4 className="form-subtitle">Discipline Approach</h4>
      <textarea
        name="disciplineApproach"
        placeholder="What is your discipline approach?"
        value={formData.disciplineApproach}
        onChange={handleChange}
        className="form-textarea"
      ></textarea>

      <h4 className="form-subtitle">Will you be working from home?</h4>
      <label className="form-radio-label">
        <input
          type="radio"
          name="workFromHome"
          value="Yes"
          checked={formData.workFromHome === "Yes"}
          onChange={handleChange}
        /> Yes
      </label>
      <label className="form-radio-label">
        <input
          type="radio"
          name="workFromHome"
          value="No"
          checked={formData.workFromHome === "No"}
          onChange={handleChange}
        /> No
      </label>
    </div>
  );
}

export default FamilyInfo;
