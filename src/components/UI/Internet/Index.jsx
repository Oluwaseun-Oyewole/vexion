import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../../StyledElements";
import { Button } from "../Button";
import { vexiconAppData } from "../../../../utils/data";
import { Tilt } from "../Tilt";

const InternetParent = styled.div`
  ${tw`bg-primary text-white `}
`;

const InternetContent = styled.div`
  ${tw`flex flex-col justify-between `}
`;
const InternetContentParent = styled.div``;
const InternetParentController = styled.div`
  ${tw`flex items-center justify-between font-satoshi pb-20`};
`;
const InternetHeading = styled.h2`
  ${tw`text-6xl py-3 uppercase font-medium font-Archivo w-[80%]`}
`;
const InternetHeadingApp = styled.h3`
  ${tw`text-xl `}
`;
const InternetParagraph = styled.p`
  ${tw`text-body py-5 w-[40%]`}
`;
const InternetImage = styled.img`
  ${tw`ml-10 w-[600px] relative left-20`}
`;
const ImageContainer = styled.div`
  ${tw`relative flex items-center justify-between bg-internet-img bg-no-repeat bg-cover bg-top`}
`;
const InternetTab = styled.div`
  ${tw`self-end cursor-pointer`}
`;

const InternetTabContainer = styled.div`
  ${tw`py-4 flex items-center justify-end`}

  > div:first-child {
    ${tw`py-4 flex w-[60%] gap-5`}
  }
`;

const InternetTabHeading = styled.h3`
  ${tw`text-body`}
`;
const InternetTabText = styled.p`
  ${tw`text-body text-[12px] w-[70%]`}
`;

const ButtonContainer = styled.div`
  ${tw`self-end`}
`;

const InternetLine = styled.div`
  ${tw`h-20 w-2 rounded-lg`}
  background:${({ bg }) => (bg ? bg : "#3B3B44")};
`;

const ActiveToggler = styled.div`
  ${tw` flex items-center justify-center gap-5`}
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
                    // setActive(!activestate);
                    setActive(active);
                    // console.log("id", id, "index", index);
                  } else {
                    console.log("false");
                    setActive(!active);
                  }
                  // console.log("Testing Our Active State!!!!", active);
                };

                return (
                  <InternetTabContainer key={index}>
                    <div onClick={handleActiveState}>
                      <InternetLine
                        bg={activestate && "#E6DDFE"}
                      ></InternetLine>
                      <div className="justify-end">
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
