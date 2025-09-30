<template>
  <div  class="bg-white  flex flex-col ">
    <div class="w-[90%] mx-auto py-2">

    <div class="flex justify-between  items-center">
      <div class="row items-center">
        <q-img
            src="../../public/images/logoMini.png"
            alt="Logo"
            class="q-mr-sm"
            width="50px"
        />
        <div class="text-bold flex flex-col " >
          <span class="text-lg">METSENAT</span> <small class="text-green">PRO</small>
        </div>
      </div>

      <div class=" flex  items-center ">
        <div class="flex items-center bg-[#F1F1F3]">
          <div class="q-mr-sm">{{ userName }}</div>
          <q-avatar size="40px" class="bg-green rounded-md">
            <q-icon name="person" color="white" />
          </q-avatar>
        </div>
        <q-btn dense flat round icon="logout" @click="logout" />
      </div>

    </div>

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
