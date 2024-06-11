import PageHeader from "@/components/shared/PageHeader";
import React from "react";
import { DataTable } from "../components/data-table";
import { ridesColumns } from "../components/ridesColumns";
import { IRide } from "../core/models";
import RideUpsertForm from "../components/RideUpsertForm";

type Props = {};

const rides: IRide[] = [
  {
    id: "1",
    name: "Morning Commute",
    rider: "John Doe",
    user: "Jane Smith",
    status: "active",
    createdAt: new Date("2024-06-09T08:00:00"),
    updatedAt: new Date("2024-06-09T08:30:00"),
  },
  {
    id: "2",
    name: "Afternoon Pickup",
    rider: "Alice Johnson",
    user: "Bob Brown",
    status: "inactive",
    createdAt: new Date("2024-06-09T12:00:00"),
    updatedAt: new Date("2024-06-09T12:15:00"),
  },
  {
    id: "3",
    name: "Weekend Adventure",
    rider: "Emily Jones",
    user: "David Williams",
    status: "active",
    createdAt: new Date("2024-06-07T10:00:00"),
    updatedAt: new Date("2024-06-07T18:00:00"),
  },
  {
    id: "4",
    name: "Late Night Ride",
    rider: "Michael Brown",
    user: "Sophia Garcia",
    status: "inactive",
    createdAt: new Date("2024-06-08T22:00:00"),
    updatedAt: new Date("2024-06-08T23:00:00"),
  },
  {
    id: "5",
    name: "City Tour",
    rider: "Robert Martinez",
    user: "Emma Wilson",
    status: "active",
    createdAt: new Date("2024-06-07T15:00:00"),
    updatedAt: new Date("2024-06-07T17:30:00"),
  },
  {
    id: "6",
    name: "Evening Dinner",
    rider: "Daniel Taylor",
    user: "Olivia Anderson",
    status: "active",
    createdAt: new Date("2024-06-09T19:00:00"),
    updatedAt: new Date("2024-06-09T20:00:00"),
  },
  {
    id: "7",
    name: "Sunday Brunch",
    rider: "Ethan White",
    user: "Ava Moore",
    status: "active",
    createdAt: new Date("2024-06-06T11:00:00"),
    updatedAt: new Date("2024-06-06T13:30:00"),
  },
  {
    id: "8",
    name: "Shopping Spree",
    rider: "Sophie Lee",
    user: "James Wilson",
    status: "inactive",
    createdAt: new Date("2024-06-08T14:00:00"),
    updatedAt: new Date("2024-06-08T15:30:00"),
  },
  {
    id: "9",
    name: "Morning Jog",
    rider: "Liam Thomas",
    user: "Grace Jackson",
    status: "active",
    createdAt: new Date("2024-06-09T06:00:00"),
    updatedAt: new Date("2024-06-09T07:00:00"),
  },
  {
    id: "10",
    name: "Afternoon Tea",
    rider: "Harper Harris",
    user: "Logan Taylor",
    status: "inactive",
    createdAt: new Date("2024-06-09T15:00:00"),
    updatedAt: new Date("2024-06-09T16:30:00"),
  },
];

const Rides = (props: Props) => {
  const upsertRide = <RideUpsertForm />;
  return (
    <>
      {/* Page header */}
      <PageHeader>Rides</PageHeader>
      {/* Table */}
      <div className="h-screen w-full py-10">
        <DataTable
          columns={ridesColumns}
          data={rides}
          upsert={upsertRide}
        />
      </div>
    </>
  );
};

export default Rides;
