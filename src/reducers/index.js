import { combineReducers } from "redux";
import app from "./app"; //reducer 끼리 연결

const reducers = combineReducers({
  datas: app
});

export default reducers;
