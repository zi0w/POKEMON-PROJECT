import React, { useEffect, useState } from "react";
import DashBoard from "../components/DashBoard";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #bababa;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const Dex = () => {
  const [dashBoardPokemons, setDashBoardPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    // 6마리 이상 선택시 alert
    if (dashBoardPokemons.length >= 6) {
      alert("포켓몬은 최대 6마리까지 선택할 수 있습니다.");
      return;
    }

    // 중복 포켓몬 선택시 alert
    const isDuplicate = dashBoardPokemons.some(
      (element) => element.id === pokemon.id
    );
    if (isDuplicate) {
      alert("이미 추가된 포켓몬입니다.");
      return;
    }
    // 앞 조건들에 해당 안되면
    setDashBoardPokemons([...dashBoardPokemons, pokemon]);
  };

  const removePokemon = (pokemon) => {
    const newPokemons = dashBoardPokemons.filter((element) => {
      return element.id !== pokemon.id;
    });
    setDashBoardPokemons(newPokemons);
  };

  return (
    <AppContainer>
      <DashBoard
        dashBoardPokemons={dashBoardPokemons}
        addPokemon={addPokemon}
        removePokemon={removePokemon}
      />
      <PokemonList addPokemon={addPokemon} />
    </AppContainer>
  );
};

export default Dex;
