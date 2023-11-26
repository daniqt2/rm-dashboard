import { ITeam } from "@/interfaces/teams.interface";
import fetcher from "./service";

const teamService = {
  getTeams: (): Promise<ITeam[]> => fetcher.get(`/teams`),
  getTeam: (id: string): Promise<ITeam> => fetcher.get(`/team/${id}`),
  createTeam: (team: ITeam): Promise<ITeam> => fetcher.post(`/team`, team),
  updateTeam: (team: ITeam): Promise<ITeam> => fetcher.put(`/team`, team),
  deleteTeam: (id: string): Promise<any> => fetcher.delete(`/team/${id}`),

  generateDemoData: (): Promise<any> => fetcher.post(`/createDemoTeams/?id=1`), // generates dummy data for Teams
};

export default teamService;
