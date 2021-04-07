import React from "react";

export default function PageUnderConstruction() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <StaticImage src="../images/favicon.png" layout="fixed" width={300} />
      <h1>Page under construction!</h1>
      <p>
        We're currently building something awesome! Check back shortly for new
        updates!
      </p>
    </div>
  );
}
