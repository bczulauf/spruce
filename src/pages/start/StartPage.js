import React, { Component } from 'react';
import StartForm from '../../components/StartForm';
import './Start.css';

class StartPage extends Component {
	render() {
		return (
			<div>
				<h3 className="App-text-green">
					Tell us about your garden.
				</h3>
				<StartForm />
			</div>
		)
	}
}

export default StartPage;