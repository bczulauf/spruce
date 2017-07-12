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
					<h5>
						How big is your space?
					</h5>
					<div className="App-row">
						<label className={this.state.size === 'small' ? 'Start-radio-label Start-radio-label-checked' : 'Start-radio-label'}>
							Small
							<input type="radio" className="Start-radio" name="size" checked={this.state.size === 'small'} value="small" onChange={this.handleChange} />
						</label>
						<label className={this.state.size === 'medium' ? 'Start-radio-label Start-radio-label-checked' : 'Start-radio-label'}>
							Medium
							<input type="radio" className="Start-radio" name="size" checked={this.state.size === 'medium'} value="medium" onChange={this.handleChange} />
						</label>
						<label className={this.state.size === 'large' ? 'Start-radio-label Start-radio-label-checked' : 'Start-radio-label'}>
							Large
							<input type="radio" className="Start-radio" name="size" checked={this.state.size === 'large'} value="large" onChange={this.handleChange} />
						</label>
					</div>
					<h5>
						Any colors you would like to avoid?
					</h5>
					<div className="App-row">
						<label className={'Start-option-red ' + (this.state.red ? 'Start-radio-label Start-radio-label-checked' : 'Start-radio-label')}>
							Red
							<input type="checkbox" className="Start-radio" name="red" checked={this.state.red} onChange={this.handleChange} />
						</label>
						<label className={'Start-option-orange ' + (this.state.orange ? 'Start-radio-label Start-radio-label-checked' : 'Start-radio-label')}>
							Orange
							<input type="checkbox" className="Start-radio" name="orange" checked={this.state.orange} onChange={this.handleChange} />
						</label>
						<label className={'Start-option-yellow ' + (this.state.yellow ? 'Start-radio-label Start-radio-label-checked' : 'Start-radio-label')}>
							Yellow
							<input type="checkbox" className="Start-radio" name="yellow" checked={this.state.yellow} onChange={this.handleChange} />
						</label>
						<label className={'Start-option-purple ' + (this.state.purple ? 'Start-radio-label Start-radio-label-checked' : 'Start-radio-label')}>
							Purple
							<input type="checkbox" className="Start-radio" name="purple" checked={this.state.purple} onChange={this.handleChange} />
						</label>
						<label className={'Start-option-blue ' + (this.state.blue ? 'Start-radio-label Start-radio-label-checked' : 'Start-radio-label')}>
							Blue
							<input type="checkbox" className="Start-radio" name="blue" checked={this.state.blue} onChange={this.handleChange} />
						</label>
						<label className={'Start-option-pink ' + (this.state.pink ? 'Start-radio-label Start-radio-label-checked' : 'Start-radio-label')}>
							Pink
							<input type="checkbox" className="Start-radio" name="pink" checked={this.state.pink} onChange={this.handleChange} />
						</label>
					</div>
					<button type="submit" value="Submit" className="App-button App-button-primary">Next</button>
				</form>
				{fireRedirect && (
					<Redirect to={'/customize'}/>
				)}
			</div>
    );
  }
}

export default StartForm;