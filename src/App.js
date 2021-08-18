import React from "react";
import "./App.css";
import Header from "./Containers/Header";
import Container from "./container";
import Nav from "./Containers/Nav";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Header />
				<Nav />
				<Switch>
					<Route path="/container" component={Container} />
					<Route path="/About" component={About} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
