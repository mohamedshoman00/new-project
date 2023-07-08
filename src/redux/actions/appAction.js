import axios from "axios";
import {
  ALLDATA,
  BASEURL,
  GETUSER,
  LOGIN,
  LOGOUT,
  POSTLOGIN,
  SESSIONCHECK,
  TOGGLE,
} from "../types/type";

export const logData = () => {
  return {
    type: ALLDATA,
    data: "ahmed yahia",
    age: 22,
  };
};

export const toggleLogin = () => {
  return {
    type: TOGGLE,
  };
};


export const sessionCheck = () => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/sessioncheck`, {
      withCredentials: true,
    });
    disp({ type: SESSIONCHECK, status: res.status });
  };
};

export const postLoginUser = (ele) => {
  return async (disp) => {
    const res = await axios.post(`${BASEURL}/login`, ele, {
      withCredentials: true,
    });
    console.log(res);
    disp({ type: POSTLOGIN, data: res.status });
  };
};
export const sessionLogOut = () => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/logout`);
    console.log(res);
    disp({ type: LOGOUT, data: "123" });
  };
};

export const getAdminAcc = () => {
  return async (disp) => {
    const res = await axios.get(`${BASEURL}/admin`);
    console.log(res);
    // disp({ type: GETUSER, data: res.data });
  };
};
