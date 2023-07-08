import axios from "axios";
import {
  ALLDATA,
  BASEURL,
  GETADMINACCOUNT,
  GETDOCTORDATA,
  GETDOCTORTIMETABLE,
  GETUSER,
  LOGIN,
  LOGOUT,
  POSTLOGIN,
  SESSIONCHECK,
  TOGGLE,
  UPDATED,
} from "../types/type";

export const changeDate = (date) => {
  const dateOfBirth = new Date(date);
  const mm =
    dateOfBirth.getUTCMonth + 1 > 9
      ? `${dateOfBirth.getUTCMonth() + 1}`
      : `0${dateOfBirth.getUTCMonth() + 1}`;
  const dd =
    dateOfBirth.getUTCMonth + 1 > 9
      ? `${dateOfBirth.getDate()}`
      : `0${dateOfBirth.getDate()}`;
  const ele = `${dateOfBirth.getFullYear()}-${mm}-${dd}`;
  return ele;
};
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
    const res = await axios.get(`/sessioncheck`, {
      withCredentials: true,
    });
    disp({ type: SESSIONCHECK, status: res.status });
  };
};

export const postLoginUser = (ele) => {
  return async (disp) => {
    const res = await axios.post(`/login`, ele, {
      withCredentials: true,
    });
    // if (res.status=== 200)
    disp({ type: POSTLOGIN, status: res.status });
  };
};
export const sessionLogOut = () => {
  return async (disp) => {
    const res = await axios.get(`/logout`, {
      withCredentials: true,
    });
    console.log(res);
    // sessionCheck();
    disp({ type: LOGOUT, status: res.status });
  };
};

export const getAdminAcc = () => {
  return async (disp) => {
    const res = await axios.get(`/admin/getadminaccount`, {
      withCredentials: true,
    });
    // console.log(res);
    disp({ type: GETADMINACCOUNT, data: res.data });
  };
};
export const updateAdminAcc = (ele) => {
  return async (disp) => {
    const res = await axios.patch(`/admin/updateadminaccount`, ele, {
      withCredentials: true,
    });
    // console.log(res);
    disp({ type: GETADMINACCOUNT, data: res.data });
  };
};
export const getDoctorData = () => {
  return async (disp) => {
    const res = await axios.get(`/doctor/getaccount`, {
      withCredentials: true,
    });
    disp({ type: GETDOCTORDATA, data: res.data });
  };
};
export const updateDoctorData = (ele) => {
  return async (disp) => {
    const res = await axios.patch(`/doctor/updateaccount`, ele, {
      withCredentials: true,
    });
    disp({ type: GETDOCTORDATA, data: res.data });
  };
};

export const getDoctorTimeTable = () => {
  return async (disp) => {
    const res = await axios.get(`/doctor/gettimetable`, {
      withCredentials: true,
    });
    disp({ type: GETDOCTORTIMETABLE, data: res.data });
  };
};
