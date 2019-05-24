import React from 'react';
import { Header } from 'semantic-ui-react';

class About extends React.Component {
	render () {
		return (
			<React.Fragment>
				<Header as='h1' dividing>About</Header>
				<p>Single-Page Application built with React using Redux to handle state in sync with localStorage and Semantic UI in whole layout experimenting it's own React components and features.</p>
				<p>The main ideia is to build a full-working app demonstrating the usage of these <b>technologies togheter in a real-life based application</b> passing from CRUD handling Redux data, form usage and grid view to specific and advanced features exploring Semantic UI components connected to Redux store.</p>
				<p>There's no interest on server-side here, that's why I made the choice to use Redux store like database and take the chance to show how I work in sync with localStorage.</p>
				<p><b>Semantic UI</b> has a lot of good patterns, components and more. I'ts being adopted in mass by developers each time more, day by day, so it's nice and good to see it in action! And of course it's ownReact components too.</p>
			</React.Fragment>
		)
	}
}

export default About;
