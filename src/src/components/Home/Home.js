import React from 'react';
import { Message, Header } from 'semantic-ui-react';

class Home extends React.Component {
	render () {
		return (
			<React.Fragment>
				<Header as='h1' dividing>Welcome buddy</Header>
				<p>Navigate the top menu to explore the application and documentation.</p>

				<h4>Relative repositories by my own</h4>
				<ul>
					<li><a href="https://github.com/rpichioli/library-react-spa-app" rel="noopener noreferrer" target="_blank">React SPA in a library basic case exploring the library usage</a></li>
					<li><a href="https://github.com/rpichioli/spa-with-react-redux" rel="noopener noreferrer" target="_blank">React and Redux SPA synchronized with localStorage handling state instead of database</a></li>
					<li><a href="https://github.com/rpichioli/react-with-nodejs-and-sequelize" rel="noopener noreferrer" target="_blank">Relational database CRUDs with NodeJS API in the server-side and React-Redux at the front-end</a></li>
				</ul>

				<h4>Important references from used technologies</h4>
				<ul>
					<li><a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a></li>
					<li><a href="https://redux.js.org/basics/usage-with-react" rel="noopener noreferrer" target="_blank">Redux - Usage with React</a></li>
					<li><a href="https://semantic-ui.com//" rel="noopener noreferrer" target="_blank">Semantic UI</a></li>
					<li><a href="https://react.semantic-ui.com/" rel="noopener noreferrer" target="_blank">Semantic UI - React Components</a></li>
				</ul>

				<br />

				<Message info>
			    <Message.Header>Do you like the project?</Message.Header>
			    <p>Help me starring the <a href="https://github.com/rpichioli/semantic-ui-with-react-and-redux" rel="noopener noreferrer" target="_blank">repository</a> or fork to pull request me with your improvements, I'll be glad. <a href="https://github.com/rpichioli/" rel="noopener noreferrer" target="_blank">Follow me in github</a> :)</p>
			  </Message>
			</React.Fragment>
		)
	}
}

export default Home;
