import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Content, Footer } from "components/+Layout";

import "./App.css";

function App() {
	return (
		<RecoilRoot>
			<Router>
				<Header />
				<Content />
				<Footer />
			</Router>
		</RecoilRoot>
	);
}

export default App;
