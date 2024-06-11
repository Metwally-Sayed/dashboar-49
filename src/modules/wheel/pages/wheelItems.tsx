import React from "react";
import { DataTable } from "../components/data-table";
import PageHeader from "@/components/shared/PageHeader";
import { IWheelItems } from "../core/models";
import { WheelColumns } from "../components/wheelColumns";
import WheelsUpsertForm from "../components/WheelsUpsert";
import { WheelItemsColumns } from "../components/wheelItemsColumns";
import WheelsItemUpsert from "../components/WheelsItemUpsert";

type Props = {};

const dummyData: IWheelItems[] = [
  {
    id: 1,
    name: "Wheel Item 1",
    wheel: "Wheel 1",
    status: "active",
    createdAt: new Date("2024-06-01"),
    updatedAt: new Date("2024-06-10"),
  },
  {
    id: 2,
    name: "Wheel Item 2",
    wheel: "Wheel 2",
    status: "inactive",
    createdAt: new Date("2024-05-20"),
    updatedAt: new Date("2024-06-05"),
  },
  {
    id: 3,
    name: "Wheel Item 3",
    wheel: "Wheel 1",
    status: "active",
    createdAt: new Date("2024-06-03"),
    updatedAt: new Date("2024-06-09"),
  },
  {
    id: 4,
    name: "Wheel Item 4",
    wheel: "Wheel 3",
    status: "active",
    createdAt: new Date("2024-05-28"),
    updatedAt: new Date("2024-06-08"),
  },
  {
    id: 5,
    name: "Wheel Item 5",
    wheel: "Wheel 2",
    status: "inactive",
    createdAt: new Date("2024-06-05"),
    updatedAt: new Date("2024-06-10"),
  },
  {
    id: 6,
    name: "Wheel Item 6",
    wheel: "Wheel 4",
    status: "active",
    createdAt: new Date("2024-06-02"),
    updatedAt: new Date("2024-06-07"),
  },
  {
    id: 7,
    name: "Wheel Item 7",
    wheel: "Wheel 1",
    status: "active",
    createdAt: new Date("2024-06-04"),
    updatedAt: new Date("2024-06-06"),
  },
  {
    id: 8,
    name: "Wheel Item 8",
    wheel: "Wheel 3",
    status: "inactive",
    createdAt: new Date("2024-05-30"),
    updatedAt: new Date("2024-06-04"),
  },
  {
    id: 9,
    name: "Wheel Item 9",
    wheel: "Wheel 4",
    status: "inactive",
    createdAt: new Date("2024-06-06"),
    updatedAt: new Date("2024-06-09"),
  },
  {
    id: 10,
    name: "Wheel Item 10",
    wheel: "Wheel 2",
    status: "active",
    createdAt: new Date("2024-06-07"),
    updatedAt: new Date("2024-06-10"),
  },
];

const WheelItems = (props: Props) => {
    const WheelItemsUpsert = <WheelsItemUpsert />;

  return (
    <>
      {" "}
      {/* Page header */}
      <PageHeader>Wheels</PageHeader>
      {/* Table */}
      <div className="h-screen w-full py-10">
        <DataTable
          columns={WheelItemsColumns}
          data={dummyData}
          upsert={WheelItemsUpsert}
        />
      </div>
    </>
  );
};

export default WheelItems;
