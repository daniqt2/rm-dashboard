<script setup lang="ts">
import Header from "./components/Header.vue";
import SideMenu from "./components/menu/SideMenu.vue";
</script>

<template>
  <div class="bg-background h-full">
    <Header header-title="DASHBOARD" />
    <v-container fluid class="h-full">
      <v-row class="px-0 h-full grow" density="comfortable">
        <v-col class="bg-rm-secondary px-0">
          <SideMenu />
        </v-col>
        <v-col cols="10" class="px-0 py-0 bg-rm-background">
          <Header
            header-title="OVERVIEW"
            customClass=" bg-rm-primary text-white px-10"
          />
          <div class="p-10">
            <router-view></router-view>
            <!-- <Overview /> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
