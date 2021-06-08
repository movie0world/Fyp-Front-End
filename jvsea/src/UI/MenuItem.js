import React from "react";

export default function MenuItem({ Icon, subheading, active }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
        background: active && "#242333",
      }}
    >
      <Icon
        fontSize="large"
        co
        style={{ fontSize: "40px", color: active && "white" }}
      />
      <span style={{ fontSize: "13px", color: active && "white" }}>
        {subheading}
      </span>
    </div>
  );
}
