import React from "react";
import { Colors } from "../Constant/Colors";
import MyButton from "../UI/MyButton";

console.log(Colors.Primary);
export default function Nav() {
  return (
    <div
      style={{
        backgroundColor: Colors.Primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px",
      }}
    >
      <div style={{ flex: 1 }}>
        <p
          style={{
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          JVsea
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <MyButton fillColor="yellow" style={{ marginRight: "20px" }}>
          Market Place
        </MyButton>
        <MyButton style={{ marginRight: "25px" }}>Login In</MyButton>
      </div>
    </div>
  );
}
