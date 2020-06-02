import { createStore } from "redux";
import reducer from "./reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

export const store = createStore(reducer, enhancer);
