import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../StyledElements";
import { pricingdata } from "../../../utils/data";
import { Button } from "../UI/Button";
import { AiOutlineCheck } from "react-icons/ai";
import { Tilt } from "../UI/Tilt";

const PricingContainer = styled.div`
  ${tw`pt-24 bg-primary text-white  flex justify-center items-center flex-col font-Quicksand `}

  @media screen and (max-width: 960px) {
    display: block;
  }
`;
const PricingHeader = styled.h2`
  ${tw`text-xl text-linear uppercase font-medium`}
`;
const PricingTitle = styled.h1`
  ${tw`text-7xl py-2 uppercase font-medium`}
`;
const PricingParagraph = styled.p`
  ${tw`text-body font-medium text-sm`}
`;
const PricingContent = styled.div`
  ${tw`text-center`}
`;
const PricingCards = styled.div`
  ${tw`pt-5 md:pt-20 md:flex items-center`}
`;
const PricingCard = styled.div`
  background: ${({ cover }) =>
    cover &&
    "  linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0 05) 100%)"};
  box-shadow: ${({ cover }) =>
    cover && "inset 0px 10px 25px rgba(230, 221, 254, 0.2)"};
  border-radius: ${({ cover }) => cover && "24px"};
  padding: 30px 50px;

  @media screen and (max-width: 960px) {
    text-align: center;
    width: 100%;
    padding: 20px 10px;
    margin-top: 50px;

    background: linear-gradient(
      360deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0 05) 100%
    );
    box-shadow: inset 0px 10px 25px rgba(230, 221, 254, 0.4);
    border-radius: 10px;
  }
`;
const PricingHead = styled.h4`
  ${tw`text-[18px] font-medium uppercase`}
`;
const PriceTitle = styled.h3`
  ${tw`text-body text-[16px]`}
`;
const PricingPrice = styled.h3`
  ${tw`text-5xl font-bold font-satoshi py-8 `}
`;
const PricingRenewal = styled.h3`
  ${tw`py-6 text-sm text-body font-medium border-b-[1px] border-body border-solid`}
`;
const PricingStats = styled.div``;
const PricingDevice = styled.p`
  ${tw`mt-5`}
`;
const PricingSpeed = styled.p`
  color: ${({ colorChoice }) => colorChoice && "#7F7F90"};
`;
const PricingStatistics = styled.p`
  color: ${({ colorChoice }) => colorChoice && "#7F7F90"};
`;
const PriceContainer = styled.div`
  ${tw`flex items-center gap-3 justify-center md:justify-start`}
`;

const PricingSpanIcon = styled.span`
  ${tw`pt-5`}
`;

const PricingSpiralBackground = styled.div`
  ${tw` hidden bg-spiral lg:block h-[300px]  w-full bg-no-repeat bg-cover bg-center -mt-24`};

  // background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
  //   url("/public/assets/img/Image (2).png");
  // height: 300px;
`;

// background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
// url("/public/assets/img/Image (2).png");

const PricingSpiralBackgroundImage = styled.img``;
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
                <Tilt>
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
                        <PriceContainer>
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
