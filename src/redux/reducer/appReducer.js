import { ALLDATA, TOGGLE } from "../types/type";

const Initial = { loginOrRegister: true };
export const appReducer = (state = Initial, action) => {
  switch (action.type) {
    case ALLDATA:
      return { name: action.data, age: action.age };
    case TOGGLE:
      return { loginOrRegister: !state.loginOrRegister };
    default:
      return { ...state };
  }
};
