# app-state-provider
Context provider structure (with reducers, actions, states) for React Hook.

---

### Guide:

- Please copy the store directory into your React project.

- Import <b>AppStateProvider</b> to wrap your whole application.

- Import <b>useAppState</b> to get the state and dispatch function. (dispatch is required for actions) e.g. <b>const [state, dispatch] = useAppState()</b>

- To add a new state:

    - Add a new state type in types.tsx
    - Update the types <b>StateKey</b> & <b>State</b> in types.tsx

---

### Notes:

- All state types are restricted by Typescript.

- App can only modify states through actions.
