<script setup lang="ts">
import CardBase from "@components/base/CardBase.vue";

const data = [
  {
    title: "Consigna",
    points: [
      "Replicar este dashboard respetando estilos y colores definidos en Figma.",
      "Agregar vistas para manejo de usuarios, equipos e integraciones, linkeables desde el panel de navegación",
      "Realizar un backend para el CRUD de los datos de usuarios, equipos e integraciones implementando los modelos descriptos abajo.",
    ],
  },
  {
    title: "Requerimientos",
    points: [
      "Para el frontend utilizar el framework Vue.js con librería de componentes Vuetify.",
      "Para el backend utilizar el framework Fastapi.",
      "Entrega del código de frontend y backend en un zip.",
    ],
  },
];
</script>

<template>
  <CardBase title="Prueba técnica">
    <template v-slot:card-content>
      <div v-for="el in data" class="text-caption mb-3">
        <p class="text-decoration-underline mb-2">{{ el.title }}:</p>
        <div>
          <ul class="ml-4">
            <li v-for="p in el.points" class="mb-2">
              {{ p }}
            </li>
          </ul>
        </div>
      </div>
    </template>
  </CardBase>
</template>
<style>
ul > li:before {
  content: "";
  display: list-item;
  position: absolute;
}
</style>
