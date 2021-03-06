import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Dashboard from '../Dashboard/Dashboard';
import AddShow from '../ShowIntake/ShowIntake';
import BuildDash from '../BuildDash/BuildDash';
import AddBuild from '../BuilderIntake/BuilderIntake';
import BikeFile from '../BikeFile/BikeFile';

import './App.css';
//import '../Footer/Footer.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div className="app-site">
        <div className="Site-content">
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            
            {/* may become home page, just a test */}
            <ProtectedRoute
              exact
              path="/home"
              component={Dashboard}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/add"
              component={AddShow}
            />
            <ProtectedRoute
              exact
              path="/show/:id"
              component={BuildDash}
            />
            <ProtectedRoute
              exact
              path="/build"
              component={AddBuild}
            />
            {/* this may need to be thought outa bit more \/*/}
            <ProtectedRoute
              exact
              path="/builder/:id"
              component={BikeFile}
            />
            
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
  )}
}

export default connect()(App);
