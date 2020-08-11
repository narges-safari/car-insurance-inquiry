import * as actionTypes from "../actions/types";

const initialState = {};

function carReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CAR_TYPES:
      return { ...state, car: action.payload };
    case actionTypes.GET_CAR_THIRD_DISCOUNT:
      return { ...state, carDiscount: action.payload };
    default:
      return state;
  }
}

export default carReducer;
