import React from 'react';
import Animal from './Animal';

// const Animals = () => {
// 	return <div />;
// };

class Animals extends React.Component {
	render() {
		console.log(this.props.animals);
		return <div />;
	}
}
export default Animals;
