import React, { Component } from 'react';
import { Button, Container, Divider, Header, Icon, Table } from 'semantic-ui-react';

class Home extends Component {
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

          <Divider />

          <Container textAlign='justified' className="table-info">
            <Table striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Contact Type</Table.HeaderCell>
                  <Table.HeaderCell>Contact Numbers</Table.HeaderCell>
                  <Table.HeaderCell>Role</Table.HeaderCell>
                  <Table.HeaderCell>Edit</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>John Lilki</Table.Cell>
                  <Table.Cell>September 14, 2013</Table.Cell>
                  <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                  <Table.Cell>No</Table.Cell>
                  <Table.Cell>
                    <Button basic color='black' size="small" onClick={() => this.nextPath('/edit') }>
                      Edit
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Container>

          <Container textAlign='center' text>
          <Divider />
            <Button basic color='black' size="massive" onClick={() => this.nextPath('/create') }>
              Create
            </Button>
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

export default Home;