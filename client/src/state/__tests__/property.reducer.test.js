import * as actions from "../property.action";
import { propertyReducer, initialState } from "./../property.reducer";

it("should handle actions with unknown type", () => {
  const action = {};

  const newState = propertyReducer(initialState, action);

  expect(newState).toBe(initialState);
});

it("should handle actions of type LOAD_PROPERTY", () => {
  const action = {
    type: actions.LOAD_PROPERTY
  };

  const newState = propertyReducer(initialState, action);

  expect(newState.loading).toBe(true);
  expect(newState.properties.length).toBe(0);
});

it("should add data when passed LOAD_PROPERTY_SUCCESS", () => {
  const initial = {
    properties: {},
    maxValue: 0,
    loading: false,
    loaded: true
  };

  const response = {
    maxValue: 120,
    property: [{ xCoordinate: 2, yCoordinate: 5, price: 100 }]
  };

  const action = {
    type: actions.LOAD_PROPERTY_SUCCESS,
    payload: response
  };

  const newState = propertyReducer(initial, action);

  expect(newState.properties.length).toEqual(1);
  expect(newState.maxValue).toEqual(120);
  expect(newState.loading).toBe(false);
  expect(newState.loaded).toBe(true);
});
