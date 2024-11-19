import React from 'react';
import Link from 'next/link';

const ThankYouModal = ({ message }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{message}</h3>
        <p>Your application has been successfully submitted.</p>
        <Link className="theme-btn-five"  href="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouModal;
