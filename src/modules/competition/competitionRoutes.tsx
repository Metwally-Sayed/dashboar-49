import { Route, Routes } from "react-router-dom";
import Competition from "./pages/competition";
import Competitions from "./pages/competitions";
import Winners from "./pages/winners";

const CompetitionsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Competition />} />
      <Route path="competitions" element={<Competitions />} />
      <Route path="winners" element={<Winners/>} />
      {/* Profile */}
    </Routes>
  );
};

export default CompetitionsRoutes;
