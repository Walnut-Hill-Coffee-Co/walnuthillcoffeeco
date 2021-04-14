import { defaultComponents } from "@formium/react";
import React from 'react';

export const customComponents = {
  ...defaultComponents,
  Header: () => null,
  FieldWrapper: (props) => <>{props.children}</>,
  FormControl: (props) => (
    <div className="form-control">
      <label htmlFor={props.labelFor}>{props.label}</label>
      {props.children}
      <small>{props.error}</small>
    </div>
  ),
};