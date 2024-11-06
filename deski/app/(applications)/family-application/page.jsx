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
import { validateParentContactInfo, validateAddressInfo } from "@/services/validation";

const FamilyApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

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
    const { name, value, type, checked } = e.target;
  
    // Handle checkbox inputs
    if (type === "checkbox") {
      const updatedValue = checked;
      setFormData((prevData) => ({
        ...prevData,
        [name]: updatedValue,
      }));
      return;
    }
  
    // For nested properties, split the name by dots to traverse the structure
    const nameParts = name.split('.');
    if (nameParts.length === 1) {
      // Top-level property
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (nameParts.length === 2) {
      // Two-level deep (e.g., parent1.firstName)
      setFormData((prevData) => ({
        ...prevData,
        [nameParts[0]]: {
          ...prevData[nameParts[0]],
          [nameParts[1]]: value,
        },
      }));
    } else if (nameParts.length === 3) {
      // Three-level deep (e.g., workingHours.Monday.start)
      setFormData((prevData) => ({
        ...prevData,
        [nameParts[0]]: {
          ...prevData[nameParts[0]],
          [nameParts[1]]: {
            ...prevData[nameParts[0]][nameParts[1]],
            [nameParts[2]]: value,
          },
        },
      }));
    }
  };
  
  
  const scrollToForm = () => {
    const element = formRef.current;

    // Scroll to the element using scrollIntoView (without offset)
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

  const handleNext = () => {
    let validationErrors = {};

    if (currentStep === 1) {
      validationErrors = validateParentContactInfo(formData);
    } else if (currentStep === 2) {
      validationErrors = validateAddressInfo(formData);
    }
    // Add more validation checks for other steps here

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Prevent moving to the next step if there are validation errors
    }

    setCurrentStep((prev) => prev + 1);
    scrollToForm();
  };
  
  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
    scrollToForm();
  };

  const handlePageNumberClick = (pageNumber) => {
    setCurrentStep(pageNumber);
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
            />
          }

          {currentStep === 3 &&
            <>
            <CandidateTypeSelection 
              candidateType={formData.candidateType} 
              setCandidateType={(type) => setFormData({ ...formData, candidateType: type })}
            />
            <WorkingHoursSelection 
              workingHours={formData.workingHours} 
              handleTimeChange={handleTimeChange} 
            />
            <StartDateInput 
              startDate={formData.startDate} 
              handleChange={handleChange} 
            />
          </>
          }

          {currentStep === 4 &&
            <NannyPreferences 
              formData={formData}
              handleChange={handleChange}
              handleCheckboxChange={handleCheckboxChange}
            />
          }

          {currentStep === 5 &&
            <ChildrenInfo
              formData={formData}
              handleChange={handleChange}
              handleCheckboxChange={handleCheckboxChange}
            />
          }

          {currentStep === 6 &&
            <FamilyInfo 
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
            {currentStep === 8 && <button type="submit">Submit</button>}
          </div>
        </>
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
