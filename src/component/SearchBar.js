import React, {Component} from 'react';


class SearchBar extends Component{

	onSubmit = event => {
		event.preventDefault();
		this.props.onSubmit();
	}

	render(){
		return (
			<div className="search-bar">
				<form onSubmit={this.onSubmit} className="search-form">
					<label>City: </label>
					<input 
						className="search-input" 
						value={this.props.city}
						onChange={e => this.props.onChange(e)}
					/>
				</form>
			</div>
		);
	}
}

export default SearchBar;