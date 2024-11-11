import React from 'react';

function CustomInput({ maxLength = 50, ...props }) {
  return <input maxLength={maxLength} {...props} />;
}

export default CustomInput;
