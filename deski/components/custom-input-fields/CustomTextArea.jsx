import React from 'react';

function CustomTextArea({ maxLength = 300, ...props }) {
  return <textarea maxLength={maxLength} {...props} />;
}

export default CustomTextArea;
