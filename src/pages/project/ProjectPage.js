import React, { Component } from 'react';
import projects from '../../data/projects';
import projectImage from './../../img/veggiesSplash.jpg';
import './Project.css';

class ProjectPage extends Component {
	render() {
		const project = projects['highline-veggies'];
		return (
			<div className="App-container App-container-top">
				<div className="App-subheader Project-subheader">
					<h3 className="App-left">Customize your vegetable garden</h3>
					<div className="App-right">
						${project.price} total
					</div>
					<button className="App-button App-button-primary Project-button">Checkout</button>
				</div>
				<div className="App-row">
					<div className="App-col">
						<h6>Highline Vegetable Garden</h6>
						<p>{project.description}</p>
						<p>Difficulty: {project.difficulty}</p>
						<p>Time to install: {project.time} day</p>
						{project.inputs.map(input => <select className="Project-select" key={input.id}>{input.options.map(option => <option key={option.id}>{option.name}</option>)}</select>)}
						<div className="Project-box">
							<h6>Plants</h6>
							<ul className="Project-list">
								{project.products.plants.map(product => <li key={product.id}>{product.amount} {product.name}</li>)}
							</ul>
						</div>

						<div className="Project-box">
							<h6>Materials</h6>
							<ul className="Project-list">
								{project.products.materials.map(product => <li key={product.id}>{product.amount} {product.name}</li>)}
							</ul>
						</div>
					</div>
					<div className="App-col Project-image">
						<img src={projectImage} />
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectPage;