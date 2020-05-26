import React from 'react';
import './Home.css';
import Overlay from '../overlay/Overlay';
import { Link } from 'react-router-dom';
import Rule from './Rule';

const runAnimation = () => {
	document.querySelector('.circle').classList.add('activate');
};

const Home = () => {
	return (
		<div>
			{/* <Overlay onClick={runAnimation}> */}
			{/* <Rule /> */}
			<div className="flex-instructions">
				<p>
					<span>This is a guessing game.</span> <br />Once you hit start, you'll land on the pertinant page
					and can choose up to 10 clues, whose answer can only be true or false. Once you think you know the
					answer you have three chances to guess correctly.<br />
					<br />
					<Link to="/animal">
						<span>start</span>
					</Link>
				</p>
			</div>
			<div className="flex-home">
				<div className="flex-child animal">Animal</div>

				<div className="flex-child vegetable">Vegetable</div>
				<div className="flex-child mineral">Mineral</div>
			</div>
			{/* <h3>?</h3> */}
			{/* </Overlay> */}
		</div>
	);
};
export default Home;
