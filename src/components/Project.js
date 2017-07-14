import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {
	render() {
		return (
			<Link to="/project" className="Theme-project">
				<img className="Theme-image" src={require(`../img/${this.props.image}`)} alt={`${this.props.name}`}/>
				<h6>{this.props.name}</h6>
				<p>{this.props.description}</p>
				<button className="App-button App-button-primary">Select</button>
			</Link>
		)
	}
}

export default Project;