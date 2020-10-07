import { CHANGE_DATA } from "./actionTypes";

const initialState = {
  isLoading: false,
  error: null,
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
    default:
      return { ...state };
  }
};

export default reducer;
