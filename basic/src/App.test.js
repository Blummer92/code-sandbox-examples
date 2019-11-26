import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "../src/Header";
import HeaderNavigation from "../src/HeaderNavigation";
import Form from "../src/Form";
import Body from "../src/Body";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <App />,
    <Header />,
    <HeaderNavigation />,
    <Form />,
    <Body />
  );
  ReactDOM.unmountComponentAtNode(div);
});
