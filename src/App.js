import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/home/HomePage';
import ProjectPage from './pages/project/ProjectPage';
import StartPage from './pages/start/StartPage';
import ThemePage from './pages/theme/ThemePage';
import TemplatePage from './pages/template/TemplatePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-main">
          <Switch>
            <Route exact path="/" component={HomePage}  />
            <Route path="/project" component={ProjectPage} />
            <Route path="/start" component={StartPage} />
            <Route path="/theme" component={ThemePage} />
            <Route path="/template" component={TemplatePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
