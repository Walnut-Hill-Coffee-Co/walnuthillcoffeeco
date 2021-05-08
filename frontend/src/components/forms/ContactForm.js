import { Field, Form, Formik } from "formik";
import { navigate } from "gatsby";
import _isEmpty from "lodash.isempty";
import { encodeFormData } from "../../lib/encodeFormData";
import React from "react";
import { FormStyles } from "../styles/FormStyles";
import { validationSchema } from "../../lib/validationSchema";
import { TextInput } from "./TextInput";

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        subject: "Other",
        message: "",
      }}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        //make async call
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodeFormData({ "form-name": "contact-form", ...data }),
        })
          .then(() => navigate("/thank-you/", { replace: true }))
          .catch((error) =>
            alert(
              "Oops.. Something went wrong. Please contact us with this error message: " +
                error
            )
          );

        resetForm();
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting, errors }) => {
        console.log({isSubmitting, errors})
        return (
          <FormStyles>
            <h2>Get in touch!</h2>
            <Form
              id="contact"
              name="contact-form"
              data-netlify="true"
              netlify-honeypot="bot-field"
              method="POST"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <input type="hidden" name="bot-field" />
              <TextInput
                name="fullName"
                type="text"
                label="Name"
                id="fullName"
                placeholder="Full Name"
              />
              <TextInput
                name="email"
                type="email"
                label="Email"
                id="email"
                placeholder="Please enter your email"
              />
              <TextInput
                name="phone"
                type="text"
                label="Phone"
                id="phone"
                placeholder="Please enter your phone number."
              />
              <div
                className="form-control radio--wrapper"
                id="subject-radio-group"
              >
                Subject
              </div>
              <div
                role="group"
                className="form-control__radio"
                aria-labelledby="subject-radio-group"
              >
                <label className="radio">
                  <span className="radio__input">
                    <Field type="radio" name="subject" value="Coffee Truck" />
                    <span className="radio__control"></span>
                  </span>
                  <span className="radio__label">Coffee Truck</span>
                </label>
                <label className="radio">
                  <span className="radio__input">
                    <Field type="radio" name="subject" value="Venue Rental" />
                    <span className="radio__control"></span>
                  </span>
                  <span className="radio__label">Venue Rental</span>
                </label>
                <label className="radio">
                  <span className="radio__input">
                    <Field type="radio" name="subject" value="Other" />
                    <span className="radio__control"></span>
                  </span>
                  <span className="radio__label">Other</span>
                </label>
              </div>
              <TextInput
                id="message"
                name="message"
                as="textarea"
                rows="7"
                label="Message"
                type="text"
                className="message"
                values={values.message}
                placeholder="Please leave us a brief, but detailed message."
              />
              <button
                className={isSubmitting || !_isEmpty(errors) ? "disabled" : ""}
                disabled={isSubmitting || !_isEmpty(errors)}
                type="submit"
              >
                Submit
              </button>
            </Form>
          </FormStyles>
        );
      }}
    </Formik>
  );
}
