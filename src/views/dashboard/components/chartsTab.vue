<template>
  <q-card class="p-4 shadow-md rounded-xl">
    <div class="text-xl font-bold mb-2">Homiylar va talabalar soni</div>

    <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
    />
  </q-card>
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
import { ref } from "vue";

const apexchart = VueApexCharts;

const series = ref([
  {
    name: "Homiylar",
    data: [150, 400, 950, 1284, 800, 1100, 1600, 1800, 1500, 1400, 1550, 1700],
  },
  {
    name: "Talabalar",
    data: [300, 700, 1100, 1153, 900, 1200, 2200, 2500, 2400, 2300, 2600, 2900],
  },
]);

const chartOptions = ref({
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  colors: ["#3365FC", "#FF6384"], // homiylar ko‘k, talabalar pushti
  stroke: {
    curve: "smooth",
    width: 3,
  },
  markers: {
    size: 4,
    hover: { size: 7 },
  },
  xaxis: {
    categories: [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
    ],
  },
  yaxis: {
    labels: {
      formatter: (val: number) => val.toLocaleString("uz-UZ"),
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    markers: {
      radius: 12,
    },
  },
});
</script>
