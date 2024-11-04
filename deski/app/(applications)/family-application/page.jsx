"use client";
import React, { useState } from "react";
import HeaderTwo from "../../../components/header/HeaderTwo";
import FooterFour from "@/components/footer/FooterFour";

const FamilyApplication = () => {
  const [formData, setFormData] = useState({
    primaryContact: '',
    parents: {
      parent1: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
      parent2: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    },
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    candidateType: [],
    workingHours: {
        Monday: { start: '', end: '', totalHours: 0 },
        Tuesday: { start: '', end: '', totalHours: 0 },
        Wednesday: { start: '', end: '', totalHours: 0 },
        Thursday: { start: '', end: '', totalHours: 0 },
        Friday: { start: '', end: '', totalHours: 0 },
    },
    startDate: '',
    immunizations: '',
    duties: [],
    specialNeeds: [],
    familyDescription: '',
    adjectives: [],
    parentingPhilosophy: '',
    previousExperience: '',
    workFromHome: '',
    childrenInfo: {
      number: '',
      ages: '',
      schedule: '',
    },
    nannyDescription: '',
    qualities: [],
    preferredInitiative: '',
    dailyActivities: '',
    educationalGoals: '',
    milestones: '',
    values: '',
    traditions: '',
    importance: '',
    communicationPlan: '',
    personalityFit: '',
    communicationLevel: '',
    disciplineApproach: '',
    dailyLog: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Check if the name includes a dot, indicating it's a nested property
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleParentSelect = (parent) => {
    setFormData((prevData) => ({
      ...prevData,
      primaryContact: parent,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: prevData[name].includes(value)
        ? prevData[name].filter((item) => item !== value)
        : [...prevData[name], value],
    }));
  };

  const handleTimeChange = (day, type, value) => {
    setFormData((prevFormData) => {
      // Clone the existing formData
      const updatedFormData = { ...prevFormData };
      
      // Update the start or end time for the specific day
      updatedFormData.workingHours[day][type] = value;
  
      const { start, end } = updatedFormData.workingHours[day];
  
      if (start && end) {
        // Calculate the difference in hours
        const startTime = new Date(`1970-01-01T${start}:00`);
        const endTime = new Date(`1970-01-01T${end}:00`);
        let totalHours = (endTime - startTime) / (1000 * 60 * 60); // in hours
  
        // Check if total hours are negative
        if (totalHours <= 0) {
          updatedFormData.workingHours[day][type] = ''; // Reset the invalid field
          updatedFormData.workingHours[day].totalHours = 0; // Reset total hours
        } else {
          // Round total hours to the nearest hundredth
          totalHours = Math.round(totalHours * 100) / 100;
          updatedFormData.workingHours[day].totalHours = totalHours;
        }
      }
  
      return updatedFormData;
    });
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="main-page-wrapper">
      <HeaderTwo />

      {/* Hero Section */}
      <div className="fancy-hero-four">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-11 col-md-10 m-auto">
                <h6>Family Application</h6>
                <h2>Complete the application for your childcare needs</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="container mt-5">
        <form onSubmit={handleSubmit} className="application-form">
          <h3 className="form-section-title">Primary Contact</h3>
          <div className="bubble-selection">
            {["Parent 1", "Parent 2", "Both"].map((type) => (
              <label key={type} className={`bubble-label ${formData.primaryContact === type ? 'selected' : ''}`}>
                <input
                    type="radio"
                    name="parentType"
                    value={type}
                    checked={formData.primaryContact === type}
                    onChange={() => handleParentSelect(type)}
                    className="bubble-input"
                />
                {type}
              </label>
            ))}
          </div>

          <h4>
            {formData.primaryContact ? 
            `${formData.primaryContact.charAt(0).toUpperCase() + 
            formData.primaryContact.slice(1)} Information` 
            : 'Select a Parent'}
          </h4>


        <div className="parent-information">
          {(formData.primaryContact === 'Parent 1' || formData.primaryContact === 'Both') && (
            <div>
              <h5>Parent 1</h5>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.parents.parent1.firstName}
                onChange={(e) => handleChange(e, 'parent1')}
                className="form-input"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.parents.parent1.lastName}
                onChange={(e) => handleChange(e, 'parent1')}
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                value={formData.parents.parent1.email}
                onChange={(e) => handleChange(e, 'parent1')}
                className="form-input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Area Code Phone Number"
                value={formData.parents.parent1.phone}
                onChange={(e) => handleChange(e, 'parent1')}
                className="form-input"
              />
            </div>
          )}

          {(formData.primaryContact === 'Parent 2' || formData.primaryContact === 'Both') && (
            <div>
              <h5>Parent 2</h5>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.parents.parent2.firstName}
                onChange={(e) => handleChange(e, 'parent2')}
                className="form-input"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.parents.parent2.lastName}
                onChange={(e) => handleChange(e, 'parent2')}
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                value={formData.parents.parent2.email}
                onChange={(e) => handleChange(e, 'parent2')}
                className="form-input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Area Code Phone Number"
                value={formData.parents.parent2.phone}
                onChange={(e) => handleChange(e, 'parent2')}
                className="form-input"
              />
            </div>
          )}

        </div>
          <h4 className="form-subtitle">Primary Residential Address</h4>
          <input
            type="text"
            name="addressLine1"
            placeholder="Address Line 1"
            value={formData.addressLine1}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="addressLine2"
            placeholder="Address Line 2"
            value={formData.addressLine2}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip"
            value={formData.zip}
            onChange={handleChange}
            className="form-input"
          />

          <h4 className="form-subtitle">What type of candidate are you looking to hire?</h4>
          <div className="bubble-selection">
            {["Full Time (over 40 hrs/wk)", "Part Time (less than 30 hrs/wk)", "Temporary (less than 6 months)"].map((type) => (
              <label key={type} className={`bubble-label ${formData.candidateType === type ? 'selected' : ''}`}>
                <input
                    type="radio"
                    name="candidateType"
                    value={type}
                    checked={formData.candidateType === type}
                    onChange={(e) => setFormData({ ...formData, candidateType: e.target.value })}
                    className="bubble-input"
                />
                {type}
              </label>
            ))}
          </div>
          <h4 className="form-subtitle">What hours will the candidate work?</h4>
          {Object.keys(formData.workingHours).map((day) => (
            <div key={day} className="working-hours">
              <label>{day}</label>
              <input
                type="time"
                value={formData.workingHours[day].start}
                onChange={(e) => handleTimeChange(day, 'start', e.target.value)}                
                onFocus={(e) => e.target.showPicker()}
                className="form-time-input"
              />
              <input
                type="time"
                value={formData.workingHours[day].end}                
                onChange={(e) => handleTimeChange(day, 'end', e.target.value)}                
                onFocus={(e) => e.target.showPicker()}
                className="form-time-input"
              />
              <input
                type="string"
                value={`${formData.workingHours[day].totalHours} hours`}                
                placeholder="Total hours"
                readOnly
                className="form-input"
              />
            </div>
          ))}

          <h4 className="form-subtitle">Desired Start Date:</h4>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            onFocus={(e) => e.target.showPicker()}
            className="form-input"
          />

          <h4 className="form-subtitle">Do you require specific immunizations/vaccinations?</h4>
          <textarea
            name="immunizations"
            placeholder="Please list here"
            value={formData.immunizations}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          <h4 className="form-subtitle">Duties your candidate must be willing to perform:</h4>
          {["Laundry", "Cleaning", "Drive Children", "Care for pets", "Cooking/Meal Preparation", "Swim with children", "Administer medications"].map((duty) => (
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

          <h4 className="form-subtitle">Do your children have any special needs?</h4>
          {["ADD", "ADHD", "Autism", "Asthma", "Blind", "Cerebral Palsy", "Food Allergies", "Other"].map((need) => (
            <label key={need} className="form-checkbox-label">
              <input
                type="checkbox"
                name="specialNeeds"
                value={need}
                checked={formData.specialNeeds.includes(need)}
                onChange={handleCheckboxChange}
              /> {need}
            </label>
          ))}

          <h4 className="form-subtitle">Family Information</h4>
          <textarea
            name="familyDescription"
            placeholder="Tell us about your family"
            value={formData.familyDescription}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          <h4 className="form-subtitle">Adjectives to describe your family:</h4>
          <input
            type="text"
            name="adjectives"
            placeholder="Enter adjectives (comma-separated)"
            value={formData.adjectives}
            onChange={handleChange}
            className="form-input"
          />

          <h4 className="form-subtitle">What is your parenting philosophy?</h4>
          <textarea
            name="parentingPhilosophy"
            placeholder="Your philosophy here"
            value={formData.parentingPhilosophy}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          <h4 className="form-subtitle">Do you have previous childcare experience?</h4>
          <textarea
            name="previousExperience"
            placeholder="Please describe"
            value={formData.previousExperience}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          <h4 className="form-subtitle">Will you be working from home?</h4>
          <label className="form-radio-label">
            <input
              type="radio"
              name="workFromHome"
              value="Yes"
              checked={formData.workFromHome === "Yes"}
              onChange={handleChange}
            /> Yes
          </label>
          <label className="form-radio-label">
            <input
              type="radio"
              name="workFromHome"
              value="No"
              checked={formData.workFromHome === "No"}
              onChange={handleChange}
            /> No
          </label>

          <h4 className="form-subtitle">Children Information</h4>
          <input
            type="number"
            name="childrenInfo.number"
            placeholder="Number of children"
            value={formData.childrenInfo.number}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="childrenInfo.ages"
            placeholder="Ages of children"
            value={formData.childrenInfo.ages}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="childrenInfo.schedule"
            placeholder="Schedule of children"
            value={formData.childrenInfo.schedule}
            onChange={handleChange}
            className="form-input"
          />

          <h4 className="form-subtitle">Nanny Description</h4>
          <textarea
            name="nannyDescription"
            placeholder="Describe your ideal nanny"
            value={formData.nannyDescription}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          <h4 className="form-subtitle">Qualities you are looking for:</h4>
          {["Compassionate", "Reliable", "Energetic", "Creative", "Responsible"].map((quality) => (
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

          <h4 className="form-subtitle">Preferred Initiative</h4>
          <textarea
            name="preferredInitiative"
            placeholder="What level of initiative do you prefer?"
            value={formData.preferredInitiative}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

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

          <h4 className="form-subtitle">Family Values</h4>
          <textarea
            name="values"
            placeholder="What values are important to your family?"
            value={formData.values}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          <h4 className="form-subtitle">Family Traditions</h4>
          <textarea
            name="traditions"
            placeholder="What family traditions do you have?"
            value={formData.traditions}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          <h4 className="form-subtitle">Importance of Nanny</h4>
          <textarea
            name="importance"
            placeholder="Why is a nanny important for your family?"
            value={formData.importance}
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

          <h4 className="form-subtitle">Personality Fit</h4>
          <textarea
            name="personalityFit"
            placeholder="What personality traits are important?"
            value={formData.personalityFit}
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

          <h4 className="form-subtitle">Discipline Approach</h4>
          <textarea
            name="disciplineApproach"
            placeholder="What is your discipline approach?"
            value={formData.disciplineApproach}
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

          <button type="submit" className="form-submit-button">Submit Application</button>
        </form>
      </div>

      <footer className="theme-footer-eight mt-100 mb-80">
        <div className="top-footer">
            <div className="container">
              <FooterFour />
            </div>
            {/* /.container */}
          </div>
      </footer>
    </div>
  );
};

export default FamilyApplication;
