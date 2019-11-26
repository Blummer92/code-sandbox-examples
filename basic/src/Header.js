import React, { Jumbotron } from "react-bootstrap/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export default class Header extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <h1 className="header">Welcome to Zach's page</h1>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </Jumbotron>
    );
  }
}
