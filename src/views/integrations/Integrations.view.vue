<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import demoService from "@/api/demoData.service";
import integrationService from "@/api/integration.service";
import {
  IIntegration,
  EIntegrationKeys,
} from "@/interfaces/integrations.interface";

const userList = ref<IIntegration[]>([]);

// TODO - ADD PINIA FOR STATE MANAGEMENT
const getUsersData = async () => {
  integrationService.getIntegrations().then((res) => {
    console.log(res);
    if (res) userList.value.push(...res);
  });
};
const generateDemoData = async () => {
  demoService.generateDemoData().then(() => getUsersData());
};

onMounted(() => getUsersData());

const labels = ["Name", "Status", "Token", "User ID"];
const colKeys = [
  EIntegrationKeys.NAME,
  EIntegrationKeys.STATUS,
  EIntegrationKeys.TOKEN,
  EIntegrationKeys.USER_ID,
];
</script>

<template>
  <div class="p-4" v-if="userList.length">
    <v-table>
      <thead>
        <tr>
          <th class="text-left" v-for="col in labels">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in userList" :key="`item-${idx}`">
          <td v-for="k in colKeys">{{ item[k as keyof IIntegration] }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div v-else>
    <p>NO USERS CREATED</p>
    <button
      class="bg-rm-primary p-4 rounded-lg mt-4 cursor-pointer"
      :onclick="generateDemoData"
    >
      Click to generate DEMO DATA
    </button>
  </div>
</template>
