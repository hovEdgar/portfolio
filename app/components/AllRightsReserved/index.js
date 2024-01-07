import React from "react";
import styles from './RightsFooter.module.scss';
import Link from "next/link";

function AllRightsReserved() {
	return (
		<footer className={styles.footer}>
			<Link href={'https://www.linkedin.com/in/edgar-hovsepyan-9ba0b3233/'}>
				All Rights Reserved Edgar Hovsepyan®
			</Link>
		</footer>
	);
}

export default AllRightsReserved;