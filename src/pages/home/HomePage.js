import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class HomePage extends Component {
	render() {
		return (
			<div>
				<div className="Home-image">
					<div>
						<h1 className="Home-header">
							Create your outdoor oasis.
						</h1>
						<h2>Simple. Affordable. Fun.</h2>
						<Link to="/start">
							<button className="App-button App-button-primary">Get Started</button>
						</Link>
					</div>
				</div>
				<div className="App-row App-container">
					<div className="App-col">
						<h3 className="App-text-green">How Garden Spruce works.</h3>
						<h6>1. Pick an award-winning design</h6>
						<p className="Home-p">Our design themes are crafted to not only look great but also to be drought-resitant and easy to maintain.</p>
						<h6>2. Make it yours</h6>
						<p className="Home-p">Pick the design packages that you need. You can add everything from vegetable gardens to patios.</p>
						<h6>3. Implement in a weekend</h6>
						<p className="Home-p">Our packages are designed to be installed in a weekend. We include the tools and support to make DIY fun and easy.</p>
					</div>
					<div className="App-col">
						
					</div>
				</div>
			</div>
		)
	}
}

export default HomePage;