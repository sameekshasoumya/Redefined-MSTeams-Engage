import './App.scss';
import { AuthProvider } from './processAuth';
import ActionPage from './teams_comp/ActionPage/ActionPage';
import HomePage from './teams_comp/HomePage/HomePage';
import NoMatch from './teams_comp/NoMatch/NoMatch';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import MainPage from './teams_comp/MainPage/MainPage'
import Login from './teams_comp/LoginPage/LoginPage';
import PrivateRoute from './teams_comp/PrivateRoute';
import ForgotPassword from './teams_comp/ForgotPassword/ForgotPassword';


function App() {
  return (
    <Router>
      <AuthProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute exact path="/home" component={HomePage}></PrivateRoute>
          <PrivateRoute exact path="/:id" component={ActionPage}></PrivateRoute>
        <Route path="/" >
          <MainPage />
        </Route>
        <Route path="*" >
          <NoMatch />
        </Route>
      </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;