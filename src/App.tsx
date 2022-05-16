import React from 'react';
import { Normalize } from 'styled-normalize'
import { DataSet } from './components/DataSet';
import { Header } from './components/Header';
import { Global } from './style';

export function App() {
  return (
    <>
      <Normalize />
      <Global />
      <Header />
      <DataSet />
    </>
  );
}
