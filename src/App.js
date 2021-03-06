import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

// react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/checkout">
						<Checkout />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
