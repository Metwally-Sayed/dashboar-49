import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

export const ROUTES = [
  {
    href: "/users",
    name: "Users",
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

const Dashboard = (props: Props) => {
  return (
    <>
      <div className=" text-xl font-semibold mb-5">
        <h2>Quick access</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {ROUTES.map((route) => (
          <Button className="h-20" key={route.href}>
            {route.name}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
