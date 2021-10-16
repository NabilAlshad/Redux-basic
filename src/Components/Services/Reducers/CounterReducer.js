import { decrement_value, increment_value } from "../Types";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment_value:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case decrement_value:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
