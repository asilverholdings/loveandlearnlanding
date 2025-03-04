import React from 'react';
import CustomTextArea from '../custom-input-fields/CustomTextArea';

function NannyPreferences({ formData, handleChange }) {
  const duties = [
    "Laundry", "Cleaning", "Drive Children", "Care for pets",
    "Cooking/Meal Preparation", "Swim with children", "Administer medications"
  ];

  const qualities = [
    "Compassionate", "Reliable", "Energetic", "Creative", "Responsible"
  ];

  return (
    <div>
      {/* Ideal Nanny Description */}
      <h4 className="form-subtitle">Provide a description of your ideal nanny.</h4>
      <CustomTextArea
        name="nannyDescription"
        placeholder="Description"
        value={formData.nannyDescription}
        onChange={handleChange}
        className="form-textarea"
      />

      {/* Qualities and Characteristics */}
      <h4 className="form-subtitle">What qualities and characteristics do you look for in your candidate?</h4>
      <CustomTextArea
        name="candidateQualities"
        placeholder="Qualities"
        value={formData.candidateQualities}
        onChange={handleChange}
        className="form-textarea"
      />

      {/* Initiative vs. Following Instructions */}
      <h4 className="form-subtitle">Do you prefer a nanny who takes initiative or someone who strictly follows instructions?</h4>
      <div className="form-radio-options">
        <div className="radio-option">
          <input
            type="radio"
            name="initiativePreference"
            value="takesInitiative"
            checked={formData.initiativePreference === 'takesInitiative'}
            onChange={handleChange}
          />
          Takes initiative
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="initiativePreference"
            value="followsInstructions"
            checked={formData.initiativePreference === 'followsInstructions'}
            onChange={handleChange}
          />
          Follows instructions
        </div>
      </div>

      {/* Organizing Activities */}
      <h4 className="form-subtitle">Would you like a nanny who can plan and organize daily activities, or do you prefer a more flexible, go-with-the-flow approach?</h4>
      <div className="form-radio-options">
        <div className="radio-option">
          <input
            type="radio"
            name="activityPlanning"
            value="organized"
            checked={formData.activityPlanning === 'organized'}
            onChange={handleChange}
          />
          Can plan and organize activities
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="activityPlanning"
            value="flexible"
            checked={formData.activityPlanning === 'flexible'}
            onChange={handleChange}
          />
          More flexible, go-with-the-flow
        </div>
      </div>

      {/* Educational Goals */}
      <h4 className="form-subtitle">Do you have any specific educational or developmental goals for your children (e.g., language development, independence, etc.)?</h4>
      <CustomTextArea
        name="educationalGoals"
        placeholder="Educational Goals"
        value={formData.educationalGoals}
        onChange={handleChange}
        className="form-textarea"
      />

      {/* Milestones */}
      <h4 className="form-subtitle">Are there any particular milestones you’d like the nanny to help your children achieve?</h4>
      <CustomTextArea
        name="milestones"
        placeholder="Milestones"
        value={formData.milestones}
        onChange={handleChange}
        className="form-textarea"
      />

      {/* Values to Teach */}
      <h4 className="form-subtitle">What values do you want to be taught and reinforced in your children?</h4>
      <CustomTextArea
        name="values"
        placeholder="Values"
        value={formData.values}
        onChange={handleChange}
        className="form-textarea"
      />

      {/* Cultural, Religious, or Family Traditions */}
      <h4 className="form-subtitle">Are there any cultural, religious, or family traditions the nanny should be mindful of?</h4>
      <CustomTextArea
        name="traditions"
        placeholder="Description"
        value={formData.traditions}
        onChange={handleChange}
        className="form-textarea"
      />

      {/* Importance of Aligning with Values */}
      <h4 className="form-subtitle">How important is it that the nanny aligns with your values or lifestyle?</h4>
      <div className="form-radio-options">
        <div className="radio-option">
          <input
            type="radio"
            name="importance"
            value="notImportant"
            checked={formData.importance === 'notImportant'}
            onChange={handleChange}
          />
          Not important
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="importance"
            value="slightlyImportant"
            checked={formData.importance === 'slightlyImportant'}
            onChange={handleChange}
          />
          Slightly important
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="importance"
            value="important"
            checked={formData.importance === 'important'}
            onChange={handleChange}
          />
          Important
        </div>
        <div className="radio-option">
          <input
            type="radio"
            name="importance"
            value="veryImportant"
            checked={formData.importance === 'veryImportant'}
            onChange={handleChange}
          />
          Very important
        </div>
      </div>

      {/* Personality Fit */}
      <h4 className="form-subtitle">What type of personality would best fit your family dynamic (e.g., energetic, calm, creative, structured)?</h4>
      <CustomTextArea
        name="personalityFit"
        placeholder="Description"
        value={formData.personalityFit}
        onChange={handleChange}
        className="form-textarea"
      />

      {/* Handling Discipline */}
      <h4 className="form-subtitle">How do you expect the nanny to handle discipline?</h4>
      <CustomTextArea
        name="discipline"
        placeholder="Discipline Approach"
        value={formData.discipline}
        onChange={handleChange}
        className="form-textarea"
      />
    </div>
  );
}

export default NannyPreferences;
