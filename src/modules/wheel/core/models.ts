export interface IWheel {
  id: number;
  name: string;
  itemsCount: number;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}


export interface IWheelItems {
  id: number;
  name: string;
  wheel:string
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}