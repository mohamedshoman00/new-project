import {
  ALLDATA,
  GETADMINACCOUNT,
  GETDOCTORDATA,
  GETDOCTORTIMETABLE,
  GETUSER,
  LOGOUT,
  POSTLOGIN,
  SESSIONCHECK,
  TOGGLE,
} from "../types/type";

const Initial = {
  loginOrRegister: true,
  doctorData: {},
  doctorTimeTable: {},
  loginStatus: 0,
  admin: {},
};
export const appReducer = (state = Initial, action) => {
  switch (action.type) {
    case SESSIONCHECK:
      return { ...state, loginStatus: action.status };
    case POSTLOGIN:
      return { ...state, loginStatus: action.status };
    case LOGOUT:
      return { ...state, loginStatus: action.status };
    case GETADMINACCOUNT:
      return { ...state, admin: action.data };
    case TOGGLE:
      return { ...state, loginOrRegister: !state.loginOrRegister };
    case GETDOCTORDATA:
      return { ...state, doctorData: action.data };
    case GETDOCTORTIMETABLE:
      return { ...state, doctorTimeTable: action.data };
    default:
      return { ...state };
  }
};
