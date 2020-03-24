import * as types from "../actions";

// 기본값
const initialState = {
  datas: [
    {
      title: true,
      url: true
    }
  ]
};

// 리듀서
const app = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        datas: action.data
      };
    default:
      return state;
  }
};

export default app;

// export default function(state = {}, action) {
//   switch (action.type) {
//     case "FETCH_DATA":
//       const newState = Object.assign({}, ...state, action.data);
//       return newState;

//     default:
//       return state;
//   }
// }
