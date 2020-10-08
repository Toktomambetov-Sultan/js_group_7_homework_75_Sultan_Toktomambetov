import { CHANGE_DATA, FETCH_ERROR, FETCH_INIT, FETCH_REQUEST, FETCH_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  action: null,
  data: {
    enCode: "",
    deCode: "",
    password: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATA:
      return { ...state, data: { ...state.data, [action.key]: action.value } };
    case FETCH_REQUEST:
      return { ...state, isLoading: true, action: action.action };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false, action: null };
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        action: null,
        error: action.error,
      };
    case FETCH_INIT:
      console.log(state.action);
      return {
        ...state,
        data: {
          ...state.data,
          [state.action === "encode" ? "enCode" : "deCode"]: action.data.message,
        },
      };
    default:
      return { ...state };
  }
};

export default reducer;
