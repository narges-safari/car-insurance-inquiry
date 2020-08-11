import server from "../../core/server";

import { GET_INSURANCE_COMPANY } from "./types";

export const getInsuranceCompany = () => async (dispatch) => {
  const response = await server().get("/companies");

  dispatch({ type: GET_INSURANCE_COMPANY, payload: response });
  return response;
};
