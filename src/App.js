import React from 'react';
import './App.css';
import Header from './Components/Home/Header';
import SearchBar from './Components/Home/SearchBar';
import PrimarySearchAppBar from './Components/NavBar/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
	return (
		<section>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					{/* <Route exact path="/dashboard" component={Home} /> */}
				</Switch>
			</div>
		</section>
	);
}

export default App;
