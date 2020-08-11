import * as actionTypes from "../actions/types";

const initialState = {};

function insuranceReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_INSURANCE_COMPANY:
      return { ...state, insuranceCompany: action.payload };

    default:
      return state;
  }
}

export default insuranceReducer;
