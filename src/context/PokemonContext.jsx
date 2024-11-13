import React, { createContext, useContext, useState } from "react";

export const PokemonContext = createContext(null);

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};
