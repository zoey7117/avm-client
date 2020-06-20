import React, { useEffect } from 'react';
import './Animal.css';
import Animals from './Animals.js';

class RandomAnimal extends React.Component {
	render() {
		let animals = this.props.animals.animals;
		let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
		console.log('random animal', randomAnimal);
		// const newOne = randomAnimal;

		if (!randomAnimal) return null;
		return <Animals animal={randomAnimal} />;
	}
}
export default RandomAnimal;
