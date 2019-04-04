import * as actions from "../property.action";
import { reportReducer, initialState } from "../property.reducer";

it("should have correct action", () => {
  const action = actions.LoadProperty();

  expect({ ...action }).toEqual({
    type: actions.LOAD_PROPERTY
  });
});

it("should have correct payload", () => {
  const payload = {
    maxValue: 120,
    property: [{ xCoordinate: 2, yCoordinate: 5, price: 100 }]
  };

  const action = actions.LoadPropertySuccess(payload);

  expect(action.payload).toEqual(payload);
});
