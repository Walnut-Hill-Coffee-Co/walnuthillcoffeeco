
import React from "react";

export const customComponents = {
  ...defaultComponents,
  Header: () => null,
  FieldWrapper: (props) => <>{props.children}</>,
  FormControl: (props) => {
    return (

    <div className="form-control">
      <label htmlFor={props.labelFor}>{props.label}</label>
      {props.children}
      <small>{props.error}</small>
    </div>
  )},
  Radio: ({ label, ...props }) => {
    return (
      <label className="radio">
        <span className="radio__input">
          <input type="radio" {...props} />
          <span className="radio__control" />
        </span>
        <span className="radio__label">{label}</span>
      </label>
    );
  },
  TextInput: (props) => {

    return (
      <input {...props} />
    )
  },
  TextArea: (props) => {
    return (
      <textarea {...props}></textarea>
    )
  }
};
