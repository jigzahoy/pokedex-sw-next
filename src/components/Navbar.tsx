import styled from "styled-components";
import { useContext } from "react";
import PokedexContext from "@contexts/PokedexContext";

const NavContainer = styled.div`
  position: fixed;
  /* margin-top: 1.25rem; */
  background: #dfdfdf;
  z-index: 20;
  width: 100%;
  &::before {
    line-height: 0;
    content: "";
    position: absolute;
    top: 0;
    left: calc(22vh);
    width: 150%;
    height: 100%;
    background: #353234;
    transform: skewX(-25deg);
  }
`;

export default function Navbar() {
  const { setSearchPokemon } = useContext(PokedexContext);

  const handleSearch = (event) => {
    const { value } = event.target;
    if (value.length >= 1) {
      setSearchPokemon(value);
    } else {
      setSearchPokemon("");
    }
  };

  return (
    <NavContainer>
      <div className="flex py-2 justify-items-center">
        <div className="z-10 flex w-full max-w-md mx-auto">
          <input
            type="text"
            name="poke-search"
            id="poke-search"
            placeholder="Search Pokémon"
            className="px-4 py-2 mx-auto rounded-full outline-none md:ml-0"
            onChange={handleSearch}
          />
        </div>
      </div>
    </NavContainer>
  );
}
