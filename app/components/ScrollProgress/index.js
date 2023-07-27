"use client";
import React, { useState } from 'react';

const ScrollIncrementer = () => {
	const [number, setNumber] = useState(0);

	const handleScroll = (event) => {
		console.log(`:::event:::`, event)
		const totalHeight = event.target.scrollHeight - event.target.clientHeight;
		const scrollPosition = event.target.scrollTop;
		const progress = (scrollPosition / totalHeight) * 100;
		const clampedProgress = Math.min(100, Math.max(0, progress));
		setNumber(clampedProgress);
	};

	return (
		<div
			style={{
				border: '1px solid #ccc',
				padding: '10px',
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				position: 'relative',
				background: 'orange'
			}}
			onScroll={handleScroll}
		>
			<div style={{ height: '500px' }}>
				{/* Your non-scrollable component content here */}
			</div>
			<div
				style={{
					position: 'absolute',
					bottom: '10px',
					left: '50%',
					transform: 'translateX(-50%)',
					textAlign: 'center',
				}}
			>
				<h1>Scroll down to increase the number</h1>
				<p>{Math.round(number)}</p>
			</div>
		</div>
	);
};

export default ScrollIncrementer;

