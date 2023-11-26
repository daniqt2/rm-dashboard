import { ITeam } from "./teams.interface";

enum EStatusUser {
  "ACTIVE" = "active",
  "NOT_ACTIVE" = "noActive",
}

export interface IUser {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  status: EStatusUser;

  teams?: ITeam[];
}

export enum EUserKeys {
  "FIRST_NAME" = "first_name",
  "LAST_NAME" = "last_name",
  "EMAIL" = "email",
  "STATUS" = "status",
}
