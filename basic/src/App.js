import React from "react";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../src/Header";
import HeaderNavigation from "../src/HeaderNavigation";
import Form from "../src/Form";
import Body from "../src/Body";
import Main from "./src/pages/Main";

const App = () => (
  <div>
    <div className="container">
      <HeaderNavigation />
      <div className="contents">{this.props.activeRouteHandler()}</div>
    </div>

    <Header />
    <Body>
      <Form />
    </Body>
    <Main />
  </div>
);

export default App;
