'use client'
import React, { useState } from "react";
import styles from './Gritting.module.scss';
import ScrollProgress from "@/app/components/ScrollIncrementer";
import {useSelector} from "react-redux";
import {selectGlobalState} from "@/app/redux/globalSlice";
import DynamicCentralBorder from "@/app/components/DynamicCentralBorder";

function Gritting() {
	const { loader } = useSelector(selectGlobalState);

	return (
		<>
			<div className={styles.top} aria-expanded={+loader === 100}>
				<ScrollProgress />
			</div>
			<DynamicCentralBorder />
			<div className={styles.bottom} aria-expanded={+loader === 100} />
		</>
	);
}

export default Gritting;