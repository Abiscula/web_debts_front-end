import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from './components/Menu';
import { Table } from './pages/Table';
import { Statistic } from "./pages/Statistic";
import { Graph } from "./pages/Graph";

export function AppRouter() {
  return (
    <>
      <Router>
      <Menu />
        <Routes>

          <Route path="/" element={<Table />} />

          <Route path="/statistic" element={<Statistic />} />

          <Route path="/graph" element={<Graph />} />

        </Routes>
      </Router>
    </>
  );
}
