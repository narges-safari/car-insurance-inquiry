import server from "../../core/server";

import { GET_CAR_TYPES, GET_CAR_THIRD_DISCOUNT } from "./types";

export const getCarTypes = () => async (dispatch) => {
  const response = await server().get("/third-car-types");

  dispatch({ type: GET_CAR_TYPES, payload: response });
  return response;
};

export const getDiscount = () => async (dispatch) => {
  const response = await server().get("/car-third-discount");

  dispatch({ type: GET_CAR_THIRD_DISCOUNT, payload: response });
  return response;
};
