import { IUser } from "./user.interface";

export interface ITeam {
  id: string;
  name: string;
  users?: IUser[];
}

export enum ETeamKeys {
  "TEAM_ID" = "team_id",
  "NAME" = "name",
  "USER_COUNT" = "userCount",
}
