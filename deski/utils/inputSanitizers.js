export const allowOnlyLetters = (event, handleChange) => {
    const { name, value } = event.target;
    const textOnlyValue = value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
    handleChange({ target: { name, value: textOnlyValue } });
};

export const allowOnlyNumbers = (event, handleChange) => {
    const { name, value } = event.target;
    const numericValue = value.replace(/\D/g, ""); // Allow only numbers
    handleChange({ target: { name, value: numericValue } });
};
 
export const isValidEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

export const isValidZipCode = (zip) => {
  const zipRegex = /^\d{5}$/;
  return zipRegex.test(zip);
}

export const formatZipCode = (event, handleChange) => {
  const { name, value } = event.target;
  const numericValue = value.replace(/\D/g, ""); // Allow only numbers
  const limitedValue = numericValue.slice(0, 5); // Restrict to 5 digits
  handleChange({ target: { name, value: limitedValue } });
};

export const formatPhoneNumber = (event, handleChange) => {
  const { name, value } = event.target;
  let numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters

  // Format phone number depending on the length
  if (numericValue.length > 10) {
    numericValue = numericValue.slice(0, 11); // Limit to 11 digits
  }

  let formattedValue = numericValue;

  if (numericValue.length === 11) {
    // Format as +1 (XXX)XXX-XXXX for 11 digits
    const countryCode = numericValue[0];
    const area = numericValue.slice(1, 4);
    const prefix = numericValue.slice(4, 7);
    const line = numericValue.slice(7, 11);
    formattedValue = `+${countryCode}(${area})${prefix}-${line}`;
  } else if (numericValue.length === 10) {
    // Format as (XXX)XXX-XXXX for 10 digits
    const area = numericValue.slice(0, 3);
    const prefix = numericValue.slice(3, 6);
    const line = numericValue.slice(6, 10);
    formattedValue = `(${area})${prefix}-${line}`;
  }

  // Call handleChange with the formatted phone number
  handleChange({ target: { name, value: formattedValue } });
};
