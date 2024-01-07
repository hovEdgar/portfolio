import React from "react";
import styles from './DynamicCentralBorder.module.scss';
import {useSelector} from "react-redux";
import {selectGlobalState} from "@/app/redux/globalSlice";

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