import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import PrimarySearchAppBar from './Components/NavBar';

function App() {
	return (
		<section>
			<div className="App">
				<PrimarySearchAppBar />
				<Header />
				<SearchBar />
			</div>
		</section>
	);
}

export default App;
