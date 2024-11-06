  export const validateParentContactInfo = (formData) => {
    const errors = {};
    if (!formData.primaryContact) {
      errors.primaryContact = "Please select a primary contact.";
    }

    if ((formData.primaryContact === "Parent 1" || formData.primaryContact === "Both") && !formData.parents.parent1.firstName) {
      errors.parent1FirstName = "First name is required for Parent 1.";
    }
    if ((formData.primaryContact === "Parent 1" || formData.primaryContact === "Both") && !formData.parents.parent1.lastName) {
      errors.parent1LastName = "Last name is required for Parent 1.";
    }
    if ((formData.primaryContact === "Parent 1" || formData.primaryContact === "Both")) {
        if (!formData.parents.parent1.email) {
          errors.parent1Email = "Email is required for Parent 1.";
        } else if (!isValidEmail(formData.parents.parent1.email)) {
          errors.parent1Email = "Please enter a valid email address for Parent 1.";
        }
    }
    if ((formData.primaryContact === "Parent 1" || formData.primaryContact === "Both") && !formData.parents.parent1.phone) {
      errors.parent1Phone = "Phone number is required for Parent 1.";
    }
  
    if ((formData.primaryContact === "Parent 2" || formData.primaryContact === "Both") && !formData.parents.parent2.firstName) {
      errors.parent2FirstName = "First name is required for Parent 2.";
    }
    if ((formData.primaryContact === "Parent 2" || formData.primaryContact === "Both") && !formData.parents.parent2.lastName) {
      errors.parent2LastName = "Last name is required for Parent 2.";
    }
    if ((formData.primaryContact === "Parent 2" || formData.primaryContact === "Both")) {
        if (!formData.parents.parent2.email) {
          errors.parent2Email = "Email is required for Parent 2.";
        } else if (!isValidEmail(formData.parents.parent2.email)) {
          errors.parent2Email = "Please enter a valid email address for Parent 2.";
        }
    }
    if ((formData.primaryContact === "Parent 2" || formData.primaryContact === "Both") && !formData.parents.parent2.phone) {
      errors.parent2Phone = "Phone number is required for Parent 2.";
    }
  
    return errors;
  };

  export const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
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
    }
  
    return errors;
  };
  
  // Add additional validation functions for other steps as needed
  