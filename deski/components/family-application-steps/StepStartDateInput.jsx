import React from 'react';

function StartDateInput({ startDate, handleChange }) {
  return (
    <div>
      <h4 className="form-subtitle">Desired Start Date:</h4>
      <input
        type="date"
        name="startDate"
        value={startDate}
        onChange={handleChange}
        onFocus={(e) => e.target.showPicker()}
        className="form-input"
      />
    </div>
  );
}

export default StartDateInput;
