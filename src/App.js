import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//import { Counter } from './features/counter/Counter';
import GuestHome from './Component/GuestHome/GuestHome'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import Confirm from './Component/Confirm/Confirm'
import SelectArea from './Component/SelectArea/SelectArea'
import UserHome from './Component/UserHome/UserHome'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={GuestHome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/select-area" component={SelectArea} />
          <Route path="/home" component={UserHome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
