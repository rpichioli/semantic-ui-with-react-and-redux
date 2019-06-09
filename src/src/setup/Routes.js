import React from 'react';
// Routing
import { Route, Switch } from 'react-router-dom';
// Components
import NotFound from '../components/NotFound/NotFound';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import ReferenceGuide from '../components/ReferenceGuide/ReferenceGuide';
import CRUDList from '../components/CRUD/BandsList';
import CRUDForm from '../components/CRUD/BandsForm';
import Features from '../components/Features/Features';

const Routes = (props) => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/going-deeper-in-crud" component={CRUDList} />
			<Route exact path="/going-deeper-in-crud/add" component={CRUDForm} />
			<Route exact path="/going-deeper-in-crud/edit/:_id" component={CRUDForm} />
			<Route exact path="/advanced-components-and-features" component={Features} />
			<Route exact path="/reference-guide" component={ReferenceGuide} />
			{/*<Route exact path="/release-notes" component={About} />*/}
			<Route component={NotFound} />
		</Switch>
	)
}

export default Routes;
