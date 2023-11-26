<script setup lang="ts">
import ToggleMenu from "../menu/ToggleMenu.vue";

const { title } = defineProps<{ title: string }>();
</script>

<template>
  <v-card class="mx-auto w-100">
    <template v-slot:title class="pb-0">
      <div class="d-flex">
        <div>
          <p class="title text-rm-secondary text-h5">{{ title }}</p>
        </div>
        <v-divider class="mx-4 w-full self-center"></v-divider>
      </div>
    </template>
    <template v-slot:append>
      <ToggleMenu />
    </template>

    <v-card-content class="px-4">
      <div class="px-10"><slot name="card-content"></slot></div>
    </v-card-content>
  </v-card>
</template>

<style scoped>
.title {
  letter-spacing: 1px !important;
}
</style>
