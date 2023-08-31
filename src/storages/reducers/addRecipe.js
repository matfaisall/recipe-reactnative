const initialState = {
  data: null,
  isLoading: false,
  isError: false,
};

export const addRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECIPE_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'ADD_RECIPE_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case 'ADD_RECIPE_FAILED':
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: true,
      };
    default:
      return {
        state,
      };
  }
};
