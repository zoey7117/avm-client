import React from 'react';
import Animal from './Animal';

class Animals extends React.Component {
	renderAnimals(animals) {
		return animals.map((animal) => <Animal key={animal.id} animal={animal} />);
	}
	render() {
		let animals = this.props.animals.animals;
		// console.log(this.props.animals, animals, this.props.animals.animals);
		// console.log(animals.length);
		let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
		console.log('random animal', randomAnimal);
		{
			// this.renderAnimals(animals);
		}

		return (
			<div>
				{this.renderAnimals(animals)}
				{/* <Animal randomAnimal={randomAnimal} /> */}
			</div>
		);
	}
}
export default Animals;
// var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
