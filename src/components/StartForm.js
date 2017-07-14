import React, { Component } from 'react';
import { Redirect } from 'react-router'

class StartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
			fireRedirect: false,
			zip: '',
			red: false,
			yellow: false,
			purple: false,
			blue: false,
			pink: false,
			orange: false
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
		this.setState({ fireRedirect: true });
  }

  render() {
		const { fireRedirect } = this.state;

    return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h6>
						Zip
					</h6>
					<div>
						<input type="text" className="Start-input" placeholder="98115" />
					</div>
					<h6>
						Any colors you would like to avoid?
					</h6>
					<div className="App-row">
						<label className={'Start-option-red ' + (this.state.red ? 'Start-checkbox-label Start-checkbox-label-checked' : 'Start-checkbox-label')}>
							Red
							<input type="checkbox" className="Start-checkbox" name="red" checked={this.state.red} onChange={this.handleChange} />
						</label>
						<label className={'Start-option-orange ' + (this.state.orange ? 'Start-checkbox-label Start-checkbox-label-checked' : 'Start-checkbox-label')}>
							Orange
							<input type="checkbox" className="Start-checkbox" name="orange" checked={this.state.orange} onChange={this.handleChange} />
						</label>
						<label className={'Start-option-yellow ' + (this.state.yellow ? 'Start-checkbox-label Start-checkbox-label-checked' : 'Start-checkbox-label')}>
							Yellow
							<input type="checkbox" className="Start-checkbox" name="yellow" checked={this.state.yellow} onChange={this.handleChange} />
						</label>
						<label className={'Start-option-purple ' + (this.state.purple ? 'Start-checkbox-label Start-checkbox-label-checked' : 'Start-checkbox-label')}>
							Purple
							<input type="checkbox" className="Start-checkbox" name="purple" checked={this.state.purple} onChange={this.handleChange} />
						</label>
						<label className={'Start-option-blue ' + (this.state.blue ? 'Start-checkbox-label Start-checkbox-label-checked' : 'Start-checkbox-label')}>
							Blue
							<input type="checkbox" className="Start-checkbox" name="blue" checked={this.state.blue} onChange={this.handleChange} />
						</label>
						<label className={'Start-option-pink ' + (this.state.pink ? 'Start-checkbox-label Start-checkbox-label-checked' : 'Start-checkbox-label')}>
							Pink
							<input type="checkbox" className="Start-checkbox" name="pink" checked={this.state.pink} onChange={this.handleChange} />
						</label>
						<button type="submit" value="Submit" className="App-button App-button-primary">Next</button>
					</div>
				</form>
				{fireRedirect && (
					<Redirect to={'/template'}/>
				)}
			</div>
    );
  }
}

export default StartForm;