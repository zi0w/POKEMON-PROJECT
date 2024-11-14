import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const initialState = {
  dashBoardPokemons: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const pokemon = action.payload;

      if (state.dashBoardPokemons.length >= 6) {
        Swal.fire({
          icon: "error",
          text: "포켓몬은 최대 6마리까지 선택할 수 있습니다.",
          confirmButtonText: "확인",
          confirmButtonColor: "#fef152",
          customClass: {
            confirmButton: "custom-confirm-button",
            htmlContainer: "custom-text",
          },
        });
        return;
      }

      const isDuplicate = state.dashBoardPokemons.some(
        (element) => element.id === pokemon.id
      );
      if (isDuplicate) {
        Swal.fire({
          icon: "error",
          text: "이미 추가된 포켓몬입니다.",
          confirmButtonText: "확인",
          confirmButtonColor: "#fef152",
          customClass: {
            confirmButton: "custom-confirm-button",
            htmlContainer: "custom-text",
          },
        });
        return;
      }

      state.dashBoardPokemons.push(pokemon);
    },
    removePokemon: (state, action) => {
      const pokemonId = action.payload;
      state.dashBoardPokemons = state.dashBoardPokemons.filter((element) => {
        return element.id !== pokemonId;
      });
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
