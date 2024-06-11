import "./App.css";
import PageHeader from "./components/shared/PageHeader";
import { Button } from "./components/ui/button";
import { useNavigate } from "react-router-dom";
export const ROUTES = [
  {
    href: "/users",
    name: "Users",
  },
  {
    href: "/ride",
    name: "Ride",
  },
  {
    href: "/competition",
    name: "Competition",
  },
  {
    href: "/pending",
    name: "Pending",
  },
  {
    href: "/settings",
    name: "Settings",
  },
];

function App() {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader>Quick access</PageHeader>
      <div className="grid md:grid-cols-4 gap-4 mt-10">
        {ROUTES.map((route) => (
          <Button
            onClick={() => navigate(route.href)}
            className="h-20"
            key={route.href}
          >
            {route.name}
          </Button>
        ))}
      </div>
    </>
  );
}

export default App;
