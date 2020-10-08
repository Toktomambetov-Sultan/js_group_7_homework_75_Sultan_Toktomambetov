import axiosOrder from "../orderAxios";
import { CHANGE_DATA, FETCH_ERROR, FETCH_INIT, FETCH_REQUEST, FETCH_SUCCESS } from "./actionTypes";

export const changeData = (key, value) => {
  if (key === "password" && value[value.length - 1] === " ") return { type: null };
  return {
    type: CHANGE_DATA,
    key,
    value,
  };
};
const fetchRequest = (action) => {
  return {
    type: FETCH_REQUEST,
    action,
  };
};
const fetchSuccess = () => {
  return { type: FETCH_SUCCESS };
};
const fetchError = (error) => {
  return { type: FETCH_ERROR, error };
};
const fethcInit = (data) => {
  return { type: FETCH_INIT, data };
};

export const codeInit = (action, data) => {
  return async (dispatch) => {
    dispatch(fetchRequest(action));
    try {
      const response = await axiosOrder.post("/" + action, {
        password: data.password,
        message: action === "encode" ? data.deCode : data.enCode,
      });
      dispatch(fethcInit(response.data));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};
