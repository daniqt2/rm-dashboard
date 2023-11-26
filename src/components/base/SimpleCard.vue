<script setup lang="ts">
const { title, count } = defineProps<{ title: string; count: number }>();
</script>

<template>
  <v-card
    class="mx-auto mb-8 py-5 px-4"
    :title="title"
    append-icon="mdi-open-in-new"
    target="_blank"
    rel="noopener"
  >
    <template v-slot:append>
      <p class="text-h4 text-rm-primary font-weight-bold">
        {{ count }}
      </p></template
    ></v-card
  >
</template>
