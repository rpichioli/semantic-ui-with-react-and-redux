import React from 'react';
// Routing
import { Route, Switch } from 'react-router-dom';
// Components
import Home from '../components/Home/Home';
import About from '../components/About/About';
import NotFound from '../components/NotFound/NotFound';

const Routes = (props) => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			{/*<Route exact path="/going-deeper-in-crud" component={About} />
			<Route exact path="/advanced-components-and-features" component={About} />
			<Route exact path="/reference-guide" component={About} />
			<Route exact path="/release-notes" component={About} />*/}
			<Route component={NotFound} />
		</Switch>
	)
}

export default Routes;
