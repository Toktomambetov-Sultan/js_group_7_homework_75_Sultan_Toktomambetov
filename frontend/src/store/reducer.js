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
  return { ...state };
};

export default reducer;
