'use client'
import React, {useEffect, useRef, useState} from 'react';
import { placeZerosAtStart } from "@/app/utils/helpers";
import styles from './ScrollIncrementer.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectGlobalState, setLoader} from "@/app/redux/globalSlice";

let startY = 0;

const ScrollIncrementer = () => {
	const { loader } = useSelector(selectGlobalState);
	const dispatch = useDispatch();
	const startTouchY = useRef(null);

	function handleScroll(event) {
		if (loader > 99) {
			return;
		}
		// Check the scrolling direction
		const scrollingDown = event.deltaY < 0;
		// Increase or decrease the number based on the scrolling direction
		const increment = scrollingDown ? 2 : -2; // change number in order to make progress slower or faster
		// set to global state
		dispatch(setLoader(increment));
	}

	useEffect(() => {
		function handleTouchMove(event) {
			if (loader > 99) {
				return;
			}

			const currentY = event.touches[0].clientY;
			const scrollingDown = currentY > startTouchY.current;
			const increment = scrollingDown ? 2 : -2;

			dispatch(setLoader(increment));
		}

		// Add event listeners for touch events on the window
		window.addEventListener('wheel', handleScroll);
		window.addEventListener('touchmove', handleTouchMove);

		// Clean up the event listeners when the component unmounts
		return () => {
			// window.removeEventListener('wheel', handleTouchStart);
			window.removeEventListener('wheel', handleScroll);
			window.removeEventListener('touchmove', handleTouchMove);
		};
	}, [loader, dispatch]);

	return (
		<div className={styles.container}>
			{/* Non-scrollable component content here */}
			<h3 className={styles.gritting}>Scroll to see this website</h3>
			<svg width="100%" height="120" xmlns="http://www.w3.org/2000/svg">
				{/* Create a linear gradient */}
				<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset={`${loader}%`} stopColor="#e8e7cb" />
					<stop offset={`${loader}%`} stopColor="#647275" />
				</linearGradient>
				{/* Use the gradient as a mask for the text */}
				<text stroke="#e8e7cb" strokeWidth="2" x="20px" y="25%" dy=".5em" fontSize="120" fontWeight="bold" fill="url(#gradient)">
					{placeZerosAtStart(loader)}{Math.round(loader)}%
				</text>
			</svg>
		</div>
	);
};

export default ScrollIncrementer;
