//redux 관련 불러오기
import { createStore } from "redux";
import reducers from "../reducers";

//스토어 생성
const store = createStore(reducers);

export default store;
