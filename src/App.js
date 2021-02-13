import React from 'react'

import { ActionPanel, Cards, ErrorBoundary } from './components'

import useActionStack from './hooks/useActionStack'
import withStackContext from './components/withStackContext'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const INITIAL_VALUE = {
  dev: "true",
  qa: "true",
  prod: "false"
}

export const AppContext = React.createContext(null)

function App() {

  const {
    isRedoAvailable,
    isUndoAvailable,
    onAction,
    onUndo,
    onRedo,
    stackState
  } = useActionStack(INITIAL_VALUE)

  const CardsWithStackContext = withStackContext(Cards)

  return (
    <div className="App">
      <ErrorBoundary>
        <AppContext.Provider value={{ isRedoAvailable, isUndoAvailable, onAction, onUndo, onRedo, stackState }}>
          <ActionPanel />
          <CardsWithStackContext />
        </AppContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
