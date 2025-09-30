<template>
  <div elevated class="bg-white text-dark flex items-center q-px-md">
    <!-- Chap tomonda Logo va nom -->
    <div class="row items-center">
      <q-img
          src="/logo.png"
          alt="Logo"
          style="width: 40px; height: 40px"
          class="q-mr-sm"
      />
      <div class="text-h6 text-bold">
        METSENAT <span class="text-green">PRO</span>
      </div>
    </div>

    <!-- Markazda Tab navigatsiya -->
    <q-tabs
        v-model="tab"
        class="q-mx-lg"
        active-color="primary"
        indicator-color="primary"
        align="left"
    >
      <q-tab name="dashboard" label="DASHBOARD" />
      <q-tab name="homiylar" label="HOMIYLAR" />
      <q-tab name="talabalar" label="TALABALAR" />
    </q-tabs>

    <q-space />

    <!-- O‘ng tomonda user -->
    <div class="row items-center">
      <div class="q-mr-sm">{{ userName }}</div>
      <q-avatar size="32px" class="q-mr-sm">
        <img src="https://cdn.quasar.dev/img/avatar.png" alt="user" />
      </q-avatar>
      <q-btn dense flat round icon="logout" @click="logout" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const tab = ref("dashboard")
const userName = ref("Shohrux")

const logout = () => {
  console.log("Chiqish bosildi")
  // logout logikangizni shu yerda yozasiz
}
</script>

<style scoped>
.q-header {
  height: 70px;
}
</style>
