import React from 'react'
import Layout from '../components/Layout'
export default function ThankYouPage({location}) {
  return (
    <Layout location={location}>
      <div style={{display: `flex`, minHeight: `70vh`, flexDirection: `column`, alignItems: `center`, justifyContent: 'center'}}>
        <h1>Thanks for reaching out!</h1>
        <p>We will be in touch with you ASAP.</p>
      </div>
    </Layout>
  )
}
