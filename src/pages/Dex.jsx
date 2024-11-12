import React, { useEffect, useState } from "react";
import DashBoard from "../components/DashBoard";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";
import PokemonProvider from "../context/PokemonProvider";

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
  return (
    <PokemonProvider>
      <AppContainer>
        <DashBoard />
        <PokemonList />
      </AppContainer>
    </PokemonProvider>
  );
};

export default Dex;
