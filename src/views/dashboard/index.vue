<template>
  <Header @confirmLogout="userStore.logout" v-model="tab"/>
  <q-tab-panels class="bg-transparent w-[90%]  mx-auto" v-model="tab" animated>
    <q-tab-panel name="dashboard">
      <div class="grid grid-cols-3 mb-4 gap-5">
        <div class=" bg-white flex gap-4 rounded-lg p-6">
          <q-img src="../../../public/images/money_blue.png" height="48px" width="48px"/>
          <div>
            <small  class="text-xs !text-[#7A7A9D]">
              Jami to‘langan summa
            </small>
            <p class="text-xl font-bold">
              1 684 325 000 <span class="text-[#B2B7C1]">UZS</span>
            </p>
          </div>
        </div>
<!--        -->
        <div class=" bg-white flex gap-4 rounded-lg p-6">
          <q-img src="../../../public/images/money_gold.png" height="48px" width="48px"/>
          <div>
            <small class="text-xs !text-[#7A7A9D]" >
              Jami so‘ralgan summa
            </small>
            <p class="text-xl font-bold">
              14 098 530 000 <span class="text-[#B2B7C1]">UZS</span>
            </p>
          </div>
        </div>
<!--        -->
        <div class=" bg-white flex gap-4 rounded-lg p-6">
          <q-img src="../../../public/images/money_crismon.png" height="48px" width="48px"/>
          <div>
            <small  class="text-xs !text-[#7A7A9D]">
              To‘lanishi kerak summa
            </small>
            <p class="text-xl font-bold">
              12 414 205 000 <span class="text-[#B2B7C1]">UZS</span>
            </p>
          </div>
        </div>
      </div>
      <charts-tab></charts-tab>
    </q-tab-panel>

    <q-tab-panel name="homiylar">
      <div class="q-pa-md">🤝 Homiylar content</div>
    </q-tab-panel>

    <q-tab-panel name="talabalar">
      <div class="q-pa-md">🎓 Talabalar content</div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup lang="ts">
import Header from "@/components/header.vue";
import {ref} from "vue";
import ChartsTab from "@/views/dashboard/components/chartsTab.vue";
import {useAccountStore} from "@/store/login.ts";

const  userStore = useAccountStore();
const  tab = ref("dashboard");
</script>
