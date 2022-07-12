import { Normalize } from 'styled-normalize'
import { Header } from './components/Header';
import { AppRouter } from './routes.js'
import { Container, Global } from './style';

export function App() {


  return (
    <>
      <Normalize />
      <Global />

      <Header />
      <Container>
        {/* {table.length !== 0 && window.location.pathname === '/' ? <Statistic /> : ''} */}
        <AppRouter />
      </Container>
      
    </>
  );
}
