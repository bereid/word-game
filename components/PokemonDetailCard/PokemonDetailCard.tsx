import {
  CardSection,
  CardSectionContent,
  CardSectionTitle,
  PokemonCardLarge,
  PokemonCardLargeSubtitle,
} from "../Styled";

interface PokemonDetailCardProps {
  name: string;
  image: string;
  weight: number;
  xp: number;
  abilities: string[];
}

const PokemonDetailCard = ({
  name,
  image,
  weight,
  abilities,
  xp,
}: PokemonDetailCardProps) => {
  return (
    <PokemonCardLarge>
      <PokemonCardLargeSubtitle>{name}</PokemonCardLargeSubtitle>
      <img src={image} alt={name} width="100px" />
      <CardSection>
        <CardSectionTitle>XP</CardSectionTitle>
        <CardSectionContent>{xp}</CardSectionContent>
      </CardSection>
      <CardSection>
        <CardSectionTitle>Weight</CardSectionTitle>
        <CardSectionContent>{weight / 10} kg</CardSectionContent>
      </CardSection>
      <CardSection>
        <CardSectionTitle>Abilities</CardSectionTitle>
        <ul>
          {abilities.map((ability) => (
            <li key={ability}>{ability}</li>
          ))}
        </ul>
      </CardSection>
    </PokemonCardLarge>
  );
};

export default PokemonDetailCard;
