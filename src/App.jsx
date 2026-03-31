import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiplomadoMaternidad360 from "./pages/DiplomadoMaternidad360";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/diplomadomaternidad360"
          element={<DiplomadoMaternidad360 />}
        />
      </Routes>
    </BrowserRouter>
  );
}