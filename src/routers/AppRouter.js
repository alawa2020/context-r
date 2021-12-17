import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutScreen from '../components/AboutScreen';
import HomeScreen from '../components/HomeScreen';
import LoginScreen from '../components/LoginScreen';
import NavBar from './NavBar';

const AppRouter = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/login" component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
