import * as types from "../actions";

// 기본값
const initialState = {
  app: {
    datas: []
  }
};

// 리듀서
const app = (state = initialState, action) => {
  console.log("app의 리듀서: ", state, action);
  switch (action.type) {
    case types.FETCH_DATA:
      return {
        ...state,
        datas: action.data
      };
    default:
      return state;
  }
};

export default app;
