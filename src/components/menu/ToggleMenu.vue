<script setup lang="ts">
const items = [
  { title: "Config", value: 1, icon: "mdi-cog" },
  { title: "Editar", value: 1, icon: "mdi-pencil" },
];
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        icon="mdi-dots-vertical"
        v-bind="props"
        class="text-rm-secondary"
      ></v-btn>
    </template>

    <v-list class="width-100">
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-title class="my-4 d-flex">
          <v-icon :icon="item.icon" color="#414246"></v-icon>
          <p class="text-caption self-center ml-2">
            {{ item.title }}
          </p></v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped>
.v-list {
  background-color: transparent !important;
  box-shadow: none !important;
  width: 120px;
  padding: 2px;
}
.v-list-item {
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
  height: 5px;
  letter-spacing: 1px !important;
  border-radius: 2%;
  box-shadow: 2px 2px 2px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.1)),
    0px 2px 2px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.05)),
    0px 3px 0px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.05));
}
.v-list-item--active {
  background-color: #f4f5f8;
  color: #222326;
}
</style>
