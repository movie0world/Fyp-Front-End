import React from "react";

export default function Card({ Heading, SubHeading, Color }) {
  return (
    <div
      style={{
        display: "inline-flex",
        background: "red",
        color: Color,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
        paddingLeft: "28px",
        fontWeight: "600",
        paddingRight: "28px",
        borderRadius: "15px",
      }}
    >
      <div>{Heading}</div>
      <div>{SubHeading}</div>
    </div>
  );
}
