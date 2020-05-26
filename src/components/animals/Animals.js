import React from 'react';
import Animal from './Animal';

// const Animals = () => {
// 	return <div />;
// };

class Animals extends React.Component {
	renderAnimals(animals) {
		return animals.map((animal) => <Animal key={animal.id} animal={animal} />);
	}
	render() {
		console.log(this.props.animals);
		return <div>{this.renderAnimals(this.props.animals)}</div>;
	}
}
export default Animals;
