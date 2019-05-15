
import React from 'react';
import {connect} from 'react-redux';
import {Divider, Header, Message, Icon, Step, Menu, Table, Label, Checkbox, Button, Radio, Rating} from "semantic-ui-react";
import {fetchBands} from '../../actions/bands';

class BandsList extends React.Component {

  componentDidMount = () => {
    this.props.bands.length === 0 && this.props.fetchBands();
  }

	render () {
    const bands = this.props.bands;
		return (
			<React.Fragment>
				{/* Steps */}
				<Step.Group stackable='tablet' size='mini' widths={3}>
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
			    <Step active>
			      <Icon name='list layout' />
			      <Step.Content>
			        <Step.Title>Listing data</Step.Title>
			        <Step.Description>Extract information from Redux to React + Semantic UI</Step.Description>
			      </Step.Content>
			    </Step>
			  </Step.Group>

        <br />
        {/* Navigation */}
        <Button icon labelPosition='left' onClick={() => this.props.history.push('/going-deeper-in-crud/add')}><Icon name='add' /> Add</Button>

				{/* Grid */}
				<Table celled striped>
			    <Table.Header>
			      <Table.Row>
							<Table.HeaderCell>Enabled</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Nationality</Table.HeaderCell>
              <Table.HeaderCell>Rating</Table.HeaderCell>
              <Table.HeaderCell>Created in</Table.HeaderCell>
			      </Table.Row>
			    </Table.Header>

			    <Table.Body>
            {bands.length > 0 &&
              bands.map((item, i) => {
                console.log(item.status, typeof item.status)
    			      return (<Table.Row key={i}>
    							<Table.Cell collapsing><Radio toggle name={'status_'+i} checked={item.status} /></Table.Cell>
                  <Table.Cell><a href={`/going-deeper-in-crud/edit/${item._id}`}>{item.title}</a></Table.Cell>{/*<Label ribbon>{item.status}</Label>*/}
                  <Table.Cell collapsing>{item.nationality}</Table.Cell>
                  <Table.Cell collapsing><Rating maxRating={5} defaultRating={item.rate} icon='star' size='small' /></Table.Cell>
                  <Table.Cell collapsing>{new Date(item.creationDate).toLocaleDateString('pt-br')}</Table.Cell>
    			      </Table.Row>)
              })
            }
			    </Table.Body>

			    <Table.Footer>
			      <Table.Row>
			        <Table.HeaderCell colSpan='3'>
			          <Menu floated='right' pagination>
			            <Menu.Item as='a' icon>
			              <Icon name='chevron left' />
			            </Menu.Item>
			            <Menu.Item as='a'>1</Menu.Item>
			            <Menu.Item as='a'>2</Menu.Item>
			            <Menu.Item as='a'>3</Menu.Item>
			            <Menu.Item as='a'>4</Menu.Item>
			            <Menu.Item as='a' icon>
			              <Icon name='chevron right' />
			            </Menu.Item>
			          </Menu>
			        </Table.HeaderCell>
			      </Table.Row>
			    </Table.Footer>
			  </Table>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state, props) => {return {bands: state.bands}};
export default connect(mapStateToProps, {fetchBands})(BandsList);
