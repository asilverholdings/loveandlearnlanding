'use client'


import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const HeaderPopupForm = () => {
  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(" Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    sendMessage: Yup.string().required("Please,leave us a message."),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: " + JSON.stringify(data));
    e.target.reset();
  }

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="messages"></div>
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-20">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                {...register("name")}
                className={`${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name?.message}</div>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-20">
              <label>Email*</label>
              <input
                placeholder="Email Address"
                name="email"
                type="text"
                {...register("email")}
                className={` ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email?.message}</div>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <label>Message*</label>
              <textarea
                placeholder="Your message"
                name="sendMessage"
                type="text"
                {...register("message")}
                className={`${errors.sendMessage ? "is-invalid" : ""}`}
              ></textarea>
              {errors.sendMessage && (
                <div className="invalid-feedback">
                  {errors.sendMessage?.message}
                </div>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button className="theme-btn-seven w-100">Send Message</button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default HeaderPopupForm;
