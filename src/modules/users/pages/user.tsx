import PageHeader from "@/components/shared/PageHeader";
import { DataTable } from "../components/data-table";
import { MoreHorizontal } from "lucide-react";
import { IUser } from "../core/models";
import { columns } from "../components/columns";
import UserUpsertForm, { SheetSide } from "../components/UserUpsertForm";
type Props = {};

export const users: IUser[] = [
  {
    id: "1",
    name: "John Doe",
    status: "active",
    email: "john@example.com",
  },
  {
    id: "2",
    name: "Jane Smith",
    status: "inactive",
    email: "jane@example.com",
  },
  {
    id: "3",
    name: "Alice Johnson",
    status: "active",
    email: "alice@example.com",
  },
  {
    id: "4",
    name: "Bob Brown",
    status: "inactive",
    email: "bob@example.com",
  },
  {
    id: "5",
    name: "Emma Davis",
    status: "active",
    email: "emma@example.com",
  },
  // Add more user objects as needed
];

const User = (props: Props) => {
  return (
    <>
      {/* Page header */}
      <div>
        <PageHeader>User</PageHeader>
      </div>
      {/* Table */}
      <div className="h-screen w-full py-10">
        <DataTable columns={columns} data={users} />
      </div>
    </>
  );
};

export default User;
