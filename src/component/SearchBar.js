import React from 'react';

const SearchBar = (props) => {

	return (
		<div className="search-bar">
			<input 
			className="search-input" 
			value={props.city}
			onChange={props.onClick}
			/>
		</div>
	);
}

export default SearchBar;