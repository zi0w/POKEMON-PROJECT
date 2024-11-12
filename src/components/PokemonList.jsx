import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/PokemonData";

const PokemonContainer = styled.div`
  width: 70%;
  height: 75%;
  background-color: #e7e7e7;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const PokemonList = ({ addPokemon }) => {
  return (
    <PokemonContainer>
      {MOCK_DATA.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            addPokemon={addPokemon}
          />
        );
      })}
    </PokemonContainer>
  );
};

export default PokemonList;
