import React from 'react';

// const Animals = () => {
// 	return <div />;
// };

class Animal extends React.Component {
	render() {
		console.log(this.props.animal);
		return <div />;
	}
}
export default Animal;
