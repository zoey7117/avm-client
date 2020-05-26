import React from 'react';
import './Animal.css';

// const Animals = () => {
// 	return <div />;
// };

class Animal extends React.Component {
	render() {
		console.log(this.props.animal);
		return (
			<div>
				<div className="animal-container">
					<div className="animal-child yes">Animal</div>

					<div className="animal-child questions">Vegetable</div>
					<div className="animal-child no">Mineral</div>
				</div>
			</div>
		);
	}
}
export default Animal;
