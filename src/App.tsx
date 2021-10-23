import React from 'react';
import './App.scss';
import {AppStateProvider} from "./store";
import Counter from "./components/Counter";

function App() {
  return (
    <AppStateProvider>
      <div className="app">
        <Counter />
      </div>
    </AppStateProvider>
  );
}

export default App;
