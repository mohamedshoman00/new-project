import {
  ALLDATA,
  GETADMINACCOUNT,
  GETALLDOCTORS,
  GETALLPATIENTSADMIN,
  GETDOCTORDATA,
  GETDOCTORTIMETABLE,
  GETDOCTORTIMETABLEADMIN,
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
  allDoctors: [],
  adminAllPatient: [],
  doctorTimeTableAdmin: {},
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
    case GETALLPATIENTSADMIN:
      return { ...state, adminAllPatient: action.data };
    case TOGGLE:
      return { ...state, loginOrRegister: !state.loginOrRegister };
    case GETDOCTORDATA:
      return { ...state, doctorData: action.data };
    case GETDOCTORTIMETABLE:
      return { ...state, doctorTimeTable: action.data };
    case GETDOCTORTIMETABLEADMIN:
      return { ...state, doctorTimeTableAdmin: action.data };
    case GETALLDOCTORS:
      return { ...state, allDoctors: action.data };
    default:
      return { ...state };
  }
};
