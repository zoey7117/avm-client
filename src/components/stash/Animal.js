import React from 'react';
import './Animal.css';

// const Animals = () => {
// 	return <div />;
// };

class Animal extends React.Component {
	render() {
		console.log('random', this.props.randomAnimal, this.props);
		// const animal = this.props.animal;
		const { animal } = this.props;
		console.log(animal);
		// let name = animal.name;

		return (
			<div>
				<div className="animal-container">
					<div className="animal-child yes">True</div>

					<div className="animal-child questions">
						<h1>Is it bigger than a breadbox? {animal.name}</h1>
						{console.log(animal)}
					</div>
					<div className="animal-child no">Not True</div>
				</div>
			</div>
		);
	}
}
export default Animal;
