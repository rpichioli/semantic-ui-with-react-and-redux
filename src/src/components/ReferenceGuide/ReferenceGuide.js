import React, { Component } from 'react';
import { Header, Message } from 'semantic-ui-react';

export class ReferenceGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <Header as='h1' dividing>Referece Guide</Header>
				<Message info>
          <Message.Header>In development stage</Message.Header>
          <p>The content is being prepared and will be available soon.</p>
        </Message>
			</React.Fragment>
    );
  }
}

export default ReferenceGuide;
