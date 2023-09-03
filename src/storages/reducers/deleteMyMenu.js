const initialState = {
  data: null,
  errorMessage: '',
  isLoading: false,
  isError: false,
};

const deleteMyMenuReducer = (state = initialState, action) => {
  if (action.type === 'DELETE_MYMENU_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'DELETE_MYMENU_SUCCESS') {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      errorMessage: '',
      isError: false,
    };
  } else if (action.type === 'DELETE_MYMENU_FAILED') {
    return {
      ...state,
      data: null,
      errorMessage: action.payload,
      isLoading: false,
      isError: true,
    };
  } else {
    return state;
  }
};

export default deleteMyMenuReducer;
