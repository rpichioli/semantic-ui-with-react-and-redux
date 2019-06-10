import React from 'react';
import { withRouter } from 'react-router-dom'; // Wraps component with route properties and more..
import { Menu, Dropdown, Icon, Button, Container, Popup } from 'semantic-ui-react'; //Segment

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {}

  /**
   * Always select the first position of pathname splitted by '/' to active the respective option in menu
   * @return {void}
   */
  componentDidMount = () => {
    let route_fragments = this.props.location.pathname.split('/');
    this.setState({ activeItem: route_fragments[1] });
  }

  /**
   * Handle click into menu and set active
   * @param  {object} e    Event
   * @param  {string} name Name related to the event source
   * @return {void}
   */
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.history.push(`/${name}`);
  }

  render() {
    const { activeItem } = this.state
    return (
      <div className="app-container">
        <Menu color={'blue'} size='large' inverted>{/* pointing secondary inverted*/}
          {/* Header */}
          <Menu.Item header>
            <img src={logo} alt='logo' /> React Application
          </Menu.Item>{/* semantic-ui-with-react-and-redux */}

          {/* Menu itens */}
          <Menu.Item name='' active={activeItem === ''} onClick={this.handleItemClick}>
            <Icon name="home" /> Home
          </Menu.Item>
          <Menu.Item name='going-deeper-in-crud' active={activeItem === 'going-deeper-in-crud'} onClick={this.handleItemClick}>
            <Icon name="sitemap" />Going deeper in CRUD
          </Menu.Item>
          <Menu.Item name='advanced-components-and-features' active={activeItem === 'advanced-components-and-features'} onClick={this.handleItemClick}>
            <Icon name="stack overflow" />Advanced components and features
          </Menu.Item>

          {/* Dropdown at right */}
          <Menu.Menu position='right'>
            <Dropdown item text='Documentation'>
              <Dropdown.Menu>
                <Dropdown.Item name="about" onClick={this.handleItemClick}><Icon name="info circle" /> About</Dropdown.Item>
                {/*<Dropdown.Item name="reference-guide" onClick={this.handleItemClick}><Icon name="graduation cap" /> Reference guide</Dropdown.Item>*/}
                {/*<Dropdown.Item name="release-notes" onClick={this.handleItemClick}><Icon name="map signs" /> Release notes</Dropdown.Item>*/}
              </Dropdown.Menu>
            </Dropdown>

            {/* Button */}
            <Popup content='Visit my GitHub profile' trigger={
              <Menu.Item>
                <Button
                  color='grey'
                  content='rpichioli'
                  icon='github'
                  labelPosition='left'
                  onClick={() => window.open('https://www.github.com/rpichioli', '_blank')}
                />
              </Menu.Item>
            } />
          </Menu.Menu>
        </Menu>

        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
