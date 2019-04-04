import axios from "axios";

export const LOAD_PROPERTY = "[Property] Load Properties";
export const LOAD_PROPERTY_SUCCESS = "[Property] Load Properties Success";
export const LOAD_PROPERTY_FAIL = "[Property] Load Properties Fail";

export const LoadProperty = () => {
  return {
    type: LOAD_PROPERTY
  };
};

export const LoadPropertySuccess = payload => {
  return {
    type: LOAD_PROPERTY_SUCCESS,
    payload
  };
};

export const LoadPropertyFail = () => {
  return {
    type: LOAD_PROPERTY_FAIL
  };
};

export const fetchProperties = () => async dispatch => {
  dispatch(LoadProperty());
  try {
    const response = await axios.get("/api/property");
    dispatch(LoadPropertySuccess(response.data));
  } catch (e) {
    dispatch(LoadPropertyFail());
  }
};
