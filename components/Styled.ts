import styled from "styled-components";

export const Message = styled.div`
  margin-top: 16px;
  font-size: 17px;
  font-weight: 700;
`;

export const PokemonCard = styled.div`
  border: 4px solid white;
  border-radius: 16px;
  display: flex;
  padding: 8px;
  text-align: center;
  background-color: #e0d494;
  font-weight: 800;
  color: #4f2424;
  text-transform: capitalize;
  align-items: center;
`;

export const PokemonCardLarge = styled.div`
  border: 4px solid white;
  border-radius: 1rem;
  text-align: center;
  box-sizing: border-box;
  margin: 0.5rem;
  background-color: #e0d494;
  font-weight: 800;
  color: #4f2424;
`;

export const CardSection = styled.div`
  border: 2px solid white;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: #f0eee6;
  text-transform: capitalize;
  align-items: center;

  &:first-of-type {
    margin-top: 24px;
  }

  &:last-child {
    border-bottom-right-radius: 0.7rem;
    border-bottom-left-radius: 0.7rem;
  }
`;

export const CardSectionTitle = styled.div`
  color: black;
  font-display: block;
  font-weight: 900;
  font-size: 14px;
  margin-left: 16px;
  text-transform: uppercase;
  justify-content: flex-start;
`;

export const CardSectionContent = styled.div`
  padding-left: 40px;
`;

export const PokemonCardLargeSubtitle = styled.div`
  font-size: 24px;
  text-align: center;
  display: block;
  text-transform: capitalize;
  font-weight: 700;
`;

export const HomeContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputField = styled.input`
  border-radius: 10px;
  padding: 5px 12px;
  font-size: 14px;
  height: 40px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #0066ff;
  }
`;
