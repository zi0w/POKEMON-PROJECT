import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addPokemon, removePokemon } from "../redux/Slices/PokemonSlice";

const CardBox = styled.div`
  width: ${(props) => (props.$width ? props.$width : "130px")};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 10px 10px 10px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const TextBox = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;

const PokemonName = styled.p`
  font-size: 15px;
  font-weight: bold;
  font-family: "DungGeunMo", sans-serif;
`;

const PokemonId = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #818181;
  font-family: "DungGeunMo", sans-serif;
`;

const PokemonImg = styled.img`
  width: 70px;
  height: 70px;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokemonCard = ({ pokemon, $width, type }) => {
  const dispatch = useDispatch();

  return (
    <CardBox $width={$width}>
      <StyledLink to={`/Dex/${pokemon.id}`}>
        <PokemonImg src={pokemon.img_url} alt="pokemon.korean_name" />
        <TextBox>
          <PokemonName>{pokemon.korean_name}</PokemonName>
          <PokemonId>No. {pokemon.id}</PokemonId>
        </TextBox>
      </StyledLink>
      {type === "selectedPokemon" ? (
        <Button
          type="button"
          onClick={() => {
            dispatch(removePokemon(pokemon.id));
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          type="button"
          onClick={() => {
            dispatch(addPokemon(pokemon));
          }}
        >
          추가
        </Button>
      )}
    </CardBox>
  );
};

export default PokemonCard;
