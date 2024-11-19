  import { isValidEmail, isValidZipCode } from "./inputSanitizers";
  
  export const validateParentContactInfo = (formData) => {
    const errors = {};

    if (!formData.parent.firstName) {
      errors.parentFirstName = "First name is required.";
    }
    if (!formData.parent.lastName) {
      errors.parentLastName = "Last name is required.";
    }
    if (!formData.parent.email) {
      errors.parentEmail = "Email is required.";
    } else if (!isValidEmail(formData.parent.email)) {
      errors.parentEmail = "Please enter a valid email address.";
    }
    if (
      formData.parent.phone && // Check if the phone field is not empty
      formData.parent.phone.replace(/\D/g, "").length < 10 // Validate only if a phone number is provided
    ) {
      errors.parentPhone = "Phone number must be at least 10 digits.";
    }
      
    return errors;
  };

  
  export const validateAddressInfo = (formData) => {
    const errors = {};
    if (!formData.addressLine1) {
      errors.addressLine1 = "Address Line 1 is required.";
    }
    if (!formData.city) {
      errors.city = "City is required.";
    }
    if (!formData.state) {
      errors.state = "State is required.";
    }
    if (!formData.zip) {
      errors.zip = "Zip code is required.";
    } else if (!isValidZipCode(formData.zip)) {
      errors.zip = "Enter valid zip code."
    }
  
    return errors;
  };
  
  export const validateStartDate = (formData) => {
    const errors = {};
    if (!formData.startDate || formData.startDate === 'mm/dd/yyyy') {
      errors.startDate = "Start date is required."
    }
    return errors;
  };

  export const validateNannyApplication = (formData) => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "First name is required.";
    }
    if (!formData.lastName) {
      errors.lastName = "Last name is required.";
    }
    if (!formData.email) {
        errors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
          errors.email = "Please enter a valid email address.";
      }
    if (
      formData.phone && // Check if the phone field is not empty
      formData.phone.replace(/\D/g, "").length < 10 // Validate only if a phone number is provided
    ) {
      errors.phone = "Phone number must be at least 10 digits.";
    }
    return errors;
  };