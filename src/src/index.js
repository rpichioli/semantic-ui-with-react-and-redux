import React from 'react';
import ReactDOM from 'react-dom';
// Routing
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Semantic CSS
import 'semantic-ui-css/semantic.min.css';
// Components
import App from './container/App/App';
import Home from './components/Home/Home';
import About from './components/About/About';
// Internal
import * as serviceWorker from './serviceWorker';

// Browser history
const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<App>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				{/*<Route component={NotFound} />*/}
			</Switch>
		</App>
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
