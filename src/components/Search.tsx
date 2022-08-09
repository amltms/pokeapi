type Props = {
	setSearchInput: React.Dispatch<React.SetStateAction<string>>;
	searchInput: string;
};

const Search = ({ setSearchInput, searchInput }: Props) => {
	return (
		<div>
			<input onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
		</div>
	);
};

export default Search;
