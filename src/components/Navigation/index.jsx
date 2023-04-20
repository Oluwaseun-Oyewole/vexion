import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavLinksData } from "../../../utils/data";
import styled from "styled-components";

import tw from "twin.macro";
import { Button } from "../UI/Button";
import { Container } from "../StyledElements";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaTimes, FaBars } from "react-icons/fa";
import { BsArrowUpShort } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll/modules";

const AppNav = styled.div`
  ${tw`pt-2 bg-primary text-body font-satoshi font-medium `};

  background: ${({ scrollNavbar }) =>
    scrollNavbar ? "rgba(0, 0, 0, 0.1)" : ""};
  backdrop-filter: blur(10px);
  height: 75px;
  position: sticky;
  top: 0px;
  z-index: 99999;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;
const AppNavContainer = styled.div`
  ${tw`flex items-center justify-between`}
  @media screen and (max-width:960px) {
    // background: ${({ click }) => (click ? "#fff" : "")};
  }
`;
const AppNavLogo = styled.div`
  ${tw`flex items-center justify-self-start cursor-pointer`}
`;
const NavMenu = styled.ul`
  ${tw`flex items-center gap-8 list-none`}

  @media screen and (max-width:960px) {
    ${tw`pt-12 flex-col gap-0 items-center absolute bg-primary w-full top-[70px]  transition-all ease-in-out duration-500`}
    left: ${({ click }) => (click ? 0 : "-100%")};
    height: 100vh;
  }
`;
const NavItems = styled.li`
  ${tw`tracking-wide`}

  @media screen and (max-width: 960px) {
    ${tw`h-[80px]`}
  }
`;

const NavLinks = styled(NavLink)`
  ${tw`flex items-center`}
`;

const NavButtonContainer = styled.div`
  ${tw`flex items-center gap-4`}

  @media screen and (max-width:1024px) {
    ${tw`px-10`}
  }

  @media screen and (max-width: 960px) {
    ${tw`flex-col gap-8 items-center absolute top-[440px] w-full transition-all ease-in-out duration-500 bg-primary pb-5`}
    left: ${({ click }) => (click ? 0 : "-100%")};
  }
`;

const DropDownContainer = styled.div`
  ${tw`bg-primary text-body  h-[100px] w-[200px] absolute top-14 flex flex-col items-start justify-center gap-5`};
`;

const MobileIcons = styled.div`
  ${tw`block lg:hidden text-2xl md:text-3xl cursor-pointer mr-4`}
`;

export const Navigation = () => {
  const [dropdownstate, setDropdownstate] = useState(false);
  const [click, setClick] = useState(false);
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const [dropclick, setDropClick] = useState(false);

  const changeBackground = () => {
    if (window.pageYOffset >= 100) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };

  const homeToggler = () => {
    scroll.scrollToTop();
    setDropClick(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const handleClick = () => setClick(!click);
  const handleDropDown = () => {
    setDropdownstate(!dropdownstate);
    setDropClick(true);
  };

  return (
    <AppNav scrollNavbar={scrollNavbar}>
      <Container>
        <AppNavContainer click={click}>
          <AppNavLogo onClick={homeToggler}>
            <NavLink to="/">
              <img
                src="/assets/img/Logo.png"
                alt=""
                className="w-[120px] md:w-[150px]"
              />
            </NavLink>
          </AppNavLogo>

          <MobileIcons onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcons>

          <NavMenu click={click}>
            {NavLinksData?.map(({ pathname, title, dropdown }, index) => {
              return (
                <NavItems key={index}>
                  <NavLinks
                    to={{ pathname: pathname }}
                    className={({ isActive }) =>
                      isActive ? "text-red-500" : ""
                    }
                    onClick={() => {
                      if (!dropdown) {
                        setDropClick(false);
                      }
                    }}
                  >
                    {title}
                    {dropdown && (
                      <>
                        {dropdownstate ? (
                          <BsArrowUpShort onClick={handleDropDown} />
                        ) : (
                          <div className="flex flex-col items-center justify-center">
                            <IoMdArrowDropdown onClick={handleDropDown} />

                            {dropclick && (
                              <>
                                {dropdown && (
                                  <DropDownContainer>
                                    {dropdown?.map((drop) => (
                                      <NavLink to={drop.pathname}>
                                        {drop.title}
                                      </NavLink>
                                    ))}
                                  </DropDownContainer>
                                )}
                              </>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </NavLinks>
                </NavItems>
              );
            })}
          </NavMenu>

          <NavButtonContainer click={click}>
            <Button
              children="Sign In"
              borderColor="#000"
              bg="#000000"
              buttonPaddingX="11px"
              buttonPaddingY="30px"
              buttonShadow={true}
            />
            <Button
              children="Sign Up"
              bg="#E6DDFE"
              color="#000"
              buttonPaddingX="11px"
              buttonPaddingY="30px"
            />
          </NavButtonContainer>
        </AppNavContainer>
      </Container>
    </AppNav>
  );
};
