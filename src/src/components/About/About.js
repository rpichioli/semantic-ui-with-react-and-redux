import React from 'react';
import { Header } from 'semantic-ui-react';

class About extends React.Component {
	render () {
		return (
			<React.Fragment>
				<Header as='h1' dividing>About</Header>
				<p>You are in a React + Redux application using Semantic UI and it's React components.</p>
				<p>The ideia is to build a full-working app demonstrating the usage of these <b>technologies togheter in a real-life based application</b>.</p>
				<p>This application has no focus on server-side so we will <b>handle Redux store directly</b> calling actions and reducers without API requests.</p>
				<p><b>Semantic UI</b> has a lot of good patterns, components and more and is being adopted by developers each time more day by day, so it's nice and good to see it in action with it's React components.</p>
			</React.Fragment>
		)
	}
}

export default About;
