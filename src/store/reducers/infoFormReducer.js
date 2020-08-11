import * as actionTypes from "../actions/types";

const initialState = {};

function infoFormReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_INFO_FORM:
      return { ...state, infoForm: action.payload };

    default:
      return state;
  }
}

export default infoFormReducer;
