import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Segment, Menu, Dropdown, Icon, Button, Container } from 'semantic-ui-react';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    console.log(name, this.props)
    this.props.history.push(`/${name}`);
  }

  render() {
    const { activeItem } = this.state
    return (
      <div className="app-container">
        {/*<Segment inverted>*/}
          <Menu size='large' >{/* pointing secondary */}
            <Menu.Item header>
              <img src={logo} />
            </Menu.Item>{/* semantic-ui-with-react-and-redux */}
            <Menu.Item name='' active={activeItem === ''} onClick={this.handleItemClick}>
              <Icon name="home" /> Initial page
            </Menu.Item>
            <Menu.Item name='going-deeper-in-crud' active={activeItem === 'going-deeper-in-crud'} onClick={this.handleItemClick}>
              <Icon name="sitemap" />Going deeper in CRUD
            </Menu.Item>
            <Menu.Item name='advanced-components-and-features' active={activeItem === 'advanced-components-and-features'} onClick={this.handleItemClick}>
              <Icon name="stack overflow" />Advanced components and features
            </Menu.Item>

            <Menu.Menu position='right'>
              <Dropdown item text='Docs'>
                <Dropdown.Menu>
                  <Dropdown.Item name="about" onClick={this.handleItemClick}><Icon name="info circle" /> About</Dropdown.Item>
                  <Dropdown.Item><Icon name="graduation cap" /> Reference guide</Dropdown.Item>
                  <Dropdown.Item><Icon name="map signs" /> Release notes</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Menu.Item>
                <Button primary>
                  <Icon name="github" /> visit repository
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        {/*</ Segment>*/}

        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
