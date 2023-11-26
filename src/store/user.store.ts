import { IUser } from "@/interfaces/user.interface";
import { defineStore } from "pinia";
import userService from "@/api/user.service";

interface IUserstore {
  users: IUser[] | undefined;
}

export const useUserStore = defineStore("counter", {
  state: (): IUserstore => ({
    users: undefined,
  }),
  actions: {
    async getUsers(): Promise<IUser[]> {
      return userService.getUsers().then((res) => {
        this.users = res;
        return res;
      });
    },
  },
  getters: {
    userList: (state) => state.users ?? [],
  },
});
