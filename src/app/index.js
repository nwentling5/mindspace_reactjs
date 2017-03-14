import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory, IndexRoute } from "react-router";
import axios from 'axios';

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Root } from "./components/Root";
import { User } from "./components/User";
import { FetchDemo } from "./components/FetchDemo";

class App extends React.Component {
	// constructor(){
	// 	super();
	// 	this.state = {
	// 		homeLink: "Home",
	// 		homeMounted: true
	// 	};
	// }

	// onGreet(){
	// 	alert("Hello!");
	// }

	// onChangeLinkName(newName){
	// 	this.setState({
	// 		homeLink: newName
	// 	});
	// }

	// onChangeHomeMounted(){
	// 	this.setState({
	// 		homeMounted: !this.state.homeMounted
	// 	});
	// }

	render(){
		/*let homeCmp = "";
		if (this.state.homeMounted){
			homeCmp = (
				<Home 
					name={"Max"} 
					initalAge={26} 
					greet={this.onGreet}
					changeLink={this.onChangeLinkName.bind(this)}
					initalLinkName={this.state.homeLink} 
				/>
			);		
		}*/
		return  (
				// With browserHistory it will not reach out to the server.
				<Router history={browserHistory}>
					<Route path={"/"} component={Root}>
						<IndexRoute component={Home}/>
						<Route path={"user/:id"} component={User} />
						<Route path={"home"} component={Home} />
					</Route>
					<Route path={"home-single"} component ={Home}/>
					<Route path={"reddit"} component ={YelpDataFetchContainer}/>
				</Router>
			/*{<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink={this.state.homeLink}/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						{homeCmp}
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">Unmount Home Component</button>
					</div>
				</div>
			</div>} */
		);
	}
}

render(<App/>, window.document.getElementById("app"));