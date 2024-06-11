import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


export const ROUTES = [
  {
    href: "/competition/competitions",
    name: "Competitions",
  },
  {
    href: "/competition/winners",
    name: "Winners",
  },
];

const Competition = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <PageHeader>Competition</PageHeader>

      {/* Menu */}
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
};

export default Competition;
