<script setup lang="ts">
import { computed } from "vue";

export interface IColumn {
  ["string"]: string;
}
const { items, columns } = defineProps<{
  items: keyof IColumn;
  columns: IColumn[];
}>();

const column_labels = computed(() => Object.values(columns));
const column_keys = computed(() => Object.keys(columns));
</script>

<!-- Añadir scroll / paginado -->
<template>
  <div class="p-4">
    <v-table>
      <thead>
        <tr>
          <th class="text-left" v-for="col in column_labels">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in items" :key="`item-${idx}`">
          <td v-for="k in column_keys">{{ `${item[k] || "-"}` }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
