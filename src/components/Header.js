import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
				<div className="App-container App-header-content">
					<Link to="/" className="App-logo">
						<img src={logo} className="App-logo-image" alt="logo" />
						<div>gardenspruce</div>
					</Link>
					<a href="login.html" className="App-right App-header-action">Login</a>
				</div>
      </header>
    )
  }
}

export default Header;