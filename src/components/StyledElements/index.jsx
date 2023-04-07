import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`max-w-[1400px] mx-auto my-0`}
`;

export const ButtonStyles = styled.button`
  background: ${({ bg }) => (bg ? bg : "1E1E1E")};
  border-radius: 10px;
  color: ${({ color }) => (color ? color : "1E1E1E")};
  outline: none;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px;
`;
