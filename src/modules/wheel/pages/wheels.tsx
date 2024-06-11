import PageHeader from "@/components/shared/PageHeader";
import React from "react";
import { DataTable } from "../components/data-table";
import { WheelColumns } from "../components/wheelColumns";
import WheelsUpsertForm from "../components/WheelsUpsert";

type Props = {};

const dummyData: IWheel[] = [
  {
    id: 1,
    name: "Wheel 1",
    itemsCount: 20,
    status: "active",
    createdAt: new Date("2024-06-01"),
    updatedAt: new Date("2024-06-10"),
  },
  {
    id: 2,
    name: "Wheel 2",
    itemsCount: 15,
    status: "inactive",
    createdAt: new Date("2024-05-20"),
    updatedAt: new Date("2024-06-05"),
  },
  {
    id: 3,
    name: "Wheel 3",
    itemsCount: 25,
    status: "active",
    createdAt: new Date("2024-06-03"),
    updatedAt: new Date("2024-06-09"),
  },
  {
    id: 4,
    name: "Wheel 4",
    itemsCount: 18,
    status: "active",
    createdAt: new Date("2024-05-28"),
    updatedAt: new Date("2024-06-08"),
  },
  {
    id: 5,
    name: "Wheel 5",
    itemsCount: 30,
    status: "inactive",
    createdAt: new Date("2024-06-05"),
    updatedAt: new Date("2024-06-10"),
  },
  {
    id: 6,
    name: "Wheel 6",
    itemsCount: 22,
    status: "active",
    createdAt: new Date("2024-06-02"),
    updatedAt: new Date("2024-06-07"),
  },
  {
    id: 7,
    name: "Wheel 7",
    itemsCount: 17,
    status: "active",
    createdAt: new Date("2024-06-04"),
    updatedAt: new Date("2024-06-06"),
  },
  {
    id: 8,
    name: "Wheel 8",
    itemsCount: 28,
    status: "inactive",
    createdAt: new Date("2024-05-30"),
    updatedAt: new Date("2024-06-04"),
  },
  {
    id: 9,
    name: "Wheel 9",
    itemsCount: 19,
    status: "inactive",
    createdAt: new Date("2024-06-06"),
    updatedAt: new Date("2024-06-09"),
  },
  {
    id: 10,
    name: "Wheel 10",
    itemsCount: 23,
    status: "active",
    createdAt: new Date("2024-06-07"),
    updatedAt: new Date("2024-06-10"),
  },
];

const Wheels = (props: Props) => {
  const WheelsUpsert = <WheelsUpsertForm />;

  return (
    <>
      {" "}
      {/* Page header */}
      <PageHeader>Wheels</PageHeader>
      {/* Table */}
      <div className="h-screen w-full py-10">
        <DataTable
          columns={WheelColumns}
          data={dummyData}
          upsert={WheelsUpsert}
        />
      </div>
    </>
  );
};

export default Wheels;
