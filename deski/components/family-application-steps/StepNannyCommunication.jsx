import React from 'react';

function NannyCommunication({ formData, handleChange }) {
    return (
        <div>    
          <h4 className="form-subtitle">Preferred Initiative</h4>
          <textarea
            name="preferredInitiative"
            placeholder="What level of initiative do you prefer?"
            value={formData.preferredInitiative}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          <h4 className="form-subtitle">Communication Plan</h4>
          <textarea
            name="communicationPlan"
            placeholder="How do you plan to communicate?"
            value={formData.communicationPlan}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          <h4 className="form-subtitle">Communication Level</h4>
          <textarea
            name="communicationLevel"
            placeholder="What level of communication do you prefer?"
            value={formData.communicationLevel}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>
        </div>
    )
}

export default NannyCommunication;