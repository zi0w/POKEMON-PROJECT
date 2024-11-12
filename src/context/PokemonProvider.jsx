import { useState } from "react";
import { PokemonContext } from "./PokemonContext";

const PokemonProvider = ({ children }) => {
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
    <PokemonContext.Provider
      value={{ dashBoardPokemons, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
