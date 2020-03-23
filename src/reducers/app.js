import * as types from "../actions";

// 기본값
const initialState = {
  isTest: true
};

// 리듀서
const app = (state = initialState, action) => {
  console.log("안녕", types);
  switch (action.type) {
    case types.APP_ACTION_TEST:
      return {
        ...state,
        isTest: action.data
      };
    default:
      return state;
  }
};

// const app = (state = initialState, action) => {
//   switch (action.type) {
//     case types.APP_ACTION_TEST:
//       return {
//         ...state,
//         isTest: action.data
//       };
//     case types.APP_ACTION_DATA:
//       return {
//         ...state,
//         isChecked: action.data
//       };
//     default:
//       return state;
//   }
// };
//각 액션 타입에 따라 다른 작업을 하기 위해 switch 구문을 사용

export default app;
