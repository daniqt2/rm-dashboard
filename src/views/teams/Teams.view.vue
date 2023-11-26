<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import teamService from "@/api/team.service";
import { ETeamKeys, ITeam } from "@/interfaces/teams.interface";
import { parseTeamData, ITeamCountData } from "./utils";

const teamList = ref<ITeamCountData[]>([]);

// TODO - ADD PINIA FOR STATE MANAGEMENT
const getUsersData = async () => {
  teamService.getTeams().then((res) => {
    if (res) {
      const parsedRes = parseTeamData(res);
      teamList.value.push(...parsedRes);
    }
  });
};

onMounted(() => getUsersData());

const labels = ["Team Name", "members"];
const colKeys = [ETeamKeys.NAME, ETeamKeys.USER_COUNT]; // map users to a count
</script>

<template>
  <div></div>
  <div class="p-4" v-if="teamList.length">
    <v-table>
      <thead>
        <tr>
          <th class="text-left" v-for="col in labels">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in teamList" :key="`item-${idx}`">
          <td v-for="k in colKeys">{{ item[k as keyof ITeam] || "-" }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div v-else>
    <p>NO TEAMS CREATED</p>
  </div>
</template>
