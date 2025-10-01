<template>
  <div  class="bg-white  flex flex-col ">
    <div class="w-[90%] flex flex-col gap-8 mx-auto py-2">
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

      <div class=" flex  items-center gap-3 ">
        <div class="flex gap-1 items-center p-1 pl-3 rounded-md bg-[#F1F1F3]">
          <div class="text-sm font-bold">{{ userName }}</div>
          <div  class="w-[30px] h-[30px] flex justify-center items-center bg-green rounded-md overflow-hidden">
            <q-icon name="person" color="white" />
          </div>
        </div>
        <q-icon class="cursor-pointer" size="25px"   name="logout" @click="logout" />
      </div>
    </div>

      <div class="flex justify-between ">
        <div class="w-[50%]">
          <q-tabs
              v-model="tab"
              class=" text-blue-500 rounded-lg shadow-sm border-2 border-[#DDE3FB]"
              active-color="white"
              active-bg-color="primary"
              indicator-color="transparent"
              align="justify"
              dense
          >
            <q-tab name="dashboard" label="DASHBOARD" class="font-bold" />
            <q-tab name="homiylar" label="HOMIYLAR" class="font-bold border-x-2 border-[#DDE3FB]" />
            <q-tab name="talabalar" label="TALABALAR" class="font-bold " />
          </q-tabs>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="dashboard">
              <div class="q-pa-md">📊 Dashboard content</div>
            </q-tab-panel>

            <q-tab-panel name="homiylar">
              <div class="q-pa-md">🤝 Homiylar content</div>
            </q-tab-panel>

            <q-tab-panel name="talabalar">
              <div class="q-pa-md">🎓 Talabalar content</div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
        <div class="flex items-start gap-2">
          <q-input
              class="bg-[#E8E8E8]  rounded-md  w-[280px] text-lg" outlined dense placeholder="Izlash" no-error-icon v-model="search"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <my-btn  no-caps icon="filter_alt" name="Filter" btn-class="!bg-[#EDF1FD] !text-[#3365FC]"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import MyBtn from "@/components/myBtn.vue";

const tab = ref("dashboard")
const userName = ref("Shohrux")
const  search = ref("")
const logout = () => {
  console.log("Chiqish bosildi")
}
</script>

<style scoped>

</style>
