'use client'
import React, {useEffect, useState} from 'react';
import styles from './ScrollIncrementer.module.scss';
import {placeZerosAtStart} from "@/app/utils/helpers";

const ScrollIncrementer = () => {
	const [number, setNumber] = useState(0);

	const handleScroll = (event) => {
		// Check the scrolling direction
		const scrollingDown = event.deltaY > 0;
		// Increase or decrease the number based on the scrolling direction
		const increment = scrollingDown ? 2 : -2; // change number in order to make progress slower or faster
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
		<div className={styles.container}>
			{/* Non-scrollable component content here */}
			<h3>Scroll to increase/decrease the number</h3>
			<svg width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
				{/* Create a linear gradient */}
				<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset={`${number}%`} stopColor="white" />
					<stop offset={`${number}%`} stopColor="#647275" />
				</linearGradient>
				{/* Use the gradient as a mask for the text */}
				<text stroke="white" strokeWidth="2" x="20px" y="50%" dy=".3em" fontSize="120" fontWeight="bold" fill="url(#gradient)">
					{placeZerosAtStart(number)}{Math.round(number)}%
				</text>
			</svg>
		</div>
	);
};

export default ScrollIncrementer;
