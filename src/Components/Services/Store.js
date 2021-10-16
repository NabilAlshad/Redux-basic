//in here we will create store of redux importing the reducers from index.js file
import { createStore } from "redux";
import rootReducers from "./Reducers/index";

const initialState = {};

export const store = createStore(rootReducers, initialState);
