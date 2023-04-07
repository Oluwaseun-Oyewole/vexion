import React from "react";
import { Container } from "../StyledElements";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { footerleftlinkdata, footerrightdata } from "../../../utils/data";
import { Button } from "../UI/Button";

const FooterContainer = styled.div`
  ${tw`pt-10 lg:pt-32 bg-primary font-satoshi text-body`}
`;
const LineI = styled.div``;
const Line2 = styled.div``;
const Circula = styled.div`
  ${tw`flex items-center justify-start -mt-10`}
  >img {
    width: 100px;
  }
`;

const FooterLeftLinks = styled.div``;
const FooterRightLinks = styled.div``;
const FooterButtonContainer = styled.div``;
const FooterMenuLinks = styled.ul`
  ${tw`list-none flex gap-10`};
`;
const FooterMenuItems = styled.li`
  ${tw`hover:text-white transition-all duration-500 ease-in-out`}
`;
const FooterRightMenu = styled.ul`
  ${tw`list-none flex gap-10`}
`;

const FooterGridContainer = styled.div`
  ${tw`flex flex-col items-center justify-between`}
`;

const FooterSectionController = styled.div`
  ${tw`pt-8 flex justify-between items-center gap-32`}
`;

const CopyRight = styled.div`
  ${tw`pt-8`}
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterGridContainer>
          <div className="flex gap-10">
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
