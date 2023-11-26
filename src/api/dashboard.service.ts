import fetcher from "./service";

export interface ICountData {
  user_count: number;
  team_count: number;
  integration_count: number;
}

const dashboardService = {
  getCount: (): Promise<ICountData> => fetcher.get(`/dashboard_data`),
};

export default dashboardService;
