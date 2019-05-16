import React from 'react'
import {Header, Image, Item} from "semantic-ui-react";
import {connect} from 'react-redux';

class Features extends React.Component {
	render () {
		let bands = this.props.bands;
		return (
			<React.Fragment>
				<Header as='h1' dividing>Advanced components and features</Header>
				<p>At this point we will generate and manipulate Semantic UI React components with existing Redux information.</p>

				<Item.Group divided>
					{bands.map((item, i) => {
						return (
							<Item>
						    <Item.Image size='tiny' src={item.image} />

						    <Item.Content>
						      <Item.Header as='a'>{item.title}</Item.Header>
						      <Item.Meta>{item.nationality}</Item.Meta>
						      <Item.Description>{item.description}</Item.Description>
						      <Item.Extra>Rating: {item.rating} - Created in: {item.creationDate}</Item.Extra>
						    </Item.Content>
						  </Item>
						)
					})}
				</Item.Group>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {bands: state.bands}
}

export default connect(mapStateToProps, {})(Features);
