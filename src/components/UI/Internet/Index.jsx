import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../../StyledElements";
import { Button } from "../Button";
import { vexiconAppData } from "../../../../utils/data";
import { Tilt } from "../Tilt";

const InternetParent = styled.div`
  ${tw`bg-primary text-white lg:py-10 max-w-[1350px] mx-auto`}
`;

const InternetContent = styled.div`
  ${tw`lg:flex flex-col justify-between`}
`;
const InternetContentParent = styled.div`
  @media screen and (max-width: 768px) {
    ${tw`flex flex-col items-center`}
  }
`;
const InternetParentController = styled.div`
  ${tw`flex items-center justify-between font-satoshi pb-10 lg:pb-10`};

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Quicksand;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: Quicksand;
  }
`;
const InternetHeading = styled.h2`
  ${tw`text-3xl md:text-4xl text-center lg:text-left lg:text-6xl py-3 uppercase font-medium font-Archivo lg:w-[80%]`}
`;
const InternetHeadingApp = styled.h3`
  ${tw`text-center lg:text-left md:text-xl`}
`;
const InternetParagraph = styled.p`
  ${tw`text-body lg:py-5 text-center lg:text-left lg:w-[40%]`}

  @media screen and (max-width: 1024px) {
    ${tw`w-[90%]`}
  }
`;

const InternetImage = styled.img`
  ${tw`mt-5 md:mt-12 lg:mt-0 lg:ml-10 w-[300px] md:w-[450px] lg:w-[600px] relative left-10 lg:left-20`}

  @media screen and (max-width: 350px) {
    width: 250px;
  }
`;
const ImageContainer = styled.div`
  ${tw`relative md:flex items-center justify-between  bg-no-repeat bg-cover bg-top`};

  @media screen and (min-width: 768px) {
  background-image: url("/assets/img/Vector (1).png)
  }
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
const InternetTab = styled.div`
  ${tw` pt-10 xl:pt-0 self-center lg:self-end cursor-pointer`};

  @media screen and (max-width: 1024px) {
    ${tw`grid grid-cols-2 w-full`}
  }

  @media screen and (max-width: 600px) {
    ${tw`block`}
  }
`;

const InternetTabContainer = styled.div`
  ${tw`py-4 flex items-center lg:justify-end`}

  > div:first-child {
    ${tw`py-4 flex w-[60%] items-center lg:items-start gap-5`}
  }

  @media screen and (max-width: 1024px) {
    ${tw`flex items-center justify-center`}

    > div:first-child {
      ${tw`pt-5 w-[80%]`}
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;

    > div:first-child {
      ${tw`w-[85%]`}
    }
  }
`;

const InternetTabHeading = styled.h3`
  ${tw`text-body`}
  @media screen and (max-width:1024px) {
    color: #e6ddfe;
  }
`;
const InternetTabText = styled.p`
  ${tw`text-body text-[12px] lg:w-[70%]`}
`;

const ButtonContainer = styled.div`
  ${tw`py-5 md:py-0 md:hidden lg:flex lg:self-end`}

  @media screen and (max-width: 1024px) {
    ${tw`w-full text-center pb-5`}
  }
`;

const InternetLine = styled.div`
  ${tw`h-20 w-2 rounded-lg`}
  background:${({ bg }) => (bg ? bg : "#3B3B44")};
`;

const ActiveToggler = styled.div`
  ${tw`-mt-20 xl:mt-0 hidden lg:flex items-center justify-center gap-5`}
  >span:nth-child(2) {
    ${tw`bg-white`}
  }

  > span {
    ${tw`bg-body rounded-full h-3 w-3`}
  }
`;

const InternetSpan = styled.span``;
export const Internet = () => {
  return (
    <InternetParent>
      <Container>
        <InternetParentController>
          <div>
            <InternetContent>
              <InternetContentParent>
                <InternetHeadingApp>Vexicon App</InternetHeadingApp>
                <InternetHeading>Internet made effortless</InternetHeading>
                <InternetParagraph>
                  Our app makes your internet control smarter than you think
                </InternetParagraph>
              </InternetContentParent>
            </InternetContent>

            <ImageContainer>
              <ButtonContainer>
                <Button
                  children="Get the app"
                  bg="#E6DDFE"
                  color="#000"
                  buttonPaddingX="12px"
                  buttonPaddingY="30px"
                />
              </ButtonContainer>
              <Tilt>
                <InternetImage src="/assets/img/Phone Horizontal.png" />
              </Tilt>
            </ImageContainer>
          </div>

          <InternetTab>
            {vexiconAppData?.map(
              ({ title, description, activestate, id }, index) => {
                const handleActiveState = () => {
                  if (id === index) {
                    setActive(active);
                  } else {
                    setActive(!active);
                  }
                };

                return (
                  <InternetTabContainer key={index}>
                    <div onClick={handleActiveState}>
                      <InternetLine
                        bg={activestate && "#E6DDFE"}
                      ></InternetLine>
                      <div className="lg:justify-end">
                        <InternetTabHeading>{title}</InternetTabHeading>
                        <InternetTabText>{description}</InternetTabText>
                      </div>
                    </div>
                  </InternetTabContainer>
                );
              }
            )}
          </InternetTab>
        </InternetParentController>
      </Container>

      <ActiveToggler>
        <InternetSpan />
        <InternetSpan />
        <InternetSpan />
      </ActiveToggler>
    </InternetParent>
  );
};
