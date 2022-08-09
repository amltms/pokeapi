import axios from 'axios';

export const getData = async (params: string) => {
	return await axios
		.get(`https://pokeapi.co/api/v2/pokemon/${params}`)
		.then((res) => res.data)
		.catch((err) => console.log(err));
};

export const searchPokemons = async (input: string) => {
	const data = await getData(input);
	return data;
};
