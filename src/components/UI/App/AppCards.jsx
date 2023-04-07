import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../Button";
import { Tilt } from "../Tilt";

const AppCardParent = styled.div`
  ${tw`my-16 hover:cursor-pointer`}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  height: 600px;
  max-width: 1100px;

  > div {
    border-radius: 12.5px;
    background: linear-gradient(
      360deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    box-shadow: inset 0px 10px 25px rgba(230, 221, 254, 0.1);
    padding: 15px;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  > div:not(:first-child) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: start;
    > div {
    }
  }

  .first {
    grid-area: first;
  }
  .second {
    grid-area: second;
    height: 250px;
  }

  > .third {
    grid-area: third;
    height: 300px;
  }

  > .fourth {
    grid-area: fourth;
  }

  > .fifth {
    grid-area: fifth;
  }

  grid-template-areas: "first second third" "first fourth third" "first fourth fifth" "first fourth fifth";

  @media screen and (max-width: 960px) {
    max-width: 700px;

    height: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "
    first first first ."
      " second second third third "
      "fourth fourth fifth fifth";

    > .first {
      height: 350px;
    }
    > .third {
      height: 250px;
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 30px;
    width: 92%;
    margin-right: auto;
    margin-left: auto;
    grid-template-areas:
      "first"
      "second"
      "third"
      "fourth"
      "fifth";

    > div {
      min-height: 230px;
    }

    > .third {
      height: 250px;
    }

    > div:not(:first-child) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: start;
      > div {
      }
    }

    > div:first-child {
      min-height: 280px;

      > Button {
        margin-top: 15px;
      }
    }
  }
`;

const AppCardHeader = styled.h4`
  ${tw`text-white text-base md:text-xl font-bold pb-2 `}
`;

const AppCardParagraph = styled.p`
  ${tw`text-[11px] font-Archivo`}
`;

const AppHeaderContent = styled.div`
  ${tw`w-[95%] md:mb-10 md:mt-5`}
`;

const ImageContainer = styled.div`
  ${tw``}
`;

export const AppCards = () => {
  const options = {
    scale: 1,
    speed: 1000,
    max: 20,
  };

  return (
    <AppCardParent>
      <div className="first">
        <Tilt options={options}>
          <div>
            <img
              src="/assets/img/Frame (1).png"
              alt=""
              className="w-[120px] lg:w-[220px]"
            />
          </div>
        </Tilt>
        <AppHeaderContent>
          <AppCardHeader>Universal Application</AppCardHeader>
          <AppCardParagraph>
            Control your internet. Check the latency (ms). Keep an eye on the
            transfer. Test the speed.
          </AppCardParagraph>
        </AppHeaderContent>
        <Button children="Get the app" bg="#E6DDFE" color="#000" />
      </div>

      <div className="second">
        <Tilt options={options}>
          <ImageContainer>
            <img src="/assets/img/Group 1.png" alt="" className="w-[150px]" />
          </ImageContainer>
        </Tilt>

        <AppHeaderContent>
          <AppCardHeader>Control your internet</AppCardHeader>
          <AppCardParagraph>
            Control your internet. Check the latency (ms). Keep an eye on the
            transfer. Test the speed.
          </AppCardParagraph>
        </AppHeaderContent>
      </div>
      <div className="third">
        <Tilt options={options}>
          <ImageContainer>
            <img
              src="/assets/img/Auto Layout Horizontal.png"
              alt=""
              className="w-[150px]"
            />
          </ImageContainer>
        </Tilt>
        <AppHeaderContent>
          <AppCardHeader>Check the latency</AppCardHeader>
          <AppCardParagraph>
            Control your internet. Check the latency (ms). Keep an eye on the
            transfer. Test the speed.
          </AppCardParagraph>
        </AppHeaderContent>
      </div>
      <div className="fourth">
        <Tilt options={options}>
          <ImageContainer>
            <img src="/assets/img/Frame (2).png" alt="" className="w-[150px]" />
          </ImageContainer>
        </Tilt>

        <AppHeaderContent>
          <AppCardHeader>Keep an eye on the transfer</AppCardHeader>
          <AppCardParagraph>
            Control your internet. Check the latency (ms). Keep an eye on the
            transfer. Test the speed.
          </AppCardParagraph>
        </AppHeaderContent>
      </div>
      <div className="fifth">
        <Tilt options={options}>
          <ImageContainer>
            <img src="/assets/img/Frame (3).png" alt="" className="w-[150px]" />
          </ImageContainer>
        </Tilt>

        <AppHeaderContent>
          <AppCardHeader>Test the speed</AppCardHeader>
          <AppCardParagraph>
            Control your internet. Check the latency (ms). Keep an eye on the
            transfer. Test the speed.
          </AppCardParagraph>
        </AppHeaderContent>
      </div>
    </AppCardParent>
  );
};
