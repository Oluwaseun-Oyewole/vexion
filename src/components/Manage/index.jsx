import React from "react";
import { Container } from "../StyledElements";
import styled from "styled-components";
import tw from "twin.macro";
import { managementData } from "../../../utils/data";
import { Tilt } from "../UI/Tilt";
import { Button } from "../UI/Button";

const ManagementParent = styled.div`
  ${tw`lg:pt-20 bg-primary text-white font-Quicksand`}
`;

const ManageContent = styled.div`
  ${tw`flex flex-col justify-between`}
  > div:last-child {
    padding-top: 100px;
  }

  @media screen and (max-width: 960px) {
    max-width: 85%;
    margin: auto;
    > div:last-child {
      padding-top: 80px;
    }
  }

  @media screen and (max-width: 600px) {
    align-items: center;
    text-align: center;
    max-width: 97%;

    > div:last-child {
      padding-top: 70px;
    }
  }
`;
const ManageImage = styled.img`
  ${tw`lg:w-[420px]`}
`;
const ManageTitle = styled.h2`
  ${tw`uppercase py-1 lg:py-2 text-2xl lg:text-4xl font-bold tracking-wide`}
`;
const ManageDescriptions = styled.p`
  ${tw`text-[13px] lg:text-base text-body`}
`;
const ManageData = styled.div`
  ${tw` md:w-[80%] lg:w-[40%] xl:w-[25%]`}
`;
const ManageHeading = styled.h3`
  ${tw`pt-8 md:pt-0 lg:text-xl uppercase text-linear font-medium`}
`;

const ManageFlexContainer = styled.div`
  ${tw`flex flex-row items-center justify-center gap-20 w-full`}
  flex-direction:${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media screen and (max-width: 600px) {
    ${tw`flex-col items-center justify-center gap-0`}
  }

  @media screen and (max-width: 960px) {
    ${tw`w-[100%]`}
    > div:first-child {
      width: 55%;
    }

    > div:last-child {
      width: 70%;
    }
  }

  @media screen and (max-width: 500px) {
    ${tw`w-[100%]`}
    > div:first-child {
      width: 70%;
    }

    > div:last-child {
      width: 85%;
    }
  }
`;

const ButtonGroupContainer = styled.div`
  ${tw`pt-4 md:pt-6 flex gap-10 items-center justify-center  md:justify-start lg:items-start`}
`;
export const ManageSection = () => {
  return (
    <ManagementParent>
      <Container>
        <ManageContent>
          {managementData?.map((data, index) => {
            return (
              <ManageFlexContainer reverse={data.reverse} key={index}>
                <Tilt>
                  <ManageImage src={data.imgscr} />
                </Tilt>
                <ManageData>
                  <ManageHeading>{data.name}</ManageHeading>
                  <ManageTitle>{data.title}</ManageTitle>
                  <ManageDescriptions>{data.description}</ManageDescriptions>
                  <ButtonGroupContainer>
                    {data.buttonGroup ? (
                      <>
                        <Button
                          children="Sign In"
                          borderColor="#7F7F90"
                          bg="#000000"
                        />
                        <Button children="Sign Up" bg="#E6DDFE" color="#000" />
                      </>
                    ) : (
                      <Button
                        children="Get the app"
                        bg="#E6DDFE"
                        color="#000"
                        buttonPaddingX="13.5px"
                        buttonPaddingY="35px"
                      />
                    )}
                  </ButtonGroupContainer>
                </ManageData>
              </ManageFlexContainer>
            );
          })}
        </ManageContent>
      </Container>
    </ManagementParent>
  );
};
