import React from 'react';
import CustomTextArea from '../custom-input-fields/CustomTextArea';

function NannyCommunication({ formData, handleChange }) {
    return (
        <div>    
          {/* Communication Plan */}
          <h4 className="form-subtitle">How do you plan to communicate with your nanny (daily check-ins, weekly meetings, etc.)?</h4>
          <CustomTextArea
            name="communicationPlan"
            placeholder="Communication Plan"
            value={formData.communicationPlan}
            onChange={handleChange}
            className="form-textarea"
          />
          {/* Communication Level */}
          <h4 className="form-subtitle">What level of communication would you like to have during the day (e.g., frequent updates, photos, or just a summary at the end of the day)?</h4>
          <CustomTextArea
            name="communicationLevel"
            placeholder="Communication Level"
            value={formData.communicationLevel}
            onChange={handleChange}
            className="form-textarea"
          />
          {/* Daily Log */}
          <h4 className="form-subtitle">Would you like the nanny to provide a daily log or report on your child’s activities, meals, and naps?</h4>
          <div className="form-radio-options">
            <div className="radio-option">
              <input 
                type="radio" 
                name="dailyLog" 
                value="yes" 
                checked={formData.dailyLog === 'yes'} 
                onChange={handleChange}
              />
              Yes
            </div>
            <div className="radio-option">
              <input 
                type="radio" 
                name="dailyLog" 
                value="no" 
                checked={formData.dailyLog === 'no'} 
                onChange={handleChange}
              />
              No
            </div>
          </div>
        </div>
    )
}

export default NannyCommunication;