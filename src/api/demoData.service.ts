import fetcher from "./service";

const demoService = {
  generateDemoData: (): Promise<any> => fetcher.post(`/createDemoData/?id=1`), // generates dummy data for Teams
};

export default demoService;
