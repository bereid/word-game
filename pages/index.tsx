import type { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "react-query";
import useDebounce from "../hooks/useDebounce";

import PokemonsSearchResult from "../components/PokemonSearchResult";
import { HomeContainer, InputField } from "../components/Styled";

import searchPokemons from "../utils/searchPokemon";

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 300);
  const enabled = debouncedSearchValue.length > 0;

  const { isLoading, isError, isSuccess, data } = useQuery(
    `searchPokemons_${debouncedSearchValue}`,
    () => searchPokemons(debouncedSearchValue),
    { enabled }
  );

  const renderResult = () => {
    if (isLoading) {
      return <div className="search-message">Loading...</div>;
    }
    if (isError) {
      return <div className="search-message">Something went wrong</div>;
    }
    if (isSuccess) {
      return <PokemonsSearchResult pokemons={data} />;
    }
    return <></>;
  };

  return (
    <HomeContainer>
      <h1>Search Your Pokemon</h1>
      <InputField
        type="text"
        onChange={({ target: { value } }) => setSearchValue(value)}
        value={searchValue}
      />
      {renderResult()}
    </HomeContainer>
  );
};

export default Home;
