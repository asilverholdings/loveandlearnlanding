import React from 'react';

function CandidateTypeSelection({ candidateType, setCandidateType }) {
  const types = [
    "Full Time (40 hrs/wk)",
    "Part Time (less than 30 hrs/wk)",
    "Temporary (less than 6 months)"
  ];

  return (
    <div>
      <h4 className="form-subtitle">What type of candidate are you looking to hire?</h4>
      <div className="bubble-selection">
        {types.map((type) => (
          <label key={type} className={`bubble-label ${candidateType === type ? 'selected' : ''}`}>
            <input
              type="radio"
              name="candidateType"
              value={type}
              checked={candidateType === type}
              onChange={() => setCandidateType(type)}
              className="bubble-input"
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
}

export default CandidateTypeSelection;
