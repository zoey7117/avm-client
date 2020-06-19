import React from 'react';
import './Animal.css';

let questions = {
	alive: 'Is it alive?',
	extinct: 'Is is extinct?'
};

class Animals extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			yes: [],
			no: []
		};
		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(animal, key, question) {
		if (animal[key]) {
			this.setState((state) => {
				return { yes: [ ...state.yes, question ] };
			});
		} else {
			this.setState((state) => {
				return { no: [ ...state.no, question ] };
			});
		}
	}

	generateQuestions = (randomAnimal) => {
		return Object.keys(randomAnimal).map((key) => {
			return (
				<li className={key} onClick={() => this.handleClick(randomAnimal, key, questions[key])}>
					{questions[key]}
				</li>
			);
		});
	};

	generateQuestionsYes = () => {
		return this.state.yes.map((question) => {
			return <li>{question}</li>;
		});
	};

	generateQuestionsNo = () => {
		return this.state.no.map((question) => {
			return <li>{question}</li>;
		});
	};

	render() {
		let animals = this.props.animals.animals;
		let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
		console.log('random animal', randomAnimal);
		let yes = document.querySelectorAll('.flex-animal.yes');
		let animalEx = document.getElementsByClassName('flex-animal yes');
		console.log('animalEx', animalEx, 'yes', yes);

		if (!randomAnimal) return null;
		return (
			<div>
				<div className="flex-instructions animal-hed">
					<p>
						<span>Animal</span>
						<br />
						Is it bigger than a breadbox?{' '}
					</p>
					{/* <strong>{String(randomAnimal.breadbox)}</strong> */}
				</div>

				<div className="animal-container">
					<div className="flex-animal yes">
						<h1>
							<ul>
								<span>yes</span>
								{this.generateQuestionsYes()}
							</ul>
						</h1>
					</div>

					<div className="flex-animal question">
						<h1>
							<ul>
								<h3>{String(randomAnimal.breadbox)}</h3>
								{this.generateQuestions(randomAnimal)}
							</ul>
						</h1>
					</div>

					<div className="flex-animal no">
						<h1>
							<ul>
								<span>no</span>
								{this.generateQuestionsNo()}
							</ul>
						</h1>
					</div>
				</div>
			</div>
		);
	}
}
export default Animals;
