import React, { useContext } from "react";
import styled from "styled-components";
import PokemonBall from "../assets/Images/PokemonBall.png";
import LogoImage from "../assets/Images/Logo.png";
import PokemonCard, { CardBox } from "../components/PokemonCard";
import { PokemonContext } from "../context/PokemonContext";

const DashBoardContainer = styled.div`
  width: 70%;
  background-color: #e7e7e7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

const LogoImg = styled.img`
  margin-top: 10px;
  width: 200px;
  height: auto;
`;

const DashBoardPokemonContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`;

const DashBoardPokemonBallArea = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 2px dashed #cccccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DashBoardPokemonArea = styled.div`
  width: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PokemonImage = styled.img`
  width: 50px;
  height: 50px;
`;

// 맵 돌려서 조건부 렌더링
// 포켓몬 카드 재활용
const DashBoard = () => {
  const { dashBoardPokemons } = useContext(PokemonContext);

  const renderArray = [
    ...dashBoardPokemons,
    ...new Array(6 - dashBoardPokemons.length).fill(null),
  ];

  return (
    <DashBoardContainer>
      <LogoImg src={LogoImage} alt="logo image" />
      <DashBoardPokemonContainer>
        {renderArray.map((pokemon) => {
          if (pokemon) {
            return (
              <DashBoardPokemonArea key={pokemon.id}>
                <PokemonCard
                  width={"100px"}
                  key={pokemon.id}
                  pokemon={pokemon}
                />
              </DashBoardPokemonArea>
            );
          } else {
            return (
              <DashBoardPokemonBallArea key={Math.random()}>
                <PokemonImage src={PokemonBall} alt="PokemonBall" />
              </DashBoardPokemonBallArea>
            );
          }
        })}
      </DashBoardPokemonContainer>
    </DashBoardContainer>
  );
};

export default DashBoard;
