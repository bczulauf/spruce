import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeImage from './../../img/veggiesSplash.jpg';
import './Home.css';

class HomePage extends Component {
	render() {
		return (
			<div>
				<h1 className="Home-header">
					We are a simple, affordable, and fun way to build a beautifully designed garden.
				</h1>
				<div className="App-row">
					<div className="App-col">
						<h3 className="App-text-green">Introducing Garden Spruce</h3>
						<h6>Choose beauty and brains</h6>
						<p className="Home-p">Our design themes are crafted to not only look great but also to be drought-resitant and easy to maintain.</p>
						<h6>Make it yours</h6>
						<p className="Home-p">Pick the design packages that you need. You can add everything from vegetable gardens to patios.</p>
						<h6>Implement in a weekend</h6>
						<p className="Home-p">Our packages are designed to be installed in a weekend. We include the tools and support to make DIY fun and easy.</p>
						<Link to="/template">
							<button className="App-button App-button-primary">Get Started</button>
						</Link>
					</div>
					<div className="App-col Home-image">
						<img src={homeImage} />
					</div>
				</div>
			</div>
		)
	}
}

export default HomePage;