import { CHANGE_DATA } from "./actionTypes";

export const changeData = (key, value) => {
  if (key === "password" && value[value.length - 1] === " ")
    return { type: null };
  return {
    type: CHANGE_DATA,
    key,
    value,
  };
};
