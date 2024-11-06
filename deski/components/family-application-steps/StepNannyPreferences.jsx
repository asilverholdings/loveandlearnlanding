import React from 'react';

function NannyPreferences({ formData, handleChange, handleCheckboxChange }) {
  const duties = [
    "Laundry", "Cleaning", "Drive Children", "Care for pets", 
    "Cooking/Meal Preparation", "Swim with children", "Administer medications"
  ];

  const qualities = [
    "Compassionate", "Reliable", "Energetic", "Creative", "Responsible"
  ];

  return (
    <div>
      <h4 className="form-subtitle">Describe your ideal nanny</h4>
      <textarea
        name="nannyDescription"
        placeholder="Description"
        value={formData.nannyDescription}
        onChange={handleChange}
        className="form-textarea"
      ></textarea>

      <h4 className="form-subtitle">Do you require specific immunizations/vaccinations?</h4>
      <textarea
        name="immunizations"
        placeholder="Please list here"
        value={formData.immunizations}
        onChange={handleChange}
        className="form-textarea"
      ></textarea>

      <h4 className="form-subtitle">Duties your candidate must be willing to perform:</h4>
      {duties.map((duty) => (
        <label key={duty} className="form-checkbox-label">
          <input
            type="checkbox"
            name="duties"
            value={duty}
            checked={formData.duties.includes(duty)}
            onChange={handleCheckboxChange}
          /> {duty}
        </label>
      ))}

      <h4 className="form-subtitle">Personality Fit</h4>
      <textarea
        name="personalityFit"
        placeholder="What personality traits are important?"
        value={formData.personalityFit}
        onChange={handleChange}
        className="form-textarea"
      ></textarea>

      <h4 className="form-subtitle">Qualities you are looking for:</h4>
      {qualities.map((quality) => (
        <label key={quality} className="form-checkbox-label">
          <input
            type="checkbox"
            name="qualities"
            value={quality}
            checked={formData.qualities.includes(quality)}
            onChange={handleCheckboxChange}
          /> {quality}
        </label>
      ))}

      <h4 className="form-subtitle">Importance of Nanny</h4>
      <textarea
        name="importance"
        placeholder="Why is a nanny important for your family?"
        value={formData.importance}
        onChange={handleChange}
        className="form-textarea"
      ></textarea>
    </div>
  );
}

export default NannyPreferences;
