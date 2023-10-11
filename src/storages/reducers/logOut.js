const initialState = {
  isLoading: false,
  isError: false,
};

export const logOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_TOKEN_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'DELETE_TOKEN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case 'DELETE_TOKEN_FAILED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return {
        state,
      };
  }
};
