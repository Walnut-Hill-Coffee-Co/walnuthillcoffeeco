import { FormiumForm } from '@formium/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { formium } from '../../lib/formium';
import { FormStyles } from '../styles/FormStyles';
import { customComponents } from './CustomComponent';

export default function ContactForm() {
  const data = useStaticQuery(graphql`
    query CONTACT_FORM {
      formiumForm(slug: { eq: "contact-form" }) {
        id
        name
        slug
        projectId
        schema
        createAt
        version
      }
    }
  `);

  return (
    <FormStyles>
      <h2>Get in touch!</h2>
      <FormiumForm
        components={customComponents}
        data={data.formiumForm}
        onSubmit={async (values) => {
          // Send values to formium
          await formium.submitForm("contact-form", values);
          alert("Success");
        }}
      />
    </FormStyles>
  );
}