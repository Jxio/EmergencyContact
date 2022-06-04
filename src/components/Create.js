import React, { Component } from 'react';
import { Button, Container, Divider, Header, Form } from 'semantic-ui-react';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayActive: false,
    }
  }

  nextPath = (path) => {
    this.props.history.push(path);
  }

  render() {
    const { overlayActive } = this.state;
    return (
      <div>
        <Container fluid>
          <Header as='h3' id="page-title">HELP DESK</Header>
          <Button basic color='black' size='medium' onClick={() => this.nextPath('/') }>
              View All Contacts
          </Button>

          <Divider />

          <Container textAlign="left" className="createForm">
            <Form>
              <Form.Field>
                <label>Name</label>
                <input placeholder='Name' />
              </Form.Field>
              <Form.Field>
                <label>Role</label>
                <input placeholder='Role' />
              </Form.Field>
              <Form.Field>
                <label>Contact Type</label>
                <input placeholder='Contact Type' />
              </Form.Field>
              <Form.Field>
                <label>Contact Number</label>
                <input placeholder='Contact Number' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Container>



          <Container id="page-footer" textAlign="center">
            <Divider />
            <p>Website built by Jia Xu @ June 4, 2022. All rights reserved.</p>
          </Container>

        </Container>
      </div>
   );
  }
}

export default Create;