import { Message, PokemonCard } from "../Styled";
import Link from "next/link";

const PokemonsSearchResult = ({ pokemons }: { pokemons: string[] }) => {
  return pokemons.length > 0 ? (
    <div className="search-grid">
      {pokemons.map((pokemon, i) => (
        <Link href={`/pokemon/${pokemon}`} key={pokemon}>
          <PokemonCard key={i}>{pokemon}</PokemonCard>
        </Link>
      ))}
    </div>
  ) : (
    <Message>No pokemons found</Message>
  );
};

export default PokemonsSearchResult;
