import React from 'react';
import './App.css';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Card from './components/cardv2';
import About from './components/about';

function App() {
  return (
    <Card />
  );
}

export default App;

