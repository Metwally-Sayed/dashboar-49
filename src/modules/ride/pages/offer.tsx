import PageHeader from "@/components/shared/PageHeader";
import React from "react";
import { DataTable } from "../components/data-table";
import { IOffer } from "../core/models";
import { OffersColumns } from "../components/offersColumns";
import OffersUpsertForm from "../components/OffersUpsert";

type Props = {};

const offers: IOffer[] = [
  {
    id: "1",
    name: "Summer Sale",
    discount: 20,
    code: "SUMMER20",
    status: "active",
    createdAt: new Date("2024-06-09T08:00:00"),
    updatedAt: new Date("2024-06-09T08:30:00"),
  },
  {
    id: "2",
    name: "Back to School",
    discount: 15,
    code: "SCHOOL15",
    status: "active",
    createdAt: new Date("2024-06-09T12:00:00"),
    updatedAt: new Date("2024-06-09T12:15:00"),
  },
  {
    id: "3",
    name: "Holiday Special",
    discount: 25,
    code: "HOLIDAY25",
    status: "inactive",
    createdAt: new Date("2024-06-07T10:00:00"),
    updatedAt: new Date("2024-06-07T18:00:00"),
  },
  {
    id: "4",
    name: "Winter Clearance",
    discount: 30,
    code: "WINTER30",
    status: "active",
    createdAt: new Date("2024-06-08T22:00:00"),
    updatedAt: new Date("2024-06-08T23:00:00"),
  },
  {
    id: "5",
    name: "Spring Break",
    discount: 10,
    code: "BREAK10",
    status: "active",
    createdAt: new Date("2024-06-07T15:00:00"),
    updatedAt: new Date("2024-06-07T17:30:00"),
  },
  {
    id: "6",
    name: "Weekend Deal",
    discount: 5,
    code: "WEEKEND5",
    status: "active",
    createdAt: new Date("2024-06-09T19:00:00"),
    updatedAt: new Date("2024-06-09T20:00:00"),
  },
  {
    id: "7",
    name: "Fall Promotion",
    discount: 18,
    code: "FALL18",
    status: "inactive",
    createdAt: new Date("2024-06-06T11:00:00"),
    updatedAt: new Date("2024-06-06T13:30:00"),
  },
  {
    id: "8",
    name: "Easter Sale",
    discount: 12,
    code: "EASTER12",
    status: "active",
    createdAt: new Date("2024-06-08T14:00:00"),
    updatedAt: new Date("2024-06-08T15:30:00"),
  },
  {
    id: "9",
    name: "New Year's Special",
    discount: 22,
    code: "NEWYEAR22",
    status: "active",
    createdAt: new Date("2024-06-09T06:00:00"),
    updatedAt: new Date("2024-06-09T07:00:00"),
  },
  {
    id: "10",
    name: "Valentine's Day",
    discount: 14,
    code: "LOVE14",
    status: "inactive",
    createdAt: new Date("2024-06-09T15:00:00"),
    updatedAt: new Date("2024-06-09T16:30:00"),
  },
];

const Offers = (props: Props) => {
  const offersUpsert = <OffersUpsertForm />;

  return (
    <>
      {" "}
      {/* Page header */}
      <PageHeader>Offers</PageHeader>
      {/* Table */}
      <div className="h-screen w-full py-10">
        <DataTable
          columns={OffersColumns}
          data={offers}
          upsert={offersUpsert}
        />
      </div>
    </>
  );
};

export default Offers;
