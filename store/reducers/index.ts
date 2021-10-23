import countReducer from "./countReducer";
import {Action, Reducer, State, StateKey} from "../types";

const combineReducers = (reducers: { [key: string]: Reducer }) => {
  return (state: State, action: Action) => {
    return Object.keys(reducers).reduce((acc, prop: StateKey) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const reducer = combineReducers({
  count: countReducer,
});

export default reducer;
