import { Route, Routes } from "react-router-dom";
import Wheels from "./pages/wheels";
import WheelItems from "./pages/wheelItems";
import Wheel from "./pages/wheel";

const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Wheel/>} />
      <Route path="wheels" element={<Wheels />} />
      <Route path="wheel-items" element={<WheelItems/>} />
    </Routes>
  );
};

export default UsersRoutes;
