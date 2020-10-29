import styled from "styled-components";

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
  // const { setSearchPokemon } =

  // const handleSearch = (event) => {

  //   const { value } = event.target;
  //   if (value.length >= 1) {
  //     setSearchPokemon(value);
  //   } else {
  //     setSearchPokemon("");
  //   }
  // };

  return (
    <NavContainer>
      <div className="flex py-4 justify-items-center">
        <div className="z-10 w-full max-w-xl mx-auto">
          <input
            type="text"
            name="poke-search"
            id="poke-search"
            placeholder="Search Pokémon"
            // onChange={handleSearch}
          />
        </div>
      </div>
    </NavContainer>
  );
}
