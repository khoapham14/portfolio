import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Error404Page from "./components/Error404Page";
import "./App.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  );
}

export default App;
