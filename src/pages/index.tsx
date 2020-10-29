import AppContainer from "@components/AppContainer";
import Navbar from "@components/Navbar";
import Pokedex from "@components/Pokedex";

import usePokedex from "@hooks/usePokedex";

import PokedexContext from "@contexts/PokedexContext";

export default function IndexPage() {
  return (
    <AppContainer>
      <PokedexContext.Provider value={usePokedex()}>
        <Navbar />
        <Pokedex />
      </PokedexContext.Provider>
    </AppContainer>
  );
}
