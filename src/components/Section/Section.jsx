import { useState } from "react";

export const Section = ({children}) => {

  return (
    <section
      style={{
        display: "flex",
        height: 780,
        gap: 10,
        padding: 5,
      }}
    >
      {children}
    </section>
  );
};
