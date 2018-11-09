import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Login from './Login';
// import NotFound from './notFound';
import Register from './Register';
import Board from './Board';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <Switch>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/register" component={Register} />
                {/* <Route component={NotFound}/> */}
                <Route path="/board" component={Board} />
            </div>
        </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();