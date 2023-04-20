import React from "react";
import { Container } from "../StyledElements";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../UI/Button";

const CommunityContainer = styled.div`
  ${tw`pt-14 md:pt-16 lg:pt-28 bg-primary text-white flex items-center justify-between`}
`;
const CommunityContent = styled.div`
  ${tw`text-center flex-col lg:flex-row flex lg:items-center justify-center lg:justify-between w-[320px] md:w-[600px] lg:w-[800px] h-[140px] lg:h-[190px] p-5 lg:p-7 bg-frame-2 bg-no-repeat bg-contain bg-center gap-3 md:gap-5 lg:gap-0`}
`;

const CommunityTitle = styled.h2`
  ${tw`md:text-xl lg:text-3xl font-bold font-Quicksand uppercase `}
`;
const CommunityContentContainer = styled.div``;
const CommunityButton = styled.div``;

export const Community = () => {
  return (
    <CommunityContainer>
      <Container>
        <CommunityContentContainer className="bg-frame-1 rounded-xl">
          <CommunityContent>
            <CommunityTitle>Join Our Community</CommunityTitle>
            <CommunityButton>
              <Button
                children="Learn more"
                borderColor="#7F7F90"
                bg="#000000"
                buttonPaddingX="16px"
                buttonPaddingY="40px"
              />
            </CommunityButton>
          </CommunityContent>
        </CommunityContentContainer>
      </Container>
    </CommunityContainer>
  );
};
