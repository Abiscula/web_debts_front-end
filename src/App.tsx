import React from 'react';
import { Normalize } from 'styled-normalize'
import { DataSet } from './components/DataSet';
import { Header } from './components/Header';

export function App() {
  return (
    <div className="App">
      <Normalize />
      <Header />
      <DataSet />
    </div>
  );
}
