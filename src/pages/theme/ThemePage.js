import React, { Component } from 'react';
import Project from '../../components/Project';
import themes from '../../data/themes';
import './Theme.css';

class ThemePage extends Component {
	render() {
    const theme = themes['highline'];

		return (
			<div>
				<div className="Theme-splash">
					<div className="App-container Theme-container-top">
						<div className="Theme-overlay">
							<div>
								<h3>{theme.name}</h3>
								<p>{theme.description}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="App-container">
					<h3>Pick a project.</h3>
					<div className="App-row App-content-top">
						{theme.projects.map(project => <Project key={project.id} {...project} />)}
					</div>
				</div>
			</div>
		)
	}
}

export default ThemePage;