import { combineReducers } from "redux";

import carReducer from "./carReducer";
import insuranceReducer from "./insuranceReducer";
import infoFormReducer from "./infoFormReducer";

export default combineReducers({
  car: carReducer,
  insurance: insuranceReducer,
  infoForm: infoFormReducer,
});
