import React from "react";

import Nav from "react-bootstrap/Nav";

export default class HeaderNavigation extends React.Component {
  render() {
    return (
      <Nav
        link
        to="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <div>
          <Nav.Item>
            <Nav.Link to="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/users">users</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/about">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/topics">Topics</Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    );
  }
}
