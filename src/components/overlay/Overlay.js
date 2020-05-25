import React from 'react';
import './Overlay.css';
import { Link } from 'react-router-dom';

const Overlay = ({ children, onClick }) => {
	return (
		<div>
			<div className="circle" />

			<div onClick={onClick}>{children}</div>
		</div>
	);
};

export default Overlay;
