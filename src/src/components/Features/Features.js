import React from 'react';
import _ from 'lodash';
import {Header, Image, Item, Tab, Search, Grid, Segment, Modal, Button, Icon, Progress, Statistic} from "semantic-ui-react";
import {connect} from 'react-redux';

class Features extends React.Component {

	state = {
		isLoading: false,
		results: [],
		value: '',
		modalOpen: false,
		selected: {},
		percent: 0
	}

	handleOpen = (selected) => this.setState({ modalOpen: true, selected })
  handleClose = () => this.setState({ modalOpen: false, selected: {} })
	handleResultSelect = (e, { result }) => this.setState({ value: result.title })
  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState({ isLoading: false, results: [], value: '' })

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({ isLoading: false, results: _.filter(this.props.bands, isMatch) })
    }, 300)
  }
	handleTabChange = (e, data) => {
		if (data.activeIndex === 3) {
			// Reset percent on tab change
			this.setState({ percent: 0 });

			// Time to auto fill the progress bar
			let timer = setInterval(() => {
				if (this.state.percent < 100)
					this.setState({ percent: this.state.percent + 0.01 });
				else {
					this.setState({ percent: 100 });
					clearInterval(timer);

				}
			}, 1);
		}
	}

	render () {
		const { isLoading, value, results } = this.state;
		let bands = this.props.bands;
		let panes = [];

		panes.push({
			menuItem: 'Listing Items View',
			render: () => <Tab.Pane attached={false}>
				<Item.Group divided>
					{bands.map((item, i) => (
						<Item>
							<Item.Image size='tiny' src={item.image} />

							<Item.Content>
								<Item.Header as='a'>{item.title}</Item.Header>
								<Item.Meta>{item.nationality}</Item.Meta>
								<Item.Description>{item.description}</Item.Description>
								<Item.Extra><b>Rating:</b> {item.rate} - <b>Created in:</b> {new Date(item.creationDate).toLocaleDateString('pt-br')}</Item.Extra>
							</Item.Content>
						</Item>
					))}
				</Item.Group>
			</Tab.Pane>
		});
		panes.push({
			menuItem: 'Advanced Search',
			render: () => <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {leading: true})}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(bands, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
		});
		panes.push({
			menuItem: 'Grouping, Images and Modal',
			render: () => <Image.Group size='small'>
				{bands.map((item, i) => (
					<Modal
						trigger={
							<Image
								onClick={() => this.handleOpen(item)}
								src={item.image}
								style={{'cursor': 'pointer'}}
							/>
						}
						open={this.state.modalOpen}
						onClose={this.handleClose}
						size='small'
						basic
					>
				    <Header icon='react' content={this.state.selected.title} />
				    <Modal.Content>
				      <Image src={this.state.selected.image} size='small' />
							<p>{this.state.selected.description}</p>
							<p><b>Nationality:</b> {this.state.selected.nationality} - <b>Created in:</b> {new Date(this.state.selected.creationDate).toLocaleDateString('pt-br')}</p>
				    </Modal.Content>
				    <Modal.Actions>
				      <Button basic color='red' inverted onClick={this.handleClose}>
				        <Icon name='remove' /> No
				      </Button>
				      <Button color='green' inverted onClick={this.handleClose}>
				        <Icon name='checkmark' /> Yes
				      </Button>
				    </Modal.Actions>
				  </Modal>
				))}
			</Image.Group>
		});
		panes.push({
			menuItem: 'Progress and Statistic',
			render: () =>
			<React.Fragment>
				<Progress percent={this.state.percent} indicating />
				<Statistic color={this.state.percent === 100 ? 'green' : ''} horizontal>
			    <Statistic.Value>{this.state.percent}</Statistic.Value>
			    <Statistic.Label>Progress</Statistic.Label>
			  </Statistic>
			</React.Fragment>
		});

		return (
			<React.Fragment>
				<Header as='h1' dividing>Advanced components and features</Header>
				<p>At this point we will group and manipulate advanced Semantic UI React components using data from our Redux store</p>
				<p>The Redux store is filled by initial state provided directly in reducer and by data provided into the <b>Going Deeper in CRUD</b> topic too.</p>

				<Tab panes={panes} onTabChange={this.handleTabChange} menu={{ secondary: true, pointing: true }} />
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {bands: state.bands}
}

export default connect(mapStateToProps, {})(Features);
