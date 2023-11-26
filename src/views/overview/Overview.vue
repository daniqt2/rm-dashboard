<script setup lang="ts">
import BottomCardOverview from "./components/BottomCard.overview.vue";
import MainCardOverview from "./components/MainCard.overview.vue";
import SummaryCardsOverview from "./components/SummaryCards.overview.vue";
</script>

<template>
  <div class="p-4">
    <v-row class="px-0">
      <v-col class="pl-0">
        <MainCardOverview />
      </v-col>
      <v-col cols="1/2" class="pr-0">
        <SummaryCardsOverview />
      </v-col>
    </v-row>
    <v-row class="px-0">
      <BottomCardOverview />
    </v-row>
  </div>
</template>
