<script setup lang="ts">
import { onMounted } from "vue";
import {
  IIntegration,
  EIntegrationKeys,
} from "@/interfaces/integrations.interface";
import { useIntegrationStore } from "../../store/integration.store";

const store = useIntegrationStore();

const getIntegrations = async () => {
  if (!store.integrationList.length) store.getIntegrations();
};

onMounted(() => getIntegrations());

const labels = ["Name", "Status", "Token", "User ID"];
const colKeys = [
  EIntegrationKeys.NAME,
  EIntegrationKeys.STATUS,
  EIntegrationKeys.TOKEN,
  EIntegrationKeys.USER_ID,
];
</script>

<template>
  <div class="p-4" v-if="store.integrationList.length">
    <v-table>
      <thead>
        <tr>
          <th class="text-left" v-for="col in labels">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in store.integrationList" :key="`item-${idx}`">
          <td v-for="k in colKeys">{{ item[k as keyof IIntegration] }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div v-else>
    <p>NO USERS CREATED</p>
  </div>
</template>
