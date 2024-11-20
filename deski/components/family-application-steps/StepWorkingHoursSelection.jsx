import React from 'react';

function WorkingHoursSelection({ workingHours, handleTimeChange }) {
  return (
    <div>
      <h4 className="form-subtitle">What hours will the candidate work?</h4>
      {Object.keys(workingHours).map((day) => (
        <div key={day} className="working-hours">
          <label className="day-label">{day}</label>
          <div className="time-row">
            <input
              type="time"
              value={workingHours[day].start}
              onChange={(e) => handleTimeChange(day, 'start', e.target.value)}
              onClick={(e) => e.target.showPicker()}
              className="form-time-input"
            />
            <span className="time-separator">to</span>
            <input
              type="time"
              value={workingHours[day].end}
              onChange={(e) => handleTimeChange(day, 'end', e.target.value)}
              onClick={(e) => e.target.showPicker()}
              className="form-time-input"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkingHoursSelection;
