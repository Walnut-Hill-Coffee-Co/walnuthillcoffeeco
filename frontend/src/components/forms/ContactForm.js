import { Field, Form, Formik, useField } from "formik";
import { navigate } from "gatsby";
import _isEmpty from "lodash.isempty";
import * as Yup from "yup";
import { encodeFormData } from "../../lib/encodeFormData";
import React from "react";
import { FormStyles } from "../styles/FormStyles";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Name is required.")
    .min(3, "Name must be at least 3 characters.")
    .max(30, "Name is too long"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string()
    .max(10)
    .min(7)
    .required("Please enter a valid U.S phone number"),
  subject: Yup.string(),
  message: Yup.string().required("Please leave a brief message").trim(),
});

const TextInput = ({label, ...props}) => {
  const [field, meta, helpers]= useField(props)
  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error && (
        <div className="error">{meta.error}</div>
      )}
    </>
  )
}

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        subject: "",
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
          .then(() => navigate("/thank-you", { replace: true }))
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
              <TextInput name="fullName" type="text" label="Name" id="fullName" placeholder="Full Name"  />

            </Form>
          </FormStyles>
        );
      }}
    </Formik>
  );
}
