import React, { useContext, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../data/PokemonData";
import WallPaper from "../assets/Images/WallPaper.jpg";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

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

const PokemonContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 60%;
  left: 49.5%;
`;

const PokemonImg = styled.img`
  width: 300px;
  height: 300px;
`;

const InfomationContainer = styled.div`
  width: 400px;
  height: 200px;
  position: absolute;
  top: -100%;
  left: -20%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 10px 10px 0px 0px #eca847;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
`;

const PokemonName = styled.div`
  color: black;
  font-family: "DungGeunMo", sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 5px;
`;

const PokemonTypes = styled.div`
  color: black;
  font-family: "DungGeunMo", sans-serif;
  font-size: 20px;
`;

const PokemonDescription = styled.div`
  color: black;
  font-family: "DungGeunMo", sans-serif;
  font-size: 15px;
  margin-left: 10px;
`;

const Button = styled.button`
  padding: 6px 12px;
  background-color: #fef152;
  color: black;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "DungGeunMo", sans-serif;

  &:hover {
    background-color: #e6da49;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

const ButtonContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PokemonDetail = () => {
  const { addPokemon, removePokemon, dashBoardPokemons } =
    useContext(PokemonContext);
  const params = useParams();

  const foundPokemon = MOCK_DATA.find((pokemon) => {
    return pokemon.id === Number(params.id);
  });

  const navigate = useNavigate();

  return (
    <Wrapper>
      <FullScreenImage src={WallPaper} alt="WallPaper"></FullScreenImage>
      <PokemonContainer>
        <PokemonImg src={foundPokemon.img_url} alt="pokemon.korean_name" />
        <InfomationContainer>
          <PokemonName>{foundPokemon.korean_name}</PokemonName>
          <PokemonTypes>타입: {foundPokemon.types}</PokemonTypes>
          <PokemonDescription>{foundPokemon.description}</PokemonDescription>
          <ButtonContainer>
            <Button
              onClick={() => {
                navigate("/dex");
              }}
            >
              뒤로가기
            </Button>
            {dashBoardPokemons.includes(foundPokemon) ? (
              <Button
                type="button"
                onClick={() => {
                  removePokemon(foundPokemon);
                }}
              >
                삭제
              </Button>
            ) : (
              <Button
                type="button"
                onClick={() => {
                  addPokemon(foundPokemon);
                }}
              >
                추가
              </Button>
            )}
          </ButtonContainer>
        </InfomationContainer>
      </PokemonContainer>
    </Wrapper>
  );
};

export default PokemonDetail;
