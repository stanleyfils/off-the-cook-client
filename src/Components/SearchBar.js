import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { searchQuery: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ searchQuery: event.target.value });
	}

	handleSubmit(event) {
		// alert(`You typed: ${this.state.search}`);
		event.preventDefault();
		this.setState({ searchQuery: '' });
	}

	render() {
		const { searchQuery } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={searchQuery} placeholder="search recipes" onChange={this.handleChange} />
				</form>
				<button>Surprise Me</button>
				<button>Search</button>
			</div>
		);
	}
}

export default SearchBar;
