import { SET_INFO_FORM } from "./types";

export const setInfoForm = (data) => async (dispatch) => {
  dispatch({ type: SET_INFO_FORM, payload: data });
};
