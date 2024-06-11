import Layout from "@/components/shared/Layout";
import PersistLogin from "@/components/shared/PersistLogin";
import RequireAuth from "@/components/shared/RequireAuth";
import { LoaderCircle } from "lucide-react";
import { Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const App = lazy(() => import("@/App"));
const Login = lazy(() => import("@/modules/login/login"));
const Users = lazy(() => import("@/modules/users/usersRoutes"));
const Rides = lazy(() => import("@/modules/ride/rideRoutes"));
const Competitions = lazy(
  () => import("@/modules/competition/competitionRoutes")
);
const Wheels = lazy(() => import("@/modules/wheel/wheelRoutes"));

const SuspensedView= ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <LoaderCircle className="animate-spin h-10 w-10" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

const url = window.location.href;

console.log(url, "url");

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* public routes */}
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        {/* private routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route
              path=""
              element={
                <SuspensedView>
                  <App />
                </SuspensedView>
              }
            />
            <Route
              path="users/*"
              element={
                <SuspensedView>
                  <Users />
                </SuspensedView>
              }
            />
            <Route
              path="ride/*"
              element={
                <SuspensedView>
                  <Rides />
                </SuspensedView>
              }
            />
            <Route
              path="competition/*"
              element={
                <SuspensedView>
                  <Competitions />
                </SuspensedView>
              }
            />
            <Route
              path="wheel/*"
              element={
                <SuspensedView>
                  <Wheels />
                </SuspensedView>
              }
            />
            <Route path="settings" element={<>settings</>} />
          </Route>
        </Route>
      </Route>
    </>
  )
);
