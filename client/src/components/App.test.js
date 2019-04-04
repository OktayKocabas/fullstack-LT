import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Root from "../Root";

import App from "./App";
import Dashboard from "./Dashboard";
import { BrowserRouter } from "react-router-dom";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <BrowserRouter initialEntries={["/"]}>
        <App />
      </BrowserRouter>
    </Root>
  );
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Root>
      <App />
    </Root>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Dashboard component for home route '/'", () => {
  expect(wrapped.find(Dashboard).length).toEqual(1);
});
