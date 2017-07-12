import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Template extends Component {
	render() {
		return (
			<Link to="/theme" className="Template-item">
				<img className="Template-image" src={require(`../img/${this.props.image}`)} alt={`${this.props.name}`}/>
				<h6>{this.props.name}</h6>
				<p>{this.props.description}</p>
				<button className="App-button App-button-primary">Select</button>
			</Link>
		)
	}
}

export default Template;