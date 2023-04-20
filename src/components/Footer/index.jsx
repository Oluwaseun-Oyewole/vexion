import React from "react";
import { Container } from "../StyledElements";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { footerleftlinkdata, footerrightdata } from "../../../utils/data";
import { Button } from "../UI/Button";

const FooterContainer = styled.div`
  ${tw`pt-10 md:pt-16 lg:pt-20 bg-primary font-satoshi text-body`}
`;
const LineI = styled.div``;
const Line2 = styled.div``;
const Circula = styled.div`
  ${tw`hidden xl:flex items-center justify-start -mt-10`}
  >img {
    width: 100px;
  }
`;

const FooterLeftLinks = styled.div``;
const FooterRightLinks = styled.div``;
const FooterButtonContainer = styled.div`
  ${tw`py-5 lg:py-0 flex  md:hidden xl:flex items-center justify-center`}
`;
const FooterMenuLinks = styled.ul`
  ${tw`lg:text-base text-sm list-none flex gap-3 md:gap-5 xl:gap-10 justify-center lg:justify-start`};
`;
const FooterMenuItems = styled.li`
  ${tw`hover:text-white transition-all duration-500 ease-in-out`}
`;
const FooterRightMenu = styled.ul`
  ${tw`text-sm lg:text-base list-none text-center lg:text-left flex gap-3  md:gap-5 xl:gap-10 md:mt-0 justify-center lg:justify-start`}
`;

const FooterGridContainer = styled.div`
  ${tw`text-center lg:text-start lg:flex flex-col items-center justify-between `}
  @media screen and (max-width:768px) {
    max-width: 95%;
    margin: auto;
  }
`;

const FooterSectionController = styled.div`
  ${tw`md:flex lg:flex-row justify-center lg:justify-between items-center gap-16 lg:gap-32`}
`;

const CopyRight = styled.div`
  ${tw`text-sm pt-4 pb-10`}
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterGridContainer>
          <div className="hidden xl:flex gap-10">
            <LineI className="first">
              <img src="/assets/img/Line.png" alt="" />
            </LineI>
            <Circula className="second">
              <img src="/assets/img/Sygnet.png" alt="" />
            </Circula>
            <Line2 className="third">
              <img src="/assets/img/Line.png" alt="" />
            </Line2>
          </div>

          <FooterSectionController>
            <FooterLeftLinks className="fourth">
              <FooterMenuLinks>
                {footerleftlinkdata?.map((link, index) => {
                  return (
                    <FooterMenuItems key={index}>
                      <Link to={link.pathname}>{link.title}</Link>
                    </FooterMenuItems>
                  );
                })}
              </FooterMenuLinks>
            </FooterLeftLinks>
            <FooterButtonContainer className="fifth">
              <Button
                children="Get the app"
                bg="#E6DDFE"
                color="#000"
                buttonPaddingX="15px"
                buttonPaddingY="40px"
              />
            </FooterButtonContainer>
            <FooterRightLinks className="sixth">
              <FooterRightMenu>
                {footerrightdata?.map((link, index) => {
                  return (
                    <FooterMenuItems key={index}>
                      <Link to={link.pathname}>{link.title}</Link>
                    </FooterMenuItems>
                  );
                })}
              </FooterRightMenu>
            </FooterRightLinks>
          </FooterSectionController>

          <CopyRight>
            <h2>Copyright &copy; 2023 by Seun </h2>
          </CopyRight>
        </FooterGridContainer>
      </Container>
    </FooterContainer>
  );
};
