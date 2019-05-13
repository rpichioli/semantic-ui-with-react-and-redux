import React from 'react'
import PropTypes from 'prop-types'

class About extends React.Component {
	render () {
		return (
			<React.Fragment>
				<h1>About</h1>
				<p>The semantic-ui-with-react-and-redux repository is made by rpichioliand is a SPA (Single-Page Application) by essence built with Semantic UI using it's React components in a React + Redux setup.</p>
				<p>You are in a React + Redux application using Semantic UI and it's React components.</p>
				<p>The ideia is to build a full-working app demonstrating the usage of these technologies togheter in a real-life based application. The app has no focus on server-side so we will handle Redux store directly with actions and reducers without API request.</p>
				<p>Semantic UI has a lot of good patterns, components and more and is being adopted by developers each time more day by day, so it's nice and good to see it in action with it's React components.</p>
			</React.Fragment>
		)
	}
}

export default About;
