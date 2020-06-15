import React from 'react';
// import Animal from '../stash/Animal';
import './Animal.css';

class Animals extends React.Component {
	render() {
		let animals = this.props.animals.animals;
		let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
		console.log('random animal', randomAnimal);

		if (!randomAnimal) return null;

		return (
			<div>
				<div>
					<div className="animal-container">
						<div className="animal-child yes">True</div>

						<div className="animal-child questions">
							<h1>Is it bigger than a breadbox? {randomAnimal.name}</h1>
							{console.log(randomAnimal)}
						</div>
						<div className="animal-child no">Not True</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Animals;
