import React, { Component } from 'react';
import Project from '../../components/Project';
import themes from '../../data/themes';
import splash from './../../img/splash.jpg';
import './Theme.css';

class ThemePage extends Component {
	render() {
        const theme = themes['highline'];

		return (
			<div>
                <div className="Theme-splash">
                    <img src={splash} />
                    <div className="Theme-overlay">
                        <h3>The Highline</h3>
                        <p>Entertain in style. The Highline is our most popular theme for a reason - its clean lines and soft color palettes are a perfect backdrop for your next outdoor party.</p>
                    </div>
                </div>
				<div className="App-row">
					{theme.projects.map(project => <Project key={project.id} {...project} />)}
				</div>
			</div>
		)
	}
}

export default ThemePage;