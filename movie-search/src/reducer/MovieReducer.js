import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILED,
} from "./Types";

export const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

export const MovieReducer = (action, state) => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case SEARCH_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
