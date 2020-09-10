import React from 'react'

import styled from "styled-components";


const Button = styled.label`
  color: blueviolet;
  font-size: 1rem;
   margin: 2em;
  padding: 0.5rem 1.5rem;
  border: 2px solid blueviolet;
  border-radius: 6px;
  &:hover{background-color:red};
`;

export default function SendButton(props) {
    const { label, handleOnClick } = props;
    return (
        <Button
            onClick={handleOnClick}
            className="btn btn-primary btn-block">{label}</Button>
    )
}
