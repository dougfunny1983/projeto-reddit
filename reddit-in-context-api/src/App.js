import React from 'react';
import './App.css';
import Reddit from './components/Reddit';
import { Provider } from './context/RedditContext';

const componentMajor = () => (
  <div className="conteiner">
    <Reddit />
  </div>
);

const App = () => <Provider>{componentMajor()}</Provider>;

export default App;
