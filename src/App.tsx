import { Normalize } from 'styled-normalize'
import { Header } from './components/Header';
import { Statistic } from './components/Statistic';
import { Table } from './components/Table';
import { useDataContext } from './provider/dataProvider';
import { Container, Global } from './style';

export function App() {

  const { table } = useDataContext()

  return (
    <>
      <Normalize />
      <Global />

      <Header />

      <Container>
        <Table />
        {table.length !== 0 ? <Statistic /> : ''}
      </Container>
      
    </>
  );
}
