import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../StyledElements";
import { pricingdata } from "../../../utils/data";
import { Button } from "../UI/Button";
import { AiOutlineCheck } from "react-icons/ai";
import { Tilt } from "../UI/Tilt";

const PricingContainer = styled.div`
  ${tw`pt-14 lg:pt-24 bg-primary text-white font-Quicksand`}
`;

const PricingHeader = styled.h2`
  ${tw`text-base md:text-xl text-linear uppercase font-medium`}
`;
const PricingTitle = styled.h1`
  ${tw`text-3xl md:text-7xl py-2 uppercase font-medium`}
`;
const PricingParagraph = styled.p`
  ${tw`text-body font-medium text-sm`}
`;
const PricingContent = styled.div`
  ${tw`text-center`}
`;
const PricingCards = styled.div`
  ${tw`md:pt-10 lg:pt-20 w-full flex items-center justify-center`};
  @media screen and (max-width: 768px) {
    ${tw`grid grid-cols-2 items-center justify-center`}
  }

  @media screen and (max-width: 500px) {
    ${tw`grid-cols-1`}
  }
`;
const PricingCard = styled.div`
  background: ${({ cover }) =>
    cover &&
    "linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0 05) 100%)"};
  box-shadow: ${({ cover }) =>
    cover && "inset 0px 10px 25px rgba(230, 221, 254, 0.2)"};
  border-radius: ${({ cover }) => cover && "24px"};
  padding: 30px 50px;

  @media screen and (max-width: 960px) {
    text-align: center;
    self-align: center;
    max-width: 88%;
    margin: 0 auto;
    padding: 13px 10px;
    margin-top: 20px;

    background: linear-gradient(
      360deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0 05) 100%
    );
    box-shadow: inset 0px 10px 25px rgba(230, 221, 254, 0.4);
    border-radius: 10px;
  }

  @media screen and (max-width: 500px) {
    max-width: 85%;
    margin: 20px auto;
    padding: 15px 10px;
  }
`;
const PricingHead = styled.h4`
  ${tw`md:text-[18px] font-medium uppercase`}
`;
const PriceTitle = styled.h3`
  ${tw`md:text-body text-xs md:text-[16px]`}
`;
const PricingPrice = styled.h3`
  ${tw`text-2xl md:text-5xl font-bold font-satoshi py-3 md:py-8`}
`;
const PricingRenewal = styled.h3`
  ${tw`py-3 md:py-6 text-sm text-body font-medium border-b-[1px] border-body border-solid`}
`;
const PricingStats = styled.div``;
const PricingDevice = styled.p`
  ${tw`md:mt-5 text-sm md:text-base`}
`;
const PricingSpeed = styled.p`
  color: ${({ colorChoice }) => colorChoice && "#7F7F90"};
`;
const PricingStatistics = styled.p`
  color: ${({ colorChoice }) => colorChoice && "#7F7F90"};
`;
const PriceContainer = styled.div`
  ${tw`mt-2 md:mt-0 flex items-center gap-3 justify-center lg:justify-start`}
`;

const PricingSpanIcon = styled.span`
  ${tw`md:pt-5`}
`;

const PricingSpiralBackground = styled.div`
  ${tw`hidden  md:block md:h-[300px]  w-full bg-no-repeat bg-cover bg-center -mt-24`};
  background-image: url("/src/img/Image (2).png");
`;

export const Pricing = () => {
  const [buttonShadow, setShadowButton] = useState(true);
  return (
    <div>
      <PricingContainer>
        <Container>
          <PricingContent>
            <PricingHeader>vexion app</PricingHeader>
            <PricingTitle>pricing</PricingTitle>
            <PricingParagraph>Upgrade to enable new features</PricingParagraph>
          </PricingContent>

          <PricingCards>
            {pricingdata?.map((pricing, index) => {
              return (
                <Tilt key={index}>
                  <PricingCard key={index} cover={pricing.cover}>
                    <div className="">
                      <PricingHead>{pricing.header}</PricingHead>
                      <PriceTitle>{pricing.title}</PriceTitle>
                    </div>
                    <PricingPrice>
                      <span className="text-2xl">&#36;</span>
                      {pricing.price}
                    </PricingPrice>
                    <Button
                      children={pricing.buttonchildren}
                      buttonShadow={buttonShadow}
                      bg={pricing.buttonbg}
                      color={pricing.buttonColor}
                      buttonPaddingX="13px"
                      buttonPaddingY="30px"
                    />
                    <PricingRenewal>{pricing.renewal}</PricingRenewal>
                    {pricing.stats?.map((stat, index) => {
                      return (
                        <PriceContainer key={index}>
                          <PricingSpanIcon>
                            <AiOutlineCheck />
                          </PricingSpanIcon>
                          <PricingStats key={index}>
                            <PricingDevice>{stat.device}</PricingDevice>
                            <PricingSpeed colorChoice={stat.colorChoice}>
                              {stat.spped}
                            </PricingSpeed>
                            <PricingStatistics colorChoice={stat.colorChoice}>
                              {stat.statistics}
                            </PricingStatistics>
                          </PricingStats>
                        </PriceContainer>
                      );
                    })}
                  </PricingCard>
                </Tilt>
              );
            })}
          </PricingCards>
        </Container>
      </PricingContainer>
      <PricingSpiralBackground></PricingSpiralBackground>
    </div>
  );
};
