import { ALLDATA, TOGGLE } from "../types/type";

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
