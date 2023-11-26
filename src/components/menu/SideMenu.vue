<script setup lang="ts">
import { ERoutes } from "@/router/router";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const items = [
  { title: "Overview", value: ERoutes.OVERVIEW },
  { title: "Usuarios", value: ERoutes.USERS },
  { title: "Equipos", value: ERoutes.TEAMS },
  { title: "Integraciones", value: ERoutes.INTEGRATIONS },
];
</script>

<template>
  <div>
    <v-list class="bg-rm-secondary" id="the-list">
      <v-list-item
        v-for="(item, i) in items"
        :active="route.path === item.value"
        :key="i"
        :value="item"
        @click="router.push({ path: item.value })"
        class="m-4 bg-secondary-light rounded-md"
        ><p class="text-weight-bold">{{ item.title }}</p></v-list-item
      >
    </v-list>
  </div>
</template>

<style scoped>
#the-list {
  background-color: transparent;
}
.v-list-item {
  background-color: #414246;
  color: white;
  letter-spacing: 1px !important;
  border-radius: 2%;
}
.v-list-item--active {
  background-color: #f4f5f8;
  color: #222326;
  font-weight: bold;
}
</style>
