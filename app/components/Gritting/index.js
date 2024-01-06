'use client'
import React, { useState } from "react";
import styles from './Gritting.module.scss';

function Gritting() {
	const [start, setStart] = useState(false);

	function startHandler() {
		setStart(true)
	}

	return (
		<>
			<div className={styles.top} aria-expanded={start}>
				<button onClick={startHandler}>Start</button>
			</div>
			<div className={styles.bottom} aria-expanded={start} />
		</>
	);
}

export default Gritting;