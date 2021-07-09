import * as React from "react";

import styled from "styled-components";

const Header = styled.h1`
	margin: 2rem;
	font-size: 4rem;
`;

function App(): JSX.Element {
	return (
		<div id="app">
			<Header>It works!</Header>
		</div>
	);
}

export default App;
