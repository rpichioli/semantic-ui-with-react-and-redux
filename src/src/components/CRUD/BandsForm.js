import React from 'react';
import {Step, Icon, Divider, Form, Header, Message, Segment, Button, Rating, Radio} from "semantic-ui-react";
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

  /**
   * Format Datestamp to date input, no value results in today escape
   * @param  {string} date Datestamp to format
   * @return {string}      Formatted date
   */
  formatDate = (date) => {
    if (date) {
      let arrayDate = new Date(date).toLocaleDateString('pt-br').split('/');
      return `${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`;
    } else {
      let arrayDate = new Date().toLocaleDateString('pt-br').split('/');
      return `${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`;
    }
  }

  /**
   * Manipulate state values based in component update
   * @param  {object} e     Event
   * @param  {object} value [description]
   * @return {void}
   */
  handleChange = (e, { value }) => this.setState({ value })

  /**
   * Handle form submission
   * @param  {object} e Event
   * @return {void}
   */
  handleSubmit = (e) => {
    e.preventDefault();
  }

	render () {
		return (
			<React.Fragment>
        {/* Steps */}
        <Step.Group size='mini' widths={4}>
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

        <br />
        {/* Navigation */}
        <Button icon labelPosition='left' onClick={() => this.props.history.push('/going-deeper-in-crud')}><Icon name='angle left' /> Back</Button>

        {/* Form */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Title' placeholder='Band title' value={this.state.title} />
            <Form.Input fluid label='Nationality' placeholder='Country where the band was born' value={this.state.nationality} />
          </Form.Group>

          <Form.TextArea label='Short description' placeholder='Tell us about the band' name='description' value={this.state.description} />

          <div className="fields">
            <div className="three wide field">
              <label>Rating</label>
              <div className="ui fluid input">
                <Rating maxRating={5} defaultRating={this.state.rate} icon='star' size='huge' />
              </div>
            </div>

            <div className="three wide field">
              <label>Enabled</label>
              <div className="ui fluid input">
                <Radio toggle name="status" value={this.state.status} onChange={this.handleChange} />
              </div>
            </div>

            <Form.Input
              fluid disabled type='date' label='Created in' name='creationDate'
              value={this.formatDate(this.state.creationDate)} onChange={this.handleChange} width={4}
            />
          </div>

          <Form.Checkbox label='I agree to the Terms and Conditions' />

          <Divider />

          <Button.Group>
            <Button onClick={() => this.props.history.push('/going-deeper-in-crud')}>Cancel and back</Button>
            <Button.Or text='or' />
            <Button positive>Submit</Button>
          </Button.Group>
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
