<script setup lang="ts">
import dashboardService from "@/api/dashboard.service";
import SimpleCard from "@/components/base/SimpleCard.vue";
import { reactive } from "vue";
import { onMounted } from "vue";

export interface ICountData {
  user_count: number;
  team_count: number;
  integration_count: number;
}

const data = reactive<ICountData>({
  user_count: 0,
  team_count: 0,
  integration_count: 0,
});

const getUsersData = async () => {
  dashboardService.getCount().then((res) => {
    if (res) Object.assign(data, res);
  });
};

onMounted(() => getUsersData());
</script>

<template>
  <div>
    <SimpleCard title="Usuarios" :count="data.user_count" />
    <SimpleCard title="Equipos" :count="data.team_count" />
    <SimpleCard title="Integraciones" :count="data.integration_count" />
  </div>
</template>
