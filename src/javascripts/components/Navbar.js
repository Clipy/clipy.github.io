import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import styles from '../../stylesheets/navbar';

export default class extends React.Component {
  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Clipy</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">コピー履歴</NavItem>
          <NavItem eventKey={2} href="#">スニペット</NavItem>
          <NavItem eventKey={3} href="#">自由に呼び出し</NavItem>
          <NavItem eventKey={4} href="#">オープンソース</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
