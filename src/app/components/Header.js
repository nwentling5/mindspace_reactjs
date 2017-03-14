import React from 'react';
import { Link } from 'react-router';

// Stateless component - Doesn't need state
// Props is still provided in stateless components
export const Header = (props) => {
	return (
		<nav className="navbar navbar-default">
			<div className="container">
					<div className="navbar-header">
					<div className="nav navbar-nav">
						{/*<li><a href="#">{props.homeLink}</a></li>*/}
						<li><Link to={"/home"} activeStyle={{color: "red"}}>Home</Link></li>
						<li><Link to={"/user/10"} activeClassName={"active"}>User</Link></li>
						<li><Link to={"reddit"}>Reddit</Link></li>
					</div>
				</div>
			</div>
		</nav>
	);
};
