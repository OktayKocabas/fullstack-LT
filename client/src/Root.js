import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./state";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
