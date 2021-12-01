import React from "react";
import { useHistory } from "react-router";
import MyButton from "../UI/MyButton";

export default function FourOFour() {
  const history = useHistory();

  return (
    <div>
      <MyButton onPress={() => history.replace("/")}>Back To Home </MyButton>
    </div>
  );
}
