export interface IRide {
  id: string;
  name: string;
  rider: string;
  user: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}

export interface IOffer {
    id: string;
    name: string;
    discount: number;
    code: string;
    status: "active" | "inactive";
    createdAt: Date;
    updatedAt: Date;
  }
  