import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../StyledElements";

const BannerParent = styled.div`
  ${tw` py-14 md:py-24 bg-primary text-body flex flex-col items-center justify-center text-center w-full`}
`;

const BannerHeader = styled.h2`
  ${tw`text-xl font-Quicksand font-medium pb-5`}
`;

const BannerImageContainer = styled.div`
  ${tw`w-[90%] lg:w-full`}
`;
const BannerImage = styled.img``;

const BannerContent = styled.div`
  ${tw`w-[100%] flex flex-col items-center justify-center`}
`;
export const BannerSection = ({ title, imgSrc }) => {
  return (
    <BannerParent>
      <Container>
        <BannerContent>
          <BannerHeader>{title}</BannerHeader>
          <BannerImageContainer>
            <BannerImage src={imgSrc} />
          </BannerImageContainer>
        </BannerContent>
      </Container>
    </BannerParent>
  );
};
