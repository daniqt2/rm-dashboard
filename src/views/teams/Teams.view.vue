<script setup lang="ts">
import { onMounted } from "vue";
import { ETeamKeys, ITeam } from "@/interfaces/teams.interface";
import { parseTeamData } from "./utils";
import { useTeamStore } from "../../store/team.store";
import { computed } from "vue";

const store = useTeamStore();

const getTeams = async () => {
  if (!store.teamList.length) store.geTeams();
};

const parsedList = computed(() => parseTeamData(store.teamList));

onMounted(() => getTeams());

const labels = ["Team Name", "members"];
const colKeys = [ETeamKeys.NAME, ETeamKeys.USER_COUNT]; // map users to a count
</script>

<template>
  <div></div>
  <div class="p-4" v-if="parsedList.length">
    <v-table>
      <thead>
        <tr>
          <th class="text-left" v-for="col in labels">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in parsedList" :key="`item-${idx}`">
          <td v-for="k in colKeys">{{ item[k as keyof ITeam] || "-" }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div v-else>
    <p>NO TEAMS CREATED</p>
  </div>
</template>
