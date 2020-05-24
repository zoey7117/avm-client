export const fetchAnimals = () => {
	return (dispatch) => {
		dispatch({
			type: 'LOADING_ANIMALS'
		});
		return (
			fetch('http://localhost:3000/api/v1/animals')
				.then((resp) => resp.text())
				// .then(console.log);
				.then((animals) => {
					dispatch({ type: 'FETCH_ANIMALS', payload: animals });
				})
		);
	};
};
