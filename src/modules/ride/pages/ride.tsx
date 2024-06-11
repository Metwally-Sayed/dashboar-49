import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

export const ROUTES = [
  {
    href: "/ride/rides",
    name: "Rides",
  },
  {
    href: "/ride/come-with-you",
    name: "Come with you",
  },
  {
    href: "/ride/pick-me",
    name: "Pick me",
  },
  {
    href: "/ride/offers",
    name: "Offers",
  },
];

const Ride = (props: Props) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <PageHeader>Ride</PageHeader>
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

export default Ride;
