import { Dispatch } from "../types";

export const setCount = (dispatch: Dispatch, count: number) => {
  dispatch({
    type: "SET_COUNT",
    data: { count },
  });
};
