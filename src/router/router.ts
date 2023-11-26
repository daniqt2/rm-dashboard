import { createRouter, createWebHistory } from "vue-router";

import IntegrationsView from "../views/integrations/Integrations.view.vue";
import Overview from "../views/overview/Overview.vue";
import TeamsView from "../views/teams/Teams.view.vue";
import UsersView from "../views/users/Users.view.vue";

export enum ERoutes {
  OVERVIEW = "/",
  USERS = "/users",
  TEAMS = "/teams",
  INTEGRATIONS = "/integrations",
}

const routes = [
  { path: ERoutes.OVERVIEW, component: Overview },
  { path: ERoutes.USERS, component: UsersView },
  { path: ERoutes.TEAMS, component: TeamsView },
  { path: ERoutes.INTEGRATIONS, component: IntegrationsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
