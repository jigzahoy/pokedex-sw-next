import usePokedex from "@hooks/usePokedex";
import { useContext } from "react";
import PokedexContext from "@contexts/PokedexContext";

export default function Pokedex() {
  const { pokemon } = useContext(PokedexContext);
  return (
    <div className="z-10 w-full max-w-xl pt-24 mx-auto mb-2">
      <ul className="flex flex-col w-auto">
        {pokemon.map((item) => {
          return (
            <li
              key={item.galarID}
              className="px-4 py-1 my-1 bg-gray-200 rounded-full"
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
