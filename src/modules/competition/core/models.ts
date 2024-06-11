export interface ICompetition {
  id: string;
  name: string;
  winner: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}

export interface IWinner {
  id: string;
  name: string;
  competition: string;
  createdAt: Date;
  updatedAt: Date;
}
