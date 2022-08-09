import { Pokemon } from '../types';
import styled from 'styled-components';
type Props = { pokemon: Pokemon };

const Card = styled.div`
	background: #e5e5e5;
	width: fit-content;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const PokemonCard = ({ pokemon }: Props) => {
	return (
		<Card>
			<p>{pokemon.id}</p>
			<h2>{pokemon.name}</h2>
			<img src={pokemon.sprites.front_default} alt="pokemon mg" />
		</Card>
	);
};

export default PokemonCard;
