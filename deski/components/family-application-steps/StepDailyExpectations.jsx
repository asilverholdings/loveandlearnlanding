import React from 'react';

function DailyExpectations({ formData, handleChange }) {
    return (
        <div>
            <h4 className="form-subtitle">Daily Activities</h4>
              <textarea
                name="dailyActivities"
                placeholder="What daily activities do you envision?"
                value={formData.dailyActivities}
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
    
              <h4 className="form-subtitle">Educational Goals</h4>
              <textarea
                name="educationalGoals"
                placeholder="What educational goals do you have?"
                value={formData.educationalGoals}
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
    
              <h4 className="form-subtitle">Milestones</h4>
              <textarea
                name="milestones"
                placeholder="What milestones are important for you?"
                value={formData.milestones}
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
    
              <h4 className="form-subtitle">Daily Log</h4>
              <textarea
                name="dailyLog"
                placeholder="What kind of daily log do you expect?"
                value={formData.dailyLog}
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
        </div>
    )
}

export default DailyExpectations;