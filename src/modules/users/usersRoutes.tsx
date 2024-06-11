import { Route, Routes } from "react-router-dom";
import UserProfile from "./pages/userProfile";
import User from "./pages/user";

const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="profile/:userId" element={<UserProfile />} />
    </Routes>
  );
};

export default UsersRoutes;
