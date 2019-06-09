import React from 'react';
import {Step, Icon, Divider, Form, Header, Message, Button, Rating, Radio, Label} from "semantic-ui-react"; //Segment
import {connect} from 'react-redux';
import validator from 'validator';
import {addBand, updateBand} from '../../actions/bands';

class BandsForm extends React.Component {
  state = {
    _id: this.props.band._id || 0,
    title: this.props.band.title || '',
    nationality: this.props.band.nationality || '',
    rate: this.props.band.rate || 0,
    status: typeof (this.props.band.status) === 'boolean' ? this.props.band.status : true,
    description: this.props.band.description || '',
    creationDate: this.props.band.creationDate || new Date(),
    image: this.props.band.image || '',
    terms: false,
    errors: {},
    loading: false
  }

  validate = () => {
    let errors = {};
    if (validator.isEmpty(this.state.title)) Object.assign(errors, {title: 'Title field is required'});
    if (validator.isEmpty(this.state.nationality)) Object.assign(errors, {nationality: 'Nationality field is required'});
    if (validator.isEmpty(this.state.description)) Object.assign(errors, {description: 'Description field is required'});
    if (validator.isEmpty(this.state.image)) Object.assign(errors, {image: 'Image field is required'});
    if (!(this.state.terms)) Object.assign(errors, {terms: 'Terms must be accepted'});
    this.setState({errors})
    return Object.keys(errors).length === 0;
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

  handleRate = (e, { rating }) => this.setState({ rate: rating });

  /**
   * Toggle status flag providing value to state
   * @return {void}
   */
  handleStatus = () => this.setState(prevState => ({ status: !prevState.status }))

  /**
   * Toggle terms flag providing value to state
   * @return {void}
   */
  handleTerms = () => this.setState(prevState => ({ terms: !prevState.terms }))

  /**
   * Manipulate state values based in component update
   * @param  {object} e     Event
   * @param  {object} value [description]
   * @return {void}
   */
  handleChange = (e, { value }) => this.setState({ [e.target.name] : value })

  /**
   * Handle form submission
   * @param  {object} e Event
   * @return {void}
   */
  handleSubmit = (e) => {
    if (!this.validate()) return;
    let {_id, title, nationality, rate, status, description, creationDate, image} = this.state;
    if (this.state._id === 0) {
      let maxID = Math.max.apply(Math, this.props.bands.map(function(item) { return item._id; }))
      this.props.addBand({_id: maxID + 1, title, nationality, rate, status, description, creationDate, image});
    } else {
      this.props.updateBand({_id, title, nationality, rate, status, description, creationDate, image});
    }
    this.props.history.push('/going-deeper-in-crud');
  }

	render () {
    const hasErrors = Object.keys(this.state.errors).length > 0;
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
        <Button icon labelPosition='left' size="tiny" onClick={() => this.props.history.push('/going-deeper-in-crud')}><Icon name='angle left' /> Back</Button>

        <Header as='h2' dividing>Try to use the form below
          <Label as='span' color='' size='small'>semantic ui components</Label>
          <Label as='span' color='' size='small'>redux store connection</Label>
          <Label as='span' color='' size='small'>validation</Label>
          <Label as='span' color='' size='small'>events</Label>
          <Label as='span' color='' size='small'>life-cycle</Label>
          <Label as='span' color='' size='small'>redux actions</Label>
          <Label as='span' color='' size='small'>routing</Label>
        </Header>

        {/* Form */}
        <Form onSubmit={this.handleSubmit} error={hasErrors}>

          <Message
            error
            header='Cannot submit form'
            list={Object.values(this.state.errors)}
          />

          <Form.Group widths='equal'>
            <Form.Input fluid required label='Title' placeholder='Band title' name="title" value={this.state.title} error={this.state.errors.title} onChange={this.handleChange} />
            <Form.Input fluid required label='Nationality' placeholder='Country where the band was born' name="nationality" value={this.state.nationality} error={this.state.errors.nationality} onChange={this.handleChange} />
          </Form.Group>

          <Form.Input fluid label='Image' placeholder='Link to the band image' name="image" value={this.state.image} error={this.state.errors.image} onChange={this.handleChange} required />

          <Form.TextArea label='Short description' placeholder='Tell us about the band' name='description' value={this.state.description} error={this.state.errors.description} onChange={this.handleChange} required />

          <div className="fields">
            <div className="three wide field">
              <label>Rating</label>
              <div className="ui fluid input">
                <Rating maxRating={5} defaultRating={this.state.rate} icon='star' size='huge' name="" onRate={this.handleRate} />
              </div>
            </div>

            <div className="three wide field">
              <label>Enabled</label>
              <div className="ui fluid input">
                <Radio toggle name="status" onChange={this.handleStatus} checked={this.state.status} />
              </div>
            </div>

            <Form.Input
              fluid disabled
              type='date' label='Created in' name='creationDate'
              value={this.formatDate(this.state.creationDate)} onChange={this.handleChange} width={4}
            />
          </div>

          <Form.Checkbox name='terms' label='I agree to the Terms and Conditions' onChange={this.handleTerms} error={this.state.errors.terms} required />

          <Divider />

          <Button.Group>
            <Button type="button" onClick={() => this.props.history.push('/going-deeper-in-crud')}>Cancel and back</Button>
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
    band: state.bands.filter(x => x._id === parseInt(props.match.params._id))[0] || {},
    bands: state.bands
  };
}

export default connect(mapStateToProps, {addBand, updateBand})(BandsForm);
