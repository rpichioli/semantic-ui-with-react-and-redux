import React from 'react';
import {Header} from "semantic-ui-react";

class NotFound extends React.Component {
	render () {
		return (
			<React.Fragment>
				<Header as='h1' dividing>Ops! Page not found..</Header>
				<p>If you tried to access directly by URL, please try using the top menu.</p>
				<p>Contact administrator if you need some help.</p>
			</React.Fragment>
		)
	}
}

export default NotFound;
