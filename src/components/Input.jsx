import React, { useState } from "react";
import { Container } from "./styles/Container.styled";
import { InputStyled } from "./styles/Input.styled";

export default function Input(props) {



  

  const handleInput = (e) => {
   props.handleInput(e)

  };
  return (
    <>
     
        <InputStyled>
          <div>{props.name}</div>
          <input
            type={props.type}
            id="full-name"
            value={props.value}
            onInput={handleInput}
            required
            title={props.title}
            name={props.inputName}
          />
        </InputStyled>
      
    </>
  );
}
