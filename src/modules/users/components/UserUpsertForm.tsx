import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";


const UserUpsertForm = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>
          <Plus />
          Add User
        </Button>
      </SheetTrigger>
      <SheetContent className="md:min-w-[800px] w-[390px] ">
        <SheetHeader>
          <SheetTitle>Add user</SheetTitle>
          <Separator />

          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>
        <div className="grid  grid-cols-2 gap-4 py-4">
          <div className="  items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className=" items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email{" "}
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
          <div className=" items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Statues{" "}
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default UserUpsertForm;
