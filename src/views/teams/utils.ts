import { ITeam } from "@/interfaces/teams.interface";

export interface ITeamCountData extends ITeam {
  userCount: number;
}

export const parseTeamData = (teams: ITeam[]): ITeamCountData[] => {
  return teams.map((team) => {
    return {
      ...team,
      userCount: team.users?.length || 0,
    };
  });
};
