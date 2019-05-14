
import React from 'react';
import {Divider, Header, Message, Icon, Step, Menu, Table, Label, Checkbox, Button} from "semantic-ui-react";

class BandsList extends React.Component {
	render () {
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
      <Button icon labelPosition='left' onClick={() => this.props.history.push('/going-deeper-in-crud/add')}><Icon name='add' /> Add</Button>

				{/* Grid */}
				<Table celled>
			    <Table.Header>
			      <Table.Row>
							<Table.HeaderCell />
			        <Table.HeaderCell>Header</Table.HeaderCell>
			        <Table.HeaderCell>Header</Table.HeaderCell>
			        <Table.HeaderCell>Header</Table.HeaderCell>
			      </Table.Row>
			    </Table.Header>

			    <Table.Body>
			      <Table.Row>
							<Table.Cell collapsing><Checkbox slider /></Table.Cell>
			        <Table.Cell><Label ribbon>First</Label></Table.Cell>
			        <Table.Cell>Cell</Table.Cell>
			        <Table.Cell>Cell</Table.Cell>
			      </Table.Row>
			      <Table.Row>
							<Table.Cell collapsing><Checkbox slider /></Table.Cell>
			        <Table.Cell>First</Table.Cell>
			        <Table.Cell>Cell</Table.Cell>
			        <Table.Cell>Cell</Table.Cell>
			      </Table.Row>
			      <Table.Row>
							<Table.Cell collapsing><Checkbox slider /></Table.Cell>
			        <Table.Cell>First</Table.Cell>
			        <Table.Cell>Cell</Table.Cell>
			        <Table.Cell>Cell</Table.Cell>
			      </Table.Row>
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

export default BandsList;
