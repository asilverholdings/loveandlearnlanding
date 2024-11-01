"use client";
import React, { useState } from "react";
import HeaderTwo from "../../../components/header/HeaderTwo";
import FooterFour from "@/components/footer/FooterFour";

const NannyApplication = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fluentInEnglish: false,
    legalToWork: false,
    smokes: false,
    childcareExperience: false,
    cprCertified: false,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    positionType: '',
    enjoymentOfNannying: '',
    challenges: '',
    commitmentLength: '',
    lightHousekeeping: false,
    petsComfort: [],
    experienceWithNewborns: false,
    languages: '',
    highestEducation: '',
    additionalInfo: '',
    drivingExperience: false,
    parentCommunication: '',
    communicationFrequency: '',
    experienceWithMultipleChildren: false,
    conflictResolution: '',
    comfortableNannyingRemote: false,
    hobbies: '',
    timeSpentOutsideNannying: '',
    personalityDescription: '',
    resume: null // Add a field for the resume
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      resume: file // Store the uploaded file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
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
                <h6>Nanny Application</h6>
                <h2>Complete the application and join our team!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="container mt-5">
        <form onSubmit={handleSubmit} className="application-form">
          <h3 className="form-section-title">
            Applicants must exemplify professionalism, responsiveness, and a genuine passion for childcare.
          </h3>

          {/* Resume Upload Section */}
          <h4 className="form-subtitle">Upload Your Resume:</h4>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx" // Accept common resume file types
            onChange={handleFileChange}
            className="form-input"
          />
          
          {/* Requirements Section */}
          <h4 className="form-subtitle">Requirements:</h4>
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="fluentInEnglish"
              checked={formData.fluentInEnglish}
              onChange={handleChange}
            /> Fluent in English
          </label>
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="legalToWork"
              checked={formData.legalToWork}
              onChange={handleChange}
            /> Legally allowed to work in the United States
          </label>
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="smokes"
              checked={formData.smokes}
              onChange={handleChange}
            /> Do you smoke?
          </label>
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="childcareExperience"
              checked={formData.childcareExperience}
              onChange={handleChange}
            /> Resume displays 2 or more years of verifiable childcare experience
          </label>
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="cprCertified"
              checked={formData.cprCertified}
              onChange={handleChange}
            /> CPR and First Aid Certified
          </label>

          {/* Personal Information Section */}
          <h4 className="form-subtitle">Personal Information</h4>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Area Code Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input"
          />
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

          {/* Basic Questions Section */}
          <h4 className="form-subtitle">Basic Questions</h4>
          <input
            type="text"
            name="positionType"
            placeholder="What type of position are you seeking (Full-time, part-time, temporary)?"
            value={formData.positionType}
            onChange={handleChange}
            className="form-input"
          />
          <textarea
            name="enjoymentOfNannying"
            placeholder="What do you enjoy about being a nanny?"
            value={formData.enjoymentOfNannying}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>
          <textarea
            name="challenges"
            placeholder="What do you think are the biggest challenges in being a nanny?"
            value={formData.challenges}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>
          <input
            type="text"
            name="commitmentLength"
            placeholder="How long of a commitment can you make to the family you work for?"
            value={formData.commitmentLength}
            onChange={handleChange}
            className="form-input"
          />
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="lightHousekeeping"
              checked={formData.lightHousekeeping}
              onChange={handleChange}
            /> Would you be agreeable to light housekeeping relating to the children?
          </label>
          <h4 className="form-subtitle">Are you comfortable with pets? Select all that apply:</h4>
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="petsComfort"
              value="Cats"
              checked={formData.petsComfort.includes("Cats")}
              onChange={handleCheckboxChange}
            /> Cats
          </label>
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="petsComfort"
              value="Small dogs"
              checked={formData.petsComfort.includes("Small dogs")}
              onChange={handleCheckboxChange}
            /> Small dogs
          </label>
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="petsComfort"
              value="Large dogs"
              checked={formData.petsComfort.includes("Large dogs")}
              onChange={handleCheckboxChange}
            /> Large dogs
          </label>
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="petsComfort"
              value="No pets"
              checked={formData.petsComfort.includes("No pets")}
              onChange={handleCheckboxChange}
            /> No pets
          </label>
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="experienceWithNewborns"
              checked={formData.experienceWithNewborns}
              onChange={handleChange}
            /> Do you have experience with newborns?
          </label>
          <input
            type="text"
            name="languages"
            placeholder="What languages do you speak?"
            value={formData.languages}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="highestEducation"
            placeholder="What is your highest level of education?"
            value={formData.highestEducation}
            onChange={handleChange}
            className="form-input"
          />
          <textarea
            name="additionalInfo"
            placeholder="Please provide any additional information that may help us to better understand you."
            value={formData.additionalInfo}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          {/* Additional Questions Section */}
          <h4 className="form-subtitle">Additional Questions</h4>
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="drivingExperience"
              checked={formData.drivingExperience}
              onChange={handleChange}
            /> Do you have experience driving?
          </label>
          <textarea
            name="parentCommunication"
            placeholder="Describe how you would communicate with parents."
            value={formData.parentCommunication}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>
          <input
            type="text"
            name="communicationFrequency"
            placeholder="How often would you communicate with parents?"
            value={formData.communicationFrequency}
            onChange={handleChange}
            className="form-input"
          />
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="experienceWithMultipleChildren"
              checked={formData.experienceWithMultipleChildren}
              onChange={handleChange}
            /> Do you have experience caring for multiple children?
          </label>
          <textarea
            name="conflictResolution"
            placeholder="Describe how you would handle conflict."
            value={formData.conflictResolution}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="comfortableNannyingRemote"
              checked={formData.comfortableNannyingRemote}
              onChange={handleChange}
            /> Are you comfortable nannying remote?
          </label>
          <input
            type="text"
            name="hobbies"
            placeholder="What are your hobbies?"
            value={formData.hobbies}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="timeSpentOutsideNannying"
            placeholder="How do you spend your time outside of nannying?"
            value={formData.timeSpentOutsideNannying}
            onChange={handleChange}
            className="form-input"
          />
          <textarea
            name="personalityDescription"
            placeholder="How would you describe your personality?"
            value={formData.personalityDescription}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          <button type="submit" className="btn btn-primary">Submit Application</button>
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

export default NannyApplication;
