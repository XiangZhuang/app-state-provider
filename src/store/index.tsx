import { createContext, ReactNode, useContext, useReducer } from "react";
import reducer from "./reducers";
import initialState from "./states";
import {Dispatch, State} from "./types";

const Context = createContext({});

export const AppStateProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  // @ts-ignore
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppState: () => [state: State, dispatch: Dispatch] = () => {
  return useContext(Context) as [state: State, dispatch: Dispatch];
};
