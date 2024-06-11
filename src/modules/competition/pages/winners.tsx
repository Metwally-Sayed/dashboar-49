import PageHeader from "@/components/shared/PageHeader";
import { DataTable } from "../components/data-table";
import { WinnersColumns } from "../components/winnersColumns";
import WinnersUpsertForm from "../components/winnersUpsertForm";
import { IWinner } from "../core/models";

const dummyWinners: IWinner[] = [
  {
    id: "1",
    name: "Alice",
    competition: "Chess Tournament",
    createdAt: new Date("2023-05-15"),
    updatedAt: new Date("2023-08-20"),
  },
  {
    id: "2",
    name: "Bob",
    competition: "Football League",
    createdAt: new Date("2022-12-10"),
    updatedAt: new Date("2023-09-02"),
  },
  {
    id: "3",
    name: "Charlie",
    competition: "Coding Challenge",
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-03-15"),
  },
  {
    id: "4",
    name: "David",
    competition: "Basketball Tournament",
    createdAt: new Date("2023-07-05"),
    updatedAt: new Date("2023-10-25"),
  },
  {
    id: "5",
    name: "Eva",
    competition: "Running Race",
    createdAt: new Date("2024-02-28"),
    updatedAt: new Date("2024-04-10"),
  },
  {
    id: "6",
    name: "Frank",
    competition: "Singing Competition",
    createdAt: new Date("2023-11-12"),
    updatedAt: new Date("2024-01-05"),
  },
  {
    id: "7",
    name: "Grace",
    competition: "Golf Championship",
    createdAt: new Date("2022-10-18"),
    updatedAt: new Date("2023-06-30"),
  },
  {
    id: "8",
    name: "Hannah",
    competition: "Cooking Contest",
    createdAt: new Date("2023-04-03"),
    updatedAt: new Date("2023-09-21"),
  },
  {
    id: "9",
    name: "Ian",
    competition: "Art Exhibition",
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2024-05-02"),
  },
  {
    id: "10",
    name: "Jenny",
    competition: "Dance Off",
    createdAt: new Date("2023-09-15"),
    updatedAt: new Date("2023-12-20"),
  },
];

const Winners = () => {
  const upsertWinner = <WinnersUpsertForm />;

  return (
    <>
      {/* Page header */}
      <PageHeader>Winners</PageHeader>
      {/* Table */}
      <div className="h-screen w-full py-10">
        <DataTable
          columns={WinnersColumns}
          data={dummyWinners}
          upsert={upsertWinner}
        />
      </div>
    </>
  );
};

export default Winners;
