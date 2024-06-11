import React from "react";
import { ICompetition } from "../core/models";
import PageHeader from "@/components/shared/PageHeader";
import { DataTable } from "../components/data-table";
import { CompetitionsColumns } from "../components/competitionsColumns";
import CompitionUpsertForm from "../components/competitionsUpsertForm";

type Props = {};

const dummyCompetitions: ICompetition[] = [
  {
    id: "1",
    name: "Chess Tournament",
    winner: "Alice",
    status: "inactive",
    createdAt: new Date("2023-05-15"),
    updatedAt: new Date("2023-08-20"),
  },
  {
    id: "2",
    name: "Football League",
    winner: "Bob",
    status: "active",
    createdAt: new Date("2022-12-10"),
    updatedAt: new Date("2023-09-02"),
  },
  {
    id: "3",
    name: "Coding Challenge",
    winner: "Charlie",
    status: "active",
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-03-15"),
  },
  {
    id: "4",
    name: "Basketball Tournament",
    winner: "David",
    status: "inactive",
    createdAt: new Date("2023-07-05"),
    updatedAt: new Date("2023-10-25"),
  },
  {
    id: "5",
    name: "Running Race",
    winner: "Eva",
    status: "active",
    createdAt: new Date("2024-02-28"),
    updatedAt: new Date("2024-04-10"),
  },
  {
    id: "6",
    name: "Singing Competition",
    winner: "Frank",
    status: "inactive",
    createdAt: new Date("2023-11-12"),
    updatedAt: new Date("2024-01-05"),
  },
  {
    id: "7",
    name: "Golf Championship",
    winner: "Grace",
    status: "active",
    createdAt: new Date("2022-10-18"),
    updatedAt: new Date("2023-06-30"),
  },
  {
    id: "8",
    name: "Cooking Contest",
    winner: "Hannah",
    status: "active",
    createdAt: new Date("2023-04-03"),
    updatedAt: new Date("2023-09-21"),
  },
  {
    id: "9",
    name: "Art Exhibition",
    winner: "Ian",
    status: "inactive",
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2024-05-02"),
  },
  {
    id: "10",
    name: "Dance Off",
    winner: "Jenny",
    status: "active",
    createdAt: new Date("2023-09-15"),
    updatedAt: new Date("2023-12-20"),
  },
];

const Competitions = (props: Props) => {
  const CompitionUpsert = <CompitionUpsertForm />;
  return (
    <>
      {/* Page header */}
      <PageHeader>Competitions</PageHeader>
      {/* Table */}
      <div className="h-screen w-full py-10">
        <DataTable
          columns={CompetitionsColumns}
          data={dummyCompetitions}
          upsert={CompitionUpsert}
        />
      </div>
    </>
  );
};

export default Competitions;
