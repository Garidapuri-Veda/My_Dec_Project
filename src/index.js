import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import MyApp from "./MyApp";
import classComponent_LyfCycleMethods from "./classComponent_LyfCycleMethods";
import functionalComponent_ReactHooks from "./functionalComponent_ReactHooks"
import NotFound from "./NotFound";
import { createStore } from 'redux';
import myReducer from './myReducer';
import { Provider } from 'react-redux';

const myStore = createStore(myReducer);

const routing = (
  <Router>
    <div>
      <ul>
        <li><Link to="/My App">App</Link></li>
        <li><Link to="/classComponent_LyfCycleMethods">LyfCycle</Link></li>
        <li><Link to="/functionalComponent_ReactHooks">ReactHooks</Link></li>
      </ul>
      <Switch>
        <Route exact path="/My App" component={MyApp} />
        <Route exact path="/classComponent_LyfCycleMethods" component={classComponent_LyfCycleMethods} />
        <Route exact path="/functionalComponent_ReactHooks" component={functionalComponent_ReactHooks} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  <Provider store={myStore}>
    <React.StrictMode>
      {routing}
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
