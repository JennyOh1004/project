import { createStore } from "redux";
import reducers from "../reducers";
// import promise from "react-promise";

const store = createStore(reducers);

export default store;
