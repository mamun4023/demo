import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';

function App(){
  return (
       <>
            <ToastContainer/>
            <Router>
              <Switch>
                  <Route exact path = "/" component = {LoginPage} />
                  <Route exact path = "/dashboard" component = {Dashboard} />
              </Switch>
            </Router>
       </>
  );
}

export default App;
