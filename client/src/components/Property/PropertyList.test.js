import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "../../Root";
import PropertyList from "./PropertyList";

let wrapper;
let component;
beforeEach(() => {
  moxios.install();

  moxios.stubRequest("/api/property", {
    status: 200,
    response: {
      property: [
        { xCoordinate: 2, yCoordinate: 3, price: 100 },
        { xCoordinate: 3, yCoordinate: 4, price: 200 },
        { xCoordinate: 4, yCoordinate: 5, price: 500 }
      ],
      maxValue: 1000
    }
  });

  wrapper = mount(
    <Root>
      <PropertyList />
    </Root>
  );
  component = wrapper.find("PropertyList").instance();
});

afterEach(() => {
  moxios.uninstall();
});

describe("PropertyList Component", () => {
  it("shoduld render list items based on data", done => {
    moxios.wait(() => {
      wrapper.update();

      expect(component.props.properties.length).toEqual(3);
      expect(component.props.maxValue).toEqual(1000);
      expect(wrapper.find(".property-item").length).toEqual(3);

      done();

      wrapper.unmount();
    });
  });

  it("shoduld render classname based price ratio", done => {
    const spy = jest.spyOn(component, "ratioStatus");
    
    moxios.wait(() => {
      wrapper.update();

      const el = wrapper
        .find(".property-item")
        .at(1)
        .find(".price");
      const val = component.props.properties[1].price;

      component.ratioStatus(val);

      expect(spy).toHaveBeenCalledWith(200);
      expect(el.hasClass("expensive-4")).toBe(true);

      done();

      wrapper.unmount();
    });
  });
});
