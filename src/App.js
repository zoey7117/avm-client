import React from 'react';
import './App.css';
import AnimalsContainer from './containers/AnimalsContainer';
import Home from './components/home/Home';
import Overlay from './components/overlay/Overlay';

function App() {
	return (
		<div className="App">
			<Home />
			{/* <Overlay /> */}
			<AnimalsContainer />
		</div>
	);
}

export default App;
