import { Field, useField } from "formik";
import React from "react";

export const TextInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="form-control">
      <label htmlFor={props.name}>{label}</label>
      <Field {...props} />

      {meta.touched && meta.error && (
        <small className="error">{meta.error}</small>
      )}
    </div>
  );
};
