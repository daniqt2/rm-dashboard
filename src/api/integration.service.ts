import { IIntegration } from "@/interfaces/integrations.interface";
import fetcher from "./service";

const integrationService = {
  getIntegrations: (): Promise<IIntegration[]> => fetcher.get(`/integrations`),
  getIntegration: (id: string): Promise<IIntegration> =>
    fetcher.get(`/integration/${id}`),
  createIntegration: (integration: IIntegration): Promise<IIntegration> =>
    fetcher.post(`/integration`, integration),
  updateIntegration: (integration: IIntegration): Promise<IIntegration> =>
    fetcher.put(`/integration`, integration),
  deleteIntegration: (id: string): Promise<any> =>
    fetcher.delete(`/integration/${id}`),
};

export default integrationService;
