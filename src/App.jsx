import React from 'react';
import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { ThemeContext } from './contexts/ThemeContext';

function App() {

  const { theme } = React.useContext(ThemeContext)

  return (
    <div
      style={{ ...theme }}
      className="App">
      <ThemeToggle />
      {/* <ThemeContext></ThemeContext> */}
      <Dashboard />

    </div>
  );
}

export default App;
