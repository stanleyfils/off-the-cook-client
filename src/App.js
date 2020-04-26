import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
	return (
		<section>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					{/* <Route exact path="/signup" component={Signup} /> */}
				</Switch>
			</div>
		</section>
	);
}

export default App;
