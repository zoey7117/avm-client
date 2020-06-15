import React from 'react';
import Animal from './Animal';

class Animals extends React.Component {
	renderAnimals(animals) {
		return animals.map((animal) => <Animal key={animal.id} animal={animal} />);
	}
	render() {
		let animals = this.props.animals.animals;
		console.log(this.props.animals, animals, this.props.animals.animals);
		console.log(this.renderAnimals(animals));

		return <div>{this.renderAnimals(animals)}</div>;
	}
}
export default Animals;
