import { combineReducers } from "redux";
import { propertyReducer} from "./property.reducer";

export default combineReducers({
  properties: propertyReducer
});
