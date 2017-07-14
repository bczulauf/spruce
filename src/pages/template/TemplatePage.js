import React, { Component } from 'react';
import Template from '../../components/Template';
import data from '../../data/data';
import './Template.css';

class TemplatePage extends Component {
	render() {
		return (
			<div className="App-container App-container-top">
				<h3>Choose a design style to get started.</h3>
				<div className="Template-items App-content-top">
					{data.themes.map(theme => <Template key={theme.id} {...theme} />)}
				</div>
			</div>
		)
	}
}

export default TemplatePage;