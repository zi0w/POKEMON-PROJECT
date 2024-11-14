import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../Slices/PokemonSlice";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
