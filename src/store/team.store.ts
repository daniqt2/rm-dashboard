import { ITeam } from "@/interfaces/teams.interface";
import { defineStore } from "pinia";
import teamService from "@/api/team.service";

interface ITeamStore {
  teams: ITeam[] | undefined;
}

export const useTeamStore = defineStore("team", {
  state: (): ITeamStore => ({
    teams: undefined,
  }),
  actions: {
    async geTeams(): Promise<ITeam[]> {
      return teamService.getTeams().then((res) => {
        this.teams = res;
        return res;
      });
    },
  },
  getters: {
    teamList: (state) => state.teams ?? [],
  },
});
