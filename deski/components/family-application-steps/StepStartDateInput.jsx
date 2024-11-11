import React from 'react';

function StartDateInput({ startDate, handleChange, errors }) {
  // Today's date in YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <h4 className="form-subtitle">Desired Start Date:</h4>
      {errors.startDate && <span className="error">{errors.startDate}</span>}
      <input
        type="date"
        name="startDate"
        value={startDate}
        onChange={handleChange}
        onClick={(e) => e.target.showPicker()}
        className="form-input"
        min={today}
      />
    </div>
  );
}

export default StartDateInput;
