import { combineReducers } from "redux";
import { counterReducer } from "./CounterReducer";

export default combineReducers({
  counterReducer,
});

//index file combine all reducers with the function of combineReducers
