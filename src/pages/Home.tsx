import { useEffect, useRef, useState } from 'react';
import Search from '../components/Search';
import { searchPokemons } from '../api/fetchData';
import PokemonCard from '../components/PokemonCard';
import { Pokemon } from '../types';

const Home = () => {
	const [results, setResults] = useState<Pokemon>();
	const [searchInput, setSearchInput] = useState('');

	let filterTimeout: { current: NodeJS.Timeout | null } = useRef(null);

	useEffect(() => {
		/*debounce */
		clearInterval(filterTimeout.current as NodeJS.Timeout);
		filterTimeout.current = setTimeout(() => {
			searchInput &&
				searchPokemons(searchInput).then((data) => {
					setResults(data);
				});
		}, 400);
	}, [searchInput]);

	return (
		<div>
			<Search setSearchInput={setSearchInput} searchInput={searchInput} />
			{results && searchInput && <PokemonCard pokemon={results} />}
		</div>
	);
};

export default Home;
