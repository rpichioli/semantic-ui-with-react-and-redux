import React from 'react';
import ReactDOM from 'react-dom';
// Routing
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// Redux
import rootReducer from './reducers/rootReducer';
// Local Storage
import { loadState, saveState } from './utils/localStorage';
// Utils
import throttle from 'lodash/throttle';
// Semantic CSS
import 'semantic-ui-css/semantic.min.css';
// Container component
import App from './container/App/App';
// Routes
import Routes from './setup/Routes';
// Internal - Service workers
import * as serviceWorker from './serviceWorker';

// Browser history
const history = createBrowserHistory();
// Get state present in localStorage to set into store
const persistedState = loadState();
// Redux store -> Combined reducers and middleware for real-time monitoring
const store = createStore(
	rootReducer,
	persistedState,
	composeWithDevTools(applyMiddleware(thunk))
);

/**
 * Intercepts each state update and persist it in localStorage
 */
store.subscribe(throttle(() => {
	// 1. Update all provided state - A global state handling aproach
	// saveState(store.getState());

	// 2. Update only specific state collections - Users state only in this case
	saveState({
		bands: store.getState().bands
	});
}), 1000);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App>
				<Routes />
			</App>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
