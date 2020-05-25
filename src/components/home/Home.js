import React from 'react';
import './Home.css';
import Overlay from '../overlay/Overlay';

const runAnimation = () => {
	document.querySelector('.circle').classList.add('activate');
};

const Home = () => {
	return (
		<div>
			<Overlay onClick={runAnimation}>
				<div className="flex-home">
					<div className="flex-child animal">Animal</div>
					<div className="flex-child vegetable">Vegetable</div>
					<div className="flex-child mineral">Mineral</div>
				</div>
				{/* <h3>?</h3> */}
			</Overlay>
		</div>
	);
};
export default Home;

{
	/* <div class="circle">
    <span class="content">Content</span>
</div> */
}
