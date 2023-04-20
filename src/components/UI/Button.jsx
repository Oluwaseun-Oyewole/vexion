import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ButtonStyles = styled.button`
  background: ${({ bg }) => (bg ? bg : "#1E1E1E")};
  border-radius: 30px;
  color: ${({ color }) => (color ? color : "#fff")};
  opacity:${({ opacity }) => (opacity ? 0 : 0)}
  outline: none;
  cursor: pointer;
  font-weight: bold;
  padding: ${({ buttonPaddingX, buttonPaddingY }) =>
    buttonPaddingX && buttonPaddingY
      ? `${buttonPaddingX} ${buttonPaddingY}`
      : "10px 30px"};
  font-size:14px;
  border: 1px ${({ borderColor }) =>
    borderColor ? borderColor : "black"} solid ;
  ${tw`font-satoshi`}
  box-shadow: ${({ buttonShadow }) =>
    buttonShadow && "inset 0px 10px 25px rgba(230, 221, 254, 0.3)"};

    &:hover{
      ${tw`opacity-50 transition-all duration-700 ease-in-out delay-300`}
    };

@media screen and (max-width:960px){
padding:13px 35px;
font-size:12px;
}

@media screen and (max-width:500px){
  font-size:13px;
  
  }
`;

export const Button = ({
  children,
  bg,
  borderColor,
  color,
  buttonShadow,
  buttonPaddingX,
  buttonPaddingY,
}) => {
  return (
    <ButtonStyles
      bg={bg}
      borderColor={borderColor}
      color={color}
      buttonShadow={buttonShadow}
      buttonPaddingX={buttonPaddingX}
      buttonPaddingY={buttonPaddingY}
    >
      {children}
    </ButtonStyles>
  );
};
