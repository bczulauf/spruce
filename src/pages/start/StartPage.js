import React, { Component } from 'react';
import StartForm from '../../components/StartForm';
import './Start.css';

class StartPage extends Component {
	render() {
		return (
			<div className="App-container App-container-top">
				<h3>
					Tell us about your garden.
				</h3>
				<div className="App-row App-content-top">
					<div className="App-col">
						<StartForm />
					</div>
					<div className="App-col"></div>
				</div>
			</div>
		)
	}
}

export default StartPage;