import { ChangeEvent, useEffect, useRef, useState } from "react";
import galarPokedex, { IPokedexType } from "@api/pokemon";
import { usePersistedState } from "./userPersistedState";

interface ICaughtPokemon {
  nationalID: number;
  caught?: boolean;
}

interface IPokeList extends IPokedexType, ICaughtPokemon {}

function searchPokemon(
  search: string | number,
  pokedex = galarPokedex
): IPokedexType[] {
  const searchRegex = new RegExp(`^${search}`, "gi");
  return pokedex.filter((item) =>
    searchRegex.test(item.name) || searchRegex.test(item.galarID.toString())
      ? item
      : ""
  );
}

function mergeCaugthPokemon(
  caughtPokemon: ICaughtPokemon[],
  searchedPokemon: string | number = ""
): IPokeList[] {
  const hashCaughtPokemon = new Map(
    caughtPokemon.map((obj) => [obj.nationalID, obj.caught])
  );

  const result = searchPokemon(searchedPokemon).map((item) => {
    const a = { caught: hashCaughtPokemon.get(item.nationalID) || false };
    return { ...item, ...a };
  });

  return result;
}

export default function usePokedex() {
  const didMount = useRef(false);

  // @TODO: use usePersistedState hook
  // const [caughtPokemon, setCaughtPokemon] = usePersistedState("caught", []);
  const [caughtPokemon, setCaughtPokemon] = useState<ICaughtPokemon[]>([]);
  const [searchedPokemon, setSearchPokemon] = useState<string | number>("");
  const [pokemon, setPokemon] = useState<IPokeList[]>(
    mergeCaugthPokemon(caughtPokemon)
  );

  const toggleCaught = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value: pokeID } = event.target;
    const pokeNum = parseInt(pokeID, 10);

    if (checked) {
      setCaughtPokemon([
        ...caughtPokemon,
        { nationalID: pokeNum, caught: checked },
      ]);
    } else {
      setCaughtPokemon(
        caughtPokemon.filter((item) => item.nationalID !== pokeNum)
      );
    }
  };

  useEffect(() => {
    if (didMount.current) {
      const newResult = mergeCaugthPokemon(caughtPokemon, searchedPokemon);
      setPokemon(newResult);
    }
    didMount.current = true;
  }, [searchedPokemon]);

  return { pokemon, toggleCaught, setSearchPokemon };
}
