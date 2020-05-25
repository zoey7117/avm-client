import React from 'react';
import './App.css';
import AnimalsContainer from './containers/AnimalsContainer';
import Home from './components/home/Home';

function App() {
	return (
		<div className="App">
			<Home />
			hi <AnimalsContainer />
		</div>
	);
}

export default App;
