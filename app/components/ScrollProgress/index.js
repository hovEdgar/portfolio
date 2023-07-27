'use client'
import React, { useState, useEffect } from 'react';

const ScrollIncrementer = () => {
	const [number, setNumber] = useState(0);

	const handleScroll = (event) => {
		// Check the scrolling direction
		const scrollingDown = event.deltaY > 0;
		// Increase or decrease the number based on the scrolling direction
		const increment = scrollingDown ? 1 : -1;
		setNumber((prevNumber) => {
			const newNumber = prevNumber + increment;
			// Ensure the number is between 0 and 100
			return Math.min(100, Math.max(0, newNumber));
		});
	};

	useEffect(() => {
		// Add the event listener for the wheel event on the window
		window.addEventListener('wheel', handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('wheel', handleScroll);
		};
	}, []);

	return (
		<div style={{background: 'orange', height: '100%'}}>
			{/* Your non-scrollable component content here */}
			<h1>Scroll to increase/decrease the number</h1>
			<p>{Math.round(number)}</p>
		</div>
	);
};

export default ScrollIncrementer;

