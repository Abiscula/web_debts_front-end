import { Normalize } from 'styled-normalize'
import { Header } from './components/Header';
import { Statistic } from './components/Statistic';
import { Table } from './components/Table';
import { Container, Global } from './style';

export function App() {
  return (
    <>
      <Normalize />
      <Global />

      <Header />

      <Container>
        <Table />
        <Statistic />
      </Container>
      
    </>
  );
}
