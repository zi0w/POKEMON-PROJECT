import React from "react";
import Router from "./shared/Router";
import { GlobalStyles } from "./styles/GlobalStyles";
import PokemonProvider from "./context/PokemonProvider";

const App = () => {
  return (
    <>
      <PokemonProvider>
        <GlobalStyles />
        <Router />
      </PokemonProvider>
    </>
  );
};

export default App;
