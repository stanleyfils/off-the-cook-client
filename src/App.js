import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import LongMenu from './Components/NavBar';

function App() {
	return (
		<div className="App">
			<LongMenu />
			<Header />
			<SearchBar />
		</div>
	);
}

export default App;
