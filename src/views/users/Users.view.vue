<script setup lang="ts">
import { onMounted } from "vue";
import { IUser, EUserKeys } from "@/interfaces/user.interface";
import { ref } from "vue";
import userService from "@/api/user.service";
import demoService from "@/api/demoData.service";

const userList = ref<IUser[]>([]);

const getUsersData = async () => {
  userService.getUsers().then((res) => userList.value.push(...res));
};
const generateDemoData = async () => {
  demoService.generateDemoData().then(() => getUsersData());
};

onMounted(() => getUsersData());

const labels = ["First Name", "Last name", "Email", "Status"];
const colKeys = [
  EUserKeys.FIRST_NAME,
  EUserKeys.LAST_NAME,
  EUserKeys.EMAIL,
  EUserKeys.STATUS,
];
</script>

<template>
  <div class="p-4" v-if="userList.length">
    <v-table>
      <thead>
        <tr>
          <th class="text-left" v-for="col in labels">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in userList" :key="`item-${idx}`">
          <td v-for="k in colKeys">{{ item[k as keyof IUser] }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div v-else>
    <p>NO USERS CREATED</p>
    <button
      class="bg-rm-primary p-4 rounded-lg mt-4 cursor-pointer"
      :onclick="generateDemoData"
    >
      Click to generate DEMO DATA
    </button>
  </div>
</template>
