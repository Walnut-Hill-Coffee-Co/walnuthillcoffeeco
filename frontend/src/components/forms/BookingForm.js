import { FormiumForm } from "@formium/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { formium } from "../../lib/formium";
import { FormStyles } from "../styles/FormStyles";
import { customComponents } from "./CustomComponent";



export default function BookingForm() {
  const data = useStaticQuery(graphql`
    query BOOKING_FORM {
      formiumForm(id: { eq: "6075e4940304f100014f6c86" }) {
        id
        name
        slug
        projectId
        schema
        createAt
        version
        updateAt
      }
    }
  `);

  return (
    <FormStyles>
      <h2>Book us for you next event!</h2>
      <FormiumForm
        components={customComponents}
        data={data.formiumForm}
        onSubmit={async (values) => {
          // Send values to formium
          await formium.submitForm("new-booking-form", values);
          alert("Success");
        }}
      />
    </FormStyles>
  );
}
