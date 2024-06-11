import { Route, Routes } from "react-router-dom";
import Ride from "./pages/ride";
import RideProfile from "./pages/rideProfile";
import Rides from "./pages/rides";
import Offer from "./pages/offer";

const RidesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Ride />} />
      <Route path="rides" element={<Rides />} />
      <Route path="come-with-you" element={<>come-with-you</>} />
      <Route path="pick-me" element={<>pick-me</>} />
      <Route path="offers" element={<Offer />} />

      {/* Profile */}
      <Route path="profile/:rideId" element={<RideProfile />} />
    </Routes>
  );
};

export default RidesRoutes;
