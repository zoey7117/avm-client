import React from 'react';
import './Overlay.css';

const runAnimation = () => {
	document.querySelector('.circle').classList.add('.activate');
};

const Overlay = ({ children, onClick }) => {
	return (
		<div className="parent">
			<div className="circle" />
			<div onClick={onClick}>{children}</div>
		</div>
	);
};

export default Overlay;
