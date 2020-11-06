import { IPokeList } from "@hooks/usePokedex";
import { useContext } from "react";
import PokedexContext from "@contexts/PokedexContext";

const appendZero = (id) => id.toString().padStart(3, "0");

const getPokemonIcon = (id) => {
  const parsedID = appendZero(id);
  const iconURL = `https://www.serebii.net/pokedex-swsh/icon/${parsedID}.png`;
  return iconURL;
};

const PokedexList = ({ pokemon }) => {
  const { galarID, nationalID, handleCaught, isCaught, name } = pokemon;

  return (
    <li className="flex py-2 my-1 font-bold bg-black bg-gray-300 bg-opacity-25 rounded-full align-center hover:bg-opacity-50 ">
      <span className="relative w-16 h-8">
        <img
          className="absolute bottom-0 transform -translate-x-1/2 left-1/2 rendering-pixelated"
          src={getPokemonIcon(nationalID)}
          alt={name}
        />
      </span>
      <span className="pr-2 my-auto">
        No. {appendZero(galarID)} {name}{" "}
      </span>
      {/* <span className="poke-checkbox">
        <input
          type="checkbox"
          name="caught"
          id={`poke-${galarID}`}
          value={nationalID}
          onChange={handleCaught}
          checked={isCaught}
        />
        <label htmlFor={`poke-${galarID}`} />
      </span> */}
    </li>
  );
};

export default function Pokedex() {
  const { pokemon }: { pokemon: IPokeList[] } = useContext(PokedexContext);

  return (
    <div className="z-10 w-full max-w-md pt-16 mx-auto mb-2">
      <ul className="flex flex-col w-auto">
        {pokemon.map((pokeItem) => {
          return <PokedexList pokemon={pokeItem} key={pokeItem.galarID} />;
        })}
      </ul>
    </div>
  );
}
