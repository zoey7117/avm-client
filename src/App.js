import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AnimalsContainer from './containers/AnimalsContainer';
import Home from './components/home/Home';
import Overlay from './components/overlay/Overlay';

function App() {
	return (
		<div className="App">
			<Route exact path="/animal" component={AnimalsContainer} />

			<Switch>
				<Route exact path="/animal" render={null} />
				<Route component={Home} />
			</Switch>
		</div>
	);
}

export default App;
