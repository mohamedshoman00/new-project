import {
  ALLDATA,
  GETADMINACCOUNT,
  GETUSER,
  LOGOUT,
  POSTLOGIN,
  SESSIONCHECK,
  TOGGLE,
} from "../types/type";

const Initial = { loginOrRegister: true, user: ``, loginStatus: ``, admin: [] };
export const appReducer = (state = Initial, action) => {
  switch (action.type) {
    case SESSIONCHECK:
      return { ...state, loginStatus: action.status };
    case POSTLOGIN:
      return { ...state, user: action.data };
    case LOGOUT:
      return { ...state, user: action.data };
    // case ALLDATA:
    //   return { name: action.data, age: action.age };
    case TOGGLE:
      return { ...state, loginOrRegister: !state.loginOrRegister };
    case GETADMINACCOUNT:
      return { ...state, admin: action.data };
    default:
      return { ...state };
  }
};
