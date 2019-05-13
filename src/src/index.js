import React from 'react';
import ReactDOM from 'react-dom';
// Routing
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Semantic CSS
import 'semantic-ui-css/semantic.min.css';
// Routes
import Routes from './setup/Routes';
// Components
import App from './container/App/App';
// Internal
import * as serviceWorker from './serviceWorker';

// Browser history
const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<App>
			<Routes />
		</App>
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
