import {
  ALLDATA,
  GETADMINACCOUNT,
  GETDOCTORDATA,
  GETUSER,
  LOGOUT,
  POSTLOGIN,
  SESSIONCHECK,
  TOGGLE,
} from "../types/type";

const Initial = { loginOrRegister: true, dotorData: {}, loginStatus: 0, admin: [] };
export const appReducer = (state = Initial, action) => {
  switch (action.type) {
    case SESSIONCHECK:
      return { ...state, loginStatus: action.status };
    case POSTLOGIN:
      return { ...state, loginStatus: action.status };
    case LOGOUT:
      return { ...state, loginStatus: action.status };
    // case ALLDATA:
    //   return { name: action.data, age: action.age };
    case TOGGLE:
      return { ...state, loginOrRegister: !state.loginOrRegister };
    // case GETADMINACCOUNT:
    //   return { ...state, admin: action.data };
    case GETDOCTORDATA:
      return { ...state, dotorData: action.data };
    default:
      return { ...state };
  }
};
