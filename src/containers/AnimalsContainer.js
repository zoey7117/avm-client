import React from 'react';
import { connect } from 'react-redux';
import { fetchAnimals } from '../actions/animalsAction';
import Animals from '../components/Animals';

class AnimalsContainer extends React.Component {
	componentDidMount() {
		this.props.fetchAnimals();
	}

	render() {
		console.log(this.props);

		return (
			<div>
				<Animals animals={this.props.animals} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { animals: state.animals };
};

export default connect(mapStateToProps, { fetchAnimals })(AnimalsContainer);
