export type Action = {
  type: string;
  data: { [key: string]: any };
};

type countState = {
  count: number,
};

export type StateKey = 'count';

export type State = {
  count: countState,
};

export type Reducer = (state: State, action: Action) => State;

export type Dispatch = (action: Action) => any;
