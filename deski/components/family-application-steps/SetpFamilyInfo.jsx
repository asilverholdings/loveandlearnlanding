import React from 'react';
import CustomTextArea from '../custom-input-fields/CustomTextArea';

function FamilyInfo({ formData, handleChange }) {
  return (
    <div>
      <h4 className="form-subtitle">Tell us about your family.</h4>
      <CustomTextArea
        name="familyDescription"
        placeholder="Description"
        value={formData.familyDescription}
        onChange={handleChange}
        className="form-textarea"
      />

      <h4 className="form-subtitle">What makes you a great family to work with?</h4>
      <CustomTextArea
        name="greatFamily"
        placeholder="What makes your family great to work with?"
        value={formData.greatFamily}
        onChange={handleChange}
        className="form-textarea"
      />

      <h4 className="form-subtitle">Adjectives to describe your family:</h4>
      <div className="adjective-options">
        {[
          "Friendly", "Laid-back", "Extroverted", "Formal", "Informal", 
          "Spiritual", "Active", "Communicative", "Hands-on", "Collaborative", 
          "Open-minded", "Organized", "Structured", "Private"
        ].map((adjective) => (
          <label key={adjective} className="form-checkbox-label">
            <input
              type="checkbox"
              name="adjectives"
              value={adjective}
              checked={formData.adjectives.includes(adjective)}
              onChange={handleChange}
              className="form-checkbox"
            />
            {adjective}
          </label>
        ))}
      </div>

      <h4 className="form-subtitle">Explain your parenting philosophy.</h4>
      <CustomTextArea
        name="parentingPhilosophy"
        placeholder="Your philosophy here"
        value={formData.parentingPhilosophy}
        onChange={handleChange}
        className="form-textarea"
      />

      <h4 className="form-subtitle">What has been your experience with previous childcare arrangements?</h4>
      <CustomTextArea
        name="previousExperience"
        placeholder="Describe your experience with previous childcare arrangements."
        value={formData.previousExperience}
        onChange={handleChange}
        className="form-textarea"
      />

      <h4 className="form-subtitle">Do you work from home? If so, how often?</h4>
      <CustomTextArea
        name="workFromHomeFrequency"
        placeholder="Describe how often you work from home."
        value={formData.workFromHomeFrequency}
        onChange={handleChange}
        className="form-textarea"
      />

      <h4 className="form-subtitle">If you're working from home, what are the expectations on keeping the children out of the office, how do they handle separation?</h4>
      <CustomTextArea
        name="workFromHomeExpectations"
        placeholder="Describe the expectations for children when working from home."
        value={formData.workFromHomeExpectations}
        onChange={handleChange}
        className="form-textarea"
      />

      <h4 className="form-subtitle">Do you have pets in your home?</h4>
      <label className="form-radio-label">
        <input
          type="radio"
          name="petsInHome"
          value="Yes"
          checked={formData.petsInHome === "Yes"}
          onChange={handleChange}
        /> Yes
      </label>
      <label className="form-radio-label">
        <input
          type="radio"
          name="petsInHome"
          value="No"
          checked={formData.petsInHome === "No"}
          onChange={handleChange}
        /> No
      </label>

      <h4 className="form-subtitle">Do you have a pool?</h4>
      <label className="form-radio-label">
        <input
          type="radio"
          name="hasPool"
          value="Yes"
          checked={formData.hasPool === "Yes"}
          onChange={handleChange}
        /> Yes
      </label>
      <label className="form-radio-label">
        <input
          type="radio"
          name="hasPool"
          value="No"
          checked={formData.hasPool === "No"}
          onChange={handleChange}
        /> No
      </label>

      <h4 className="form-subtitle">Are there nanny cams inside your home?</h4>
      <label className="form-radio-label">
        <input
          type="radio"
          name="nannyCams"
          value="Yes"
          checked={formData.nannyCams === "Yes"}
          onChange={handleChange}
        /> Yes
      </label>
      <label className="form-radio-label">
        <input
          type="radio"
          name="nannyCams"
          value="No"
          checked={formData.nannyCams === "No"}
          onChange={handleChange}
        /> No
      </label>
    </div>
  );
}

export default FamilyInfo;
