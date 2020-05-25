import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AnimalsContainer from './containers/AnimalsContainer';
import Home from './components/home/Home';
import Overlay from './components/overlay/Overlay';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/animal" component={AnimalsContainer} />
				<Route component={Home} />
			</Switch>
			{/* <Route path="/" component={Home} />
			<Route path="/animal" component={AnimalsContainer} /> */}
		</div>
	);
}

export default App;
