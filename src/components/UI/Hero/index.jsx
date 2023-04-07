import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../../StyledElements";
import { Button } from "../Button";
import { Tilt } from "../Tilt";

const HeroParent = styled.div`
  ${tw`bg-primary text-white flex items-center pt-6 md:pt-14 lg:pt-16 justify-center flex-col font-satoshi text-center w-full`}
`;

const HeaderContent = styled.div`
  ${tw`text-center`}
`;
const HeaderContainer = styled.div`
  ${tw` uppercase font-bold tracking-wide md:tracking-widest `}
`;
const HeroHeading = styled.h1`
  ${tw`text-2xl md:text-4xl lg:text-6xl lg:flex items-center justify-center`}
`;

const HeroHeadingManage = styled.h1`
  ${tw`text-center text-base lg:text-3xl my-2 md:my-4`}
`;

const HeroHeadingSatellite = styled.h1`
  ${tw`text-center text-2xl md:text-3xl lg:text-5xl`}
  color:#E6DDFE;
`;
const HeroSpan = styled.span`
  ${tw`mr-1 lg:-mt-6 lg:text-xl lg:mr-2`}
`;
const HeroParagraph = styled.p`
  ${tw`text-body my-7 text-sm w-[90%] mx-auto lg:w-full  md:text-base`}
`;

const HeroImage = styled.div`
  background-image: url("./img/Image.png");
  height: auto;
  width: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  ${tw`w-[100%]`}

  @media screen and (max-width:960px) {
  }
`;

const ButtonContainer = styled.div`
  ${tw`mt-10 pb-10 flex items-center justify-center gap-5`}
`;

export const Hero = () => {
  const options = {
    scale: 1,
    speed: 1000,
    max: 30,
  };

  return (
    <HeroParent>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <HeaderContent>
            <HeaderContainer>
              <HeroHeading>
                <HeroSpan>A</HeroSpan> Universal Application
              </HeroHeading>
              <HeroHeadingManage>To Manage Your</HeroHeadingManage>
              <HeroHeadingSatellite>Satellite Internet</HeroHeadingSatellite>
            </HeaderContainer>
            <HeroParagraph>
              Control your internet. Check the latency (ms). Keep an eye on the
              transfer. Test the speed.
            </HeroParagraph>
            <ButtonContainer>
              <Button
                children="Learn more"
                borderColor="#7F7F90"
                bg="#000000"
                buttonPaddingX="14px"
                buttonPaddingY="40px"
              />
              <Button
                children="Get the app"
                bg="#E6DDFE"
                color="#000"
                buttonPaddingX="14px"
                buttonPaddingY="40px"
              />
            </ButtonContainer>
          </HeaderContent>
        </div>
      </Container>

      <Tilt options={options}>
        <HeroImage>
          <img
            src="/assets/img/Phones.png"
            alt=""
            className="w-[85%] mt-8 md:mt-20 lg:mt-14 md:w-[450px] lg:w-[750px]"
          />
        </HeroImage>
      </Tilt>
    </HeroParent>
  );
};
