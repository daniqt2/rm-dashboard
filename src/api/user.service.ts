import { IUser } from "@/interfaces/user.interface";
import fetcher from "./service";

const userService = {
  getUsers: (): Promise<IUser[]> => fetcher.get(`/users`),
  getUser: (id: string): Promise<IUser> => fetcher.get(`/user/${id}`),
  createUser: (user: IUser): Promise<IUser> => fetcher.post(`/user`, user),
  updateUser: (user: IUser): Promise<IUser> => fetcher.put(`/user`, user),
  deleteUser: (id: string): Promise<any> => fetcher.delete(`/user/${id}`),
};

export default userService;
