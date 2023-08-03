import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Portfolio</title>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link href="https://fonts.googleapis.com/css2?family=Gajraj+One&display=swap" rel="stylesheet"/>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			<div id="root-modal"></div>
			<style>
				@import url('https://fonts.googleapis.com/css2?family=Gajraj+One&display=swap');
			</style>
			</body>
		</Html>
	)
}