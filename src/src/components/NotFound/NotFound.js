import React from 'react'
import PropTypes from 'prop-types'

class NotFound extends React.Component {
	render () {
		return (
			<React.Fragment>
				<h1>Ops! Page not found</h1>
				<p>If you tried to access directly by URL, please try using the top menu.</p>
			</React.Fragment>
		)
	}
}

export default NotFound;
