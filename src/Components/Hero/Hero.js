import React from "react";
import styled from "styled-components";
// import Big from "./girleating2.png";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

// import small from "./webpay-mobile@3x.png";
// import smaller from "./terminal-mobile@3x.png";

const HERO = () => {
  return (
    <Container>
      <Br></Br>
      <Br></Br>

      <HeroContainer>
        <Hero>
          <TextHold>
            <Butt
              style={{
                backgroundColor: "#FFB1A4",
                width: "200px",
                fontSize: "large",
              }}
            >
              More than faster{" "}
              <MdOutlineDeliveryDining style={{ marginLeft: "10px" }} />
            </Butt>
            <Text>
              <H1>
                Get Your Food In Your Time With{" "}
                <span style={{ color: "red" }}>Oja</span>
              </H1>
              <Para>
                Our job is to fill your tummy with sumptous and delicious meal
                on growing revenue and delivering exceptional service to you our
                customers.
              </Para>
              <Br></Br>
              <Br></Br>
              <Link to="register" style={{ textDecoration: "none" }}>
                <Butt> Get Started</Butt>
              </Link>
            </Text>
          </TextHold>
          <ImageHold>
            <Image src="/assets/bg.png"></Image>

            {/* <SmallImg src={small}></SmallImg> */}
            <SmallerImg></SmallerImg>
          </ImageHold>
        </Hero>
      </HeroContainer>
    </Container>
  );
};
export default HERO;

const Container = styled.div`
  margin-top: 30px;
`;

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Hero = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  height: calc(100vh - 80px);
  justify-content: space-around;

  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
const TextHold = styled.div`
  width: 500px;
  /* background-color:red; */

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-size: 40px;
  line-height: 55px;
  font-weight: medium;
  /* background-color:peachpuff; */
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const Para = styled.p`
  font-size: 16px;
  line-height: 25px;
`;
const Br = styled.br``;
const Butt = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 40px;
  color: white;
  /* background-color: red; */
  border: none;
  font-weight: medium;
  background-color: #ffb1a4;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  /* border-radius: px; */
  font-size: medium;
`;

const ImageHold = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 300px;
    // display: none;
  }
`;
const Image = styled.img`
  width: 100%;
  display: flex;
  position: absolute;
  height: 100%;
  /* z-index:-100; */
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
// const SmallImg = styled.img`
//   width: 200px;
//   display: flex;
//   /* position: absolute; */
//   background-color:green ;
//   right: 140px;
//   height: 200px;
//   /* object-fit: contain; */
//   top: 190px;
// `;
const SmallerImg = styled.div`
  width: 300px;
  display: flex;
  background-color: #ffb1a4;
  /* position: relative; */
  border-radius: 50%;
  height: 300px;
  /* object-fit: contain; */
`;

// const Text = styled.div``
// const Text = styled.div``
// const Text = styled.div``
// const Text = styled.div``
// const Text = styled.div``
