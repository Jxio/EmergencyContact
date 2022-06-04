import React, { Component } from 'react';
import { Button, Container, Divider, Header, Form, Table } from 'semantic-ui-react';

class Edit extends Component {
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
                <Table striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Contact Type</Table.HeaderCell>
                      <Table.HeaderCell>Contact Numbers</Table.HeaderCell>
                      <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell><input placeholder='Email' /></Table.Cell>
                      <Table.Cell><input placeholder='jhlilk22@yahoo.com' /></Table.Cell>
                      <Table.Cell>
                        <Button basic color='black' size="small">
                          Delete
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Form.Field>
              <Button type='submit'>Edit</Button>
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

export default Edit;