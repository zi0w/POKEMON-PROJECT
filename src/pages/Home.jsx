import React from "react";
import BackGroundImage from "../assets/Images/BackGroundImage.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const FullScreenImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const HomeButton = styled.button`
  font-family: "DungGeunMo", sans-serif;
  background-color: #1a1a1a;
  color: white;
  padding: 12px 25px;
  font-size: 20px;
  font-weight: 700;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: absolute;
  top: 90%;
  left: 49.5%;
  transform: translate(-50%, -50%);

  &:hover {
    background-color: #333;
    color: #f0f0f0;
    transform: translate(-50%, -50%) scale(1.05);
    border-color: #f0f0f0;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <FullScreenImage src={BackGroundImage} alt="BackGroundImage" />
      <HomeButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </HomeButton>
    </Wrapper>
  );
};

export default Home;
