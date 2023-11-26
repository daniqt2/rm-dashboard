import { IIntegration } from "@/interfaces/integrations.interface";
import { defineStore } from "pinia";
import integrationService from "@/api/integration.service";

interface IIntegrationStore {
  integrations: IIntegration[] | undefined;
}

export const useIntegrationStore = defineStore("integrations", {
  state: (): IIntegrationStore => ({
    integrations: undefined,
  }),
  actions: {
    async getIntegrations(): Promise<IIntegration[]> {
      return integrationService.getIntegrations().then((res) => {
        this.integrations = res;
        return res;
      });
    },
  },
  getters: {
    integrationList: (state) => state.integrations ?? [],
  },
});
