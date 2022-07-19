import React from "react";
import { NairaIconStyled } from "./styles/NairaIcon.styled";

export default function NairaIcon({ amount }) {
  let amountToArry = Array.from(Math.floor(amount * 100).toString());
  
  if (amountToArry.length === 4) {
    amountToArry.splice(1, 0, ",");
  } else if (amountToArry.length === 5) {
    amountToArry.splice(2, 0, ",");
  } else if (amountToArry.length === 6) {
    amountToArry.splice(3, 0, ",");
  } else if (amountToArry.length === 6) {
    amountToArry.splice(4, 0, ",");
  } else if (amountToArry.length === 7) {
    amountToArry.splice(5, 0, ",");
  }
  else if (amountToArry.length === 8) {
    amountToArry.splice(6, 0, ",");
  }
  else if (amountToArry.length === 9) {
    amountToArry.splice(7, 0, ",");
  }
  
  return (
    <NairaIconStyled>
      <div className="naira-icon">N</div>
      <div className="amount">{amountToArry}</div>
    </NairaIconStyled>
  );
}
