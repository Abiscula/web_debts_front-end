import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from './components/Menu';
import { Table } from './components/Table';
import { Statistic } from "./components/Statistic";
import { Graph } from "./components/Graph";

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
