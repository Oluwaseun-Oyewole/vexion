import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "../../StyledElements";
import { AppCards } from "./AppCards";

const VexionAppContainer = styled.div`
  ${tw` lg:pt-8 bg-primary text-body text-center flex items-center justify-center  tracking-wide font-Quicksand`}
`;
const VexionAppHeader = styled.h3`
  ${tw`text-white text-2xl md:text-5xl py-2 md:py-3 font-medium uppercase`}
`;
const VexionAppHeader1 = styled.h4`
  ${tw`text-base md:text-2xl text-linear font-medium uppercase`}
`;
const VexionAppParagraph = styled.p`
  ${tw`lg:py-3 text-sm md:text-base w-[80%] md:w-full mx-auto md:mx-0`}
`;
export const VexionApp = () => {
  return (
    <VexionAppContainer>
      <Container>
        <VexionAppHeader1>Vexion App</VexionAppHeader1>
        <VexionAppHeader>Universal Application</VexionAppHeader>
        <VexionAppParagraph>
          Our app makes your internet control smarter than you think.
        </VexionAppParagraph>

        <AppCards />
      </Container>
    </VexionAppContainer>
  );
};
