"use client";
import React, { useState, useRef } from "react";
import HeaderTwo from "../../../components/header/HeaderTwo";
import MultiStepProgressBar from "@/components/progress-bar/MultiStepProgressBar";
import FooterFour from "@/components/footer/FooterFour";
import ParentContactInfo from "@/components/family-application-steps/StepContactParent";
import AddressInfo from "@/components/family-application-steps/StepAddressInfo";
import CandidateTypeSelection from "@/components/family-application-steps/StepCandidateType";
import WorkingHoursSelection from "@/components/family-application-steps/StepWorkingHoursSelection";
import StartDateInput from "@/components/family-application-steps/StepStartDateInput";
import NannyPreferences from "@/components/family-application-steps/StepNannyPreferences";
import ChildrenInfo from "@/components/family-application-steps/StepChildrenInfo";
import FamilyInfo from "@/components/family-application-steps/SetpFamilyInfo";
import NannyCommunication from "@/components/family-application-steps/StepNannyCommunication";
import DailyExpectations from "@/components/family-application-steps/StepDailyExpectations";
import ThankYouModal from "@/components/form-submit/SubmissionConfirmation";
import { validateParentContactInfo, validateAddressInfo, validateStartDate } from "@/utils/validationData";
const { storeNewApplicant, storeApplicantResponses } = require('../../../integrations/monday/index');
import { v4 as uuidv4 } from 'uuid';

const FamilyApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  // Persist applicant id 
  const [applicantId] = useState(() => {
    const savedId = sessionStorage.getItem("applicantId");
    if (savedId) return savedId;
    const newId = uuidv4();
    sessionStorage.setItem("applicantId", newId);
    return newId;
  });

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
    greatFamily: '',
    adjectives: [],
    parentingPhilosophy: '',
    previousExperience: '',
    workFromHomeFrequency: '',
    workFromHomeExpectations: '',
    petsInHome: '',
    hasPool: '',
    nannyCams: '',
    childrenInfo: {
      number: '',
      ages: [],
      schedule: '',
      sex: '',
    },
    nannyDescription: '',
    candidateQualities: [],
    initiativePreference: '',
    activityPlanning: '',
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
    const { name, value, type, checked } = e.target;
  
    setFormData((prevData) => {
      const updatedData = { ...prevData };
  
      if (type === "checkbox") {
        if (Array.isArray(updatedData[name])) {
          // Handle array fields like 'duties' or 'qualities'
          const newArray = checked
            ? [...updatedData[name], value]
            : updatedData[name].filter((item) => item !== value);
  
          return { ...updatedData, [name]: newArray };
        } else {
          // Handle other single-value checkbox fields
          return { ...updatedData, [name]: checked };
        }
      }
  
      // Handle nested fields
      const nameParts = name.split('.');
      let currentLevel = updatedData;
  
      for (let i = 0; i < nameParts.length; i++) {
        const part = nameParts[i];
  
        if (i === nameParts.length - 1) {
          if (part.includes('[')) {
            const [arrayName, index] = part.match(/\w+/g);
            currentLevel[arrayName] = [...currentLevel[arrayName]];
            currentLevel[arrayName][parseInt(index, 10)] = value;
          } else {
            currentLevel[part] = value;
          }
        } else {
          currentLevel[part] = { ...currentLevel[part] };
          currentLevel = currentLevel[part];
        }
      }
  
      return updatedData;
    });
  };
  
    
  // Set top of form in view upon navigation
  const scrollToForm = () => {
    const element = formRef.current;

    // Scroll to the element
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Apply the offset manually after scrolling
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 100;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // Next button navigation
  const handleNext = () => {
    let validationErrors = {};

    // Validate fields before navigating next
    switch (currentStep) {
        case 1:
          validationErrors = validateParentContactInfo(formData);
          if (Object.keys(validationErrors).length === 0 && validationErrors.constructor === Object) {
            handleSubmitApplicant();
          }
          break;
        case 2:
          validationErrors = validateAddressInfo(formData);
          break;
        case 3:
            validationErrors = validateStartDate(formData);
            break;
        default: 
            validationErrors = {};
            break;
    }

    if (validationErrors && typeof validationErrors === 'object' && Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return; // Prevent moving to the next step if there are validation errors
    }

    setCurrentStep((prev) => prev + 1);
    scrollToForm();
  };
  
  // Back button navigation
  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
    scrollToForm();
  };

  // Progress bar navigation
  const handlePageNumberClick = (pageNumber) => {
    if (pageNumber > currentStep) handleNext();
    else if (pageNumber < currentStep) handleBack();
  };

  // Select primary contact
  const handleParentSelect = (parent) => {
    setFormData((prevData) => ({
      ...prevData,
      primaryContact: parent,
    }));
  };

  // Calculate total hours 
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

  // Submit form
  const handleSubmitApplicant = (e) => {
    
    const itemName = `${formData.parents.parent1.firstName} ${formData.parents.parent1.lastName}`;
    const columnUpdates = {
      'first_name__1': formData.parents.parent1.firstName,
      'last_name__1': formData.parents.parent1.lastName,
      'email4__1': formData.parents.parent1.email,
      'applicant_id__1': applicantId
    };

    storeNewApplicant("Family Applications", itemName, columnUpdates, applicantId);
  };

  const handleSubmit = (e) => {
    if (isSubmitted) {
      return;
    }
    setModalVisible(true);

    const updateBody = Object.entries(formData).map(([key, value]) => {
      const serializedValue = typeof value === "object" ? JSON.stringify(value, null, 2) : value; // Pretty-print objects
      return `${key}: ${serializedValue}`;
    });

    e.preventDefault();
    storeApplicantResponses(applicantId, updateBody, "Family Applications");
    console.log("Form submitted:", formData);

    setIsSubmitted(true);
  }

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
        <form ref={formRef} onSubmit={handleSubmit} className="application-form">
            <>
           {/* Progress Bar */}
            <MultiStepProgressBar
              currentStep={currentStep}
              totalSteps={8}
              onPageNumberClick={handlePageNumberClick}
            />
          
          {currentStep === 1 && 
            <ParentContactInfo
              primaryContact={formData.primaryContact}
              parents={formData.parents}
              handleParentSelect={handleParentSelect}
              handleChange={handleChange}
              errors={errors}
            />
          }

          {currentStep === 2 &&
            <AddressInfo
                addressData={{
                addressLine1: formData.addressLine1,
                addressLine2: formData.addressLine2,
                city: formData.city,
                state: formData.state,
                zip: formData.zip,
                }}
                handleChange={handleChange}
                errors={errors}
            />
          }

          {currentStep === 3 &&
            <>
            <CandidateTypeSelection 
              candidateType={formData.candidateType} 
              setCandidateType={(type) => setFormData({ ...formData, candidateType: type })}
            />
            {(formData.candidateType != '') &&
              <WorkingHoursSelection 
                workingHours={formData.workingHours} 
                handleTimeChange={handleTimeChange} 
              />
            }
            <StartDateInput 
              startDate={formData.startDate} 
              handleChange={handleChange} 
              errors={errors}
            />
          </>
          }

          {currentStep === 4 &&
            <FamilyInfo 
              formData={formData} 
              handleChange={handleChange} 
            />
          }

          {currentStep === 5 &&
            <ChildrenInfo
              formData={formData}
              handleChange={handleChange}
            />
          }

          {currentStep === 6 &&
            <NannyPreferences 
              formData={formData}
              handleChange={handleChange}
            />
          }

          {currentStep === 7 &&
            <NannyCommunication
              formData={formData}
              handleChange={handleChange}
            />
          }

          {currentStep === 8 &&
            <DailyExpectations
              formData={formData}
              handleChange={handleChange}
            />
          }
          <div className="form-navigation">
            <div>
              {currentStep > 1 && <button type="button" className="theme-btn-five" onClick={handleBack}>Back</button>}
            </div>
            <div>
              {currentStep < 8 && <button type="button" className="theme-btn-five" onClick={handleNext}>Next</button>}
            </div>
            {currentStep === 8 && <button type="submit" className="theme-btn-two">Submit</button>}
          </div>
        </>
        </form>
    </div>

    {/* Modal */}
    {modalVisible && <ThankYouModal message={"Thank you for your application! We will be reaching out to your family soon."}/>}

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
