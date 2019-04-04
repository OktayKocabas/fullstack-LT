import React from "react";
import { mount } from "enzyme";
import Root from "../Root";

import PropertyList from "./Property/PropertyList";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <PropertyList />
    </Root>
  );
});

describe("PropertyList Component", () => {
  it("renders PropertyList component", () => {
    expect(wrapper.find(PropertyList).length).toEqual(1);
  });
});
