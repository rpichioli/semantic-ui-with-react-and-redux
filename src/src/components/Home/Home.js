import React from 'react'
import PropTypes from 'prop-types'

class Home extends React.Component {
	render () {
		return (
			<div>
				<h1>Welcome!</h1>
				<p>You are in a React + Redux application using Semantic UI and it's React components.</p>
				<p>The ideia is to build a full-working app demonstrating the usage of these technologies togheter in a real-life based application. The app has no focus on server-side so we will handle Redux store directly with actions and reducers without API request.</p>
				<p>Semantic UI has a lot of good patterns, components and more and is being adopted by developers each time more day by day, so it's nice and good to see it in action with it's React components.</p>
				<h2>Important references</h2>
				<ul>
					<li><a href="https://reactjs.org/" target="_blank">React</a></li>
					<li><a href="https://redux.js.org/basics/usage-with-react" target="_blank">Redux - Usage with React</a></li>
					<li><a href="https://semantic-ui.com//" target="_blank">Semantic UI</a></li>
					<li><a href="https://react.semantic-ui.com/" target="_blank">Semantic UI - React Components</a></li>
				</ul>
			</div>
		)
	}
}

export default Home;
