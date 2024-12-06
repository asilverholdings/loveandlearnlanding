"use client";
import React, { useState } from "react";
import HeaderTwo from "../../../components/header/HeaderTwo";
import FooterFour from "@/components/footer/FooterFour";
import { allowOnlyLetters, allowOnlyNumbers } from "@/utils/inputSanitizers";
import CustomInput from "@/components/custom-input-fields/CustomInput";
import { validateNannyApplication, validateAddressInfo } from "@/utils/validationData";
import { formatZipCode, formatPhoneNumber } from "@/utils/inputSanitizers";
import CustomTextArea from "@/components/custom-input-fields/CustomTextArea";
const { storeNewApplicant, storeApplicantResponses } = require('../../../integrations/monday/index');
import { v4 as uuidv4 } from 'uuid';
import ThankYouModal from "@/components/form-submit/SubmissionConfirmation";
import useApplicantId from "@/utils/applicantIdGenerator";

const NannyApplication = () => {

  // Persist applicant id
  const applicantId = useApplicantId();

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
    resume: null
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
        setFormData((prev) => ({ ...prev, resume: files[0] })); // Handle file input
    } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
};

  const handleValidation = (formData) => {
    const errors = {
        ...validateNannyApplication(formData),
        ...validateAddressInfo(formData),
    };
    return errors;
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitted) {
        return;
    }

    const errors = handleValidation(formData);
    if (Object.keys(errors).length > 0) {
        setErrors(errors);
    } else {
        // Clear errors and submit form data
        setErrors({});
        setModalVisible(true);

        const itemName = `${formData.firstName} ${formData.lastName}`;
        const columnUpdates = {
            'first_name__1': formData.firstName,
            'last_name__1': formData.lastName,
            'email__1': formData.email,
            'applicant_id__1': applicantId,
        };

        try {
            // Wait for storeNewApplicant to complete
            const newApplicantResult = await storeNewApplicant(
                'Nanny Applications',
                itemName,
                columnUpdates,
                applicantId
            );

            if (newApplicantResult) {
                // Serialize form data into update body
                const updateBody = Object.entries(formData).map(([key, value]) => {
                    const serializedValue =
                        typeof value === 'object' ? JSON.stringify(value, null, 2) : value; // Pretty-print objects
                    return `${key}: ${serializedValue}`;
                });

                // Pass the resume file if provided
                const resumeFile = formData.resume || null; // Ensure null if no file is provided

                // Wait for storeApplicantResponses to complete
                await storeApplicantResponses(
                    applicantId,
                    updateBody,
                    'Nanny Applications',
                    resumeFile
                );
            } else {
                console.error('Failed to store new applicant.');
            }

            setIsSubmitted(true);
        } catch (error) {
            console.error('Error during submission:', error);
            setErrors({ submission: 'An error occurred during submission. Please try again.' });
        }
    }
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
            accept=".pdf,.doc,.docx"
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
          {errors.firstName && <span className="error">{errors.firstName}</span>}
          <CustomInput
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => allowOnlyLetters(e, handleChange)}
            className="form-input"
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
          <CustomInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => allowOnlyLetters(e, handleChange)}
            className="form-input"
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <CustomInput
            type="email"
            name="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          <CustomInput
            type="tel"
            name="phoneNumber"
            placeholder="(000)000-0000"
            value={formData.phoneNumber}
            onChange={(e) => formatPhoneNumber(e, handleChange)}
            className="form-input"
          />
          {errors.addressLine1 && <span className="error">{errors.addressLine1}</span>}
          <CustomInput
            type="text"
            name="addressLine1"
            placeholder="Address Line 1"
            value={formData.addressLine1}
            onChange={handleChange}
            className="form-input"
          />
          <CustomInput
            type="text"
            name="addressLine2"
            placeholder="(Apt., Suite, Building, etc.)"
            value={formData.addressLine2}
            onChange={handleChange}
            className="form-input"
          />
          {errors.city && <span className="error">{errors.city}</span>}
          <CustomInput
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={(e) => allowOnlyLetters(e, handleChange)}
            className="form-input"
          />
          {errors.state && <span className="error">{errors.state}</span>}
          <CustomInput
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={(e) => allowOnlyLetters(e, handleChange)}
            className="form-input"
          />
          {errors.zip && <span className="error">{errors.zip}</span>}
          <CustomInput
            type="text"
            name="zip"
            placeholder="Zip"
            value={formData.zip}
            onChange={(e) => formatZipCode(e, handleChange)}
            className="form-input"
          />

          {/* Basic Questions Section */}
          <h3 className="form-subtitle">Basic Questions</h3>
          <h4 className="form-subtitle"> What type of position are you seeking?</h4>
          <div className="bubble-selection">
            {["Full Time (40 hrs/wk)", "Part Time (less than 30 hrs/wk)", "Temporary (less than 6 months)"].map((type) => (
              <label key={type} className={`bubble-label ${formData.positionType === type ? 'selected' : ''}`}>
                <input
                    type="radio"
                    name="positionType"
                    value={type}
                    checked={formData.positionType === type}
                    onChange={(e) => setFormData({ ...formData, positionType: e.target.value })}
                    className="bubble-input"
                />
                {type}
              </label>
            ))}
          </div>

          What do you enjoy about being a nanny?
          <CustomTextArea
            name="enjoymentOfNannying"
            placeholder="Response"
            value={formData.enjoymentOfNannying}
            onChange={handleChange}
            className="form-textarea"
          />

          What do you think are the biggest challenges in being a nanny?
          <CustomTextArea
            name="challenges"
            placeholder="Response"
            value={formData.challenges}
            onChange={handleChange}
            className="form-textarea"
          />

          How long of a commitment can you make to the family you work for?
          <CustomInput
            type="text"
            name="commitmentLength"
            placeholder="Response"
            value={formData.commitmentLength}
            onChange={handleChange}
            className="form-input"
          />

          <label className="form-checkbox-label">
            <input
              type="checkbox"
              name="experienceWithNewborns"
              checked={formData.experienceWithNewborns}
              onChange={handleChange}
            /> Do you have experience with newborns?
          </label>

          <label className="form-radio-label">
            <span>We expect our nannies to be happy to help with some light housekeeping relating to the children (children's laundry, meal prep/light cooking for child). Would you be agreeable to this?</span>
            
            <div className="form-radio-options">
              <label className={`radio-option ${formData.lightHousekeeping === 'Yes' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="lightHousekeeping"
                  value="Yes"
                  checked={formData.lightHousekeeping === 'Yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              
              <label className={`radio-option ${formData.lightHousekeeping === 'No' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="lightHousekeeping"
                  value="No"
                  checked={formData.lightHousekeeping === 'No'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </label>


          <div className="form-checkbox-group">
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
          </div>
          
          Do you speak any languages other than English? If so, please list.
          <CustomInput
            type="text"
            name="languages"
            placeholder="Response"
            value={formData.languages}
            onChange={handleChange}
            className="form-input"
          />
          <select
            as="select"
            name="highestEducation"
            value={formData.highestEducation}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select your highest level of education</option>
            <option value="High School Diploma">High School Diploma</option>
            <option value="Some College">Some College</option>
            <option value="Associates Degree">Associates Degree</option>
            <option value="Bachelors Degree">Bachelors Degree</option>
            <option value="Masters Degree">Masters Degree</option>
            <option value="Doctoral Degree">Doctoral Degree</option>
          </select>

          Please provide any additional information about yourself that you think is relevant to employment.
          <CustomTextArea
            name="additionalInfo"
            placeholder="Response"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="form-textarea"
          />

          {/* Additional Questions Section */}
          <div className="form-checkbox-group">
            <h4 className="form-subtitle">Comfort Levels and Flexibility</h4>
            <label className="form-checkbox-label">
                <input
                type="checkbox"
                name="drivingExperience"
                checked={formData.drivingExperience}
                onChange={handleChange}
                />Are you comfortable driving with children and do you have previous experience driving as part of a position?
            </label>
            <label className="form-checkbox-label">
                <input
                type="checkbox"
                name="experienceWithMultipleChildren"
                checked={formData.experienceWithMultipleChildren}
                onChange={handleChange}
                /> Do you have experience with siblings or working with multiple children at once?
            </label>
            <label className="form-checkbox-label">
                <input
                type="checkbox"
                name="comfortableNannyingRemote"
                checked={formData.comfortableNannyingRemote}
                onChange={handleChange}
                /> Are you comfortable nannying while parents work from home?
            </label>
          </div>
          <label className="form-radio-label">
            
          <span>How have you communicated with parents in previous positions (text, phone, etc.)?</span>
          
          <div className="form-radio-options">
            <label className={`radio-option ${formData.parentCommunication === 'Text' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="parentCommunication"
                value="Text"
                checked={formData.parentCommunication === 'Text'}
                onChange={handleChange}
              />
              Text
            </label>
            
            <label className={`radio-option ${formData.parentCommunication === 'Phone' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="parentCommunication"
                value="Phone"
                checked={formData.parentCommunication === 'Phone'}
                onChange={handleChange}
              />
              Phone
            </label>
            
            <label className={`radio-option ${formData.parentCommunication === 'Email' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="parentCommunication"
                value="Email"
                checked={formData.parentCommunication === 'Email'}
                onChange={handleChange}
              />
              Email
            </label>
            
            <label className={`radio-option ${formData.parentCommunication === 'In-person' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="parentCommunication"
                value="In-person"
                checked={formData.parentCommunication === 'In-person'}
                onChange={handleChange}
              />
              In-person
            </label>
            
            <label className={`radio-option ${formData.parentCommunication === 'Other' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="parentCommunication"
                value="Other"
                checked={formData.parentCommunication === 'Other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </label>

          How often are you willing to communicate with parents throughout the day?
          <CustomInput
            type="text"
            name="communicationFrequency"
            placeholder="Response"
            value={formData.communicationFrequency}
            onChange={handleChange}
            className="form-input"
          />

          How do you handle conflicts, disagreements, sibling arguments, or behavioral issues?
          <CustomTextArea
            name="conflictResolution"
            placeholder="Response"
            value={formData.conflictResolution}
            onChange={handleChange}
            className="form-textarea"
          />

        <h4 className="form-subtitle">Personality and Interests</h4>
          What are your hobbies?
          <CustomInput
            type="text"
            name="hobbies"
            placeholder="Response"
            value={formData.hobbies}
            onChange={handleChange}
            className="form-input"
          />

          How do you spend your time outside of nannying?
          <CustomInput
            type="text"
            name="timeSpentOutsideNannying"
            placeholder="Response"
            value={formData.timeSpentOutsideNannying}
            onChange={handleChange}
            className="form-input"
          />

          How would you describe your personality in 3 words?
          <CustomTextArea
            name="personalityDescription"
            placeholder="Response"
            value={formData.personalityDescription}
            onChange={handleChange}
            className="form-textarea"
          />

          <button type="submit" className="theme-btn-two">Submit Application</button>
        </form>
      </div>

      {/* Modal */}
      {modalVisible && <ThankYouModal message={"Thank you for your application! We will be reaching out to you soon."}/>}

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
