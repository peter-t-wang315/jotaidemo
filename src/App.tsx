import "./App.css";
import { Route, Routes } from "react-router-dom";
import Context from "./routes/context/ContextPage";
import Jotai from "./routes/jotai/JotaiPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Context />} />
      <Route path="/jotai" element={<Jotai />} />
    </Routes>
  );
}

export default App;
