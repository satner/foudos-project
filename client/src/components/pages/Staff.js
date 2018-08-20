import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import CreateTrip from '../layout/CreateTrip'

class Staff extends Component {
 constructor(props) {
   super(props);
   this.state = {
    currentUserName: '',
    currentUserEmail: '',
    activeTab: '1'
  }
  this.toggle = this.toggle.bind(this);
 }

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Create a trip
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              My trips
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <CreateTrip />
          </TabPane>
          <TabPane tabId="2">
          <p> KAPPA REALITY</p>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Staff;
