import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//navigation
import Login from '../../page/auth/Login.js';
import Dashboard from '../../page/Dashboard.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/pendaftaran" component={Dashboard}/>
          <Route path="/pasien" component={Dashboard}/>
          <Route path="/datapasien" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
