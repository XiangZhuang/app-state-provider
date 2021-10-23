import { Action, Reducer, State } from "../types";

const countReducer: Reducer = (state: State, action: Action) => {
  const { type, data = {} } = action;
  switch (type) {
    case "SET_COUNT": {
      const count = data.count;
      return {
        ...state,
        count: {
          ...state.count,
          count,
        },
      };
    }
    default:
      return state;
  }
};

export default countReducer;
