import React from 'react';
import {Step, Icon, Divider, Form, Header, Message, Segment} from "semantic-ui-react";
import {connect} from 'react-redux';
import {addBand, updateBand} from '../../actions/bands';

class BandsForm extends React.Component {
  state = {
    title: this.props.band.title || '',
    nationality: this.props.band.nationality || '',
    rate: this.props.band.rate || 0,
    status: this.props.band.status || false,
    description: this.props.band.description || '',
    creationDate: this.props.band.creationDate || new Date(),
    loading: false
  }

  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = (e) => {
    e.preventDefault();
  }

	render () {
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
      { key: 'o', text: 'Other', value: 'other' },
    ]

		return (
			<React.Fragment>
        {/* Steps */}
        <Step.Group size='mini'>
          <Step>
            <Icon name='lightbulb' />
            <Step.Content>
              <Step.Title>Application</Step.Title>
              <Step.Description>React + Redux + Semantic UI</Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name='database' />
            <Step.Content>
              <Step.Title>CRUD</Step.Title>
              <Step.Description>How to use all technologies togheter</Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name='list layout' />
            <Step.Content>
              <Step.Title>List data into grid</Step.Title>
              <Step.Description>Extract information from Redux to React + Semantic UI</Step.Description>
            </Step.Content>
          </Step>
          <Step active>
            <Icon name='edit' />
            <Step.Content>
              <Step.Title>Mantain data with form</Step.Title>
              <Step.Description>Add or update data from specific line through form</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>

        {/* Grid */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name' />
            <Form.Input fluid label='Last name' placeholder='Last name' />
            <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Form.Button>Submit</Form.Button>
        </Form>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state, props) => {
  return {
    band: state.bands.filter(x => x._id === parseInt(props.match.params._id))[0] || {}
  };
}

export default connect(mapStateToProps, {addBand, updateBand})(BandsForm);
