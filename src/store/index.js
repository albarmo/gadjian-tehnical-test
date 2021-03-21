import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import employeeReducer from "./reducers/employeeReducer";

// create redux store for state management
const store = createStore(employeeReducer, applyMiddleware(thunk));
// watch current state
// console.log(store.getState());

export default store;
