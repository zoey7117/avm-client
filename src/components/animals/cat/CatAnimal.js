import React from 'react';
import './Animal.css';
let yes = document.querySelector('.animal-true')
let no = document.querySelector('.animal-false')

class CatAnimal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			alive: true,
			extinct: false,
			mammal: true,
			amphibian: false,
			arms: false,
			legs: true,
			fly: false,
			livesInWater: false,
			fur: true,
			famous: false,
			male: true,
			actor: false,
			athelete: false,
			musician: false,
			politician: false,
			singer: false,
			awardWinner: false,
			ageAbove40: false
		};
	}

	isClicked() {
		if (state) {
			yes.classList.add('show')
		} else {
			no.classList.add('show')
		}
	}
	render() {
		return (
			<div></div>



		)
	}
}

export default CatAnimal;

