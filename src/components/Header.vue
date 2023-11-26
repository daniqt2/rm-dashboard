<script setup lang="ts">
const { headerTitle, customClass } = defineProps<{
  headerTitle: string;
  customClass?: string;
}>();
</script>

<template>
  <div class="bg-red-100 p-2 px-4" :class="customClass">
    <p class="font-weight-bold text-h5">{{ headerTitle }}</p>
  </div>
</template>
