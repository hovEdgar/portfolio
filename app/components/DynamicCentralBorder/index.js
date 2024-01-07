import React from "react";
import {useSelector} from "react-redux";
import {selectGlobalState} from "@/app/redux/globalSlice";
import styles from './DynamicCentralBorder.module.scss';

function DynamicCentralBorder() {
	const { loader } = useSelector(selectGlobalState);

	return (
		<div
			className={styles.delimiter}
			style={{ width: `${100-loader}vw`}}
			aria-expanded={+loader === 100}
		/>
	);
}

export default DynamicCentralBorder;