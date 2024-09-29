import React from "react";

const BillingDetails = () => {
  return (
    <div className="user-profile-data">
      <div className="row">
        <div className="col-lg-6">
          <input
            type="text"
            placeholder="First Name*"
            className="single-input-wrapper"
          />
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            placeholder="Last Name*"
            className="single-input-wrapper"
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            placeholder="Company Name*"
            className="single-input-wrapper"
          />
        </div>
        <div className="col-12">
          <select className="theme-select-menu">
            <option defaultValue="">Country*</option>
            <option defaultValue="AF">Afghanistan</option>
            <option defaultValue="AX">&Aring;land Islands</option>
            <option defaultValue="AL">Albania</option>
            <option defaultValue="DZ">Algeria</option>
            <option defaultValue="AS">American Samoa</option>
            <option defaultValue="AD">Andorra</option>
          </select>
        </div>
        <div className="col-12">
          <input
            type="text"
            placeholder="Street Address*"
            className="single-input-wrapper"
          />
        </div>
        <div className="col-lg-4">
          <input
            type="text"
            placeholder="Town/City*"
            className="single-input-wrapper"
          />
        </div>
        <div className="col-lg-4">
          <input
            type="text"
            placeholder="State*"
            className="single-input-wrapper"
          />
        </div>
        <div className="col-lg-4">
          <input
            type="text"
            placeholder="Zip Code*"
            className="single-input-wrapper"
          />
        </div>
        <div className="col-lg-6">
          <input
            type="email"
            placeholder="Email Address*"
            className="single-input-wrapper"
          />
        </div>
        <div className="col-lg-6">
          <input
            type="number"
            placeholder="Phone Number*"
            className="single-input-wrapper"
          />
        </div>
        <div className="col-12">
          <ul className="checkbox-list style-none">
            <li>
              <input type="checkbox" id="new-account" />
              <label htmlFor="new-account">Create Account?</label>
            </li>
            <li>
              <input type="checkbox" id="shipping" />
              <label htmlFor="shipping">Ship to Different Address?</label>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <div className="other-note-area">
            <p>Order Note (Optional)</p>
            <textarea></textarea>
          </div>
          {/* <!-- /.other-note-area --> */}
        </div>
      </div>
      {/* <!-- /.row --> */}
    </div>
  );
};

export default BillingDetails;
