import * as propertyActions from "./property.action";

export const initialState = {
  properties: [],
  maxValue: 0,
  loading: false,
  loaded: false
};

export const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case propertyActions.LOAD_PROPERTY:
      return { ...state, loading: true };

    case propertyActions.LOAD_PROPERTY_SUCCESS:
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        properties: data.property,
        maxValue: data.maxValue
      };

    case propertyActions.LOAD_PROPERTY_FAIL:
      return { ...state, loading: false, loaded: false };

    default:
      return state;
  }
};
