<template>
  <div  class="bg-white  flex flex-col ">
    <div class="w-[90%] flex flex-col  mx-auto py-2">
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
      <div class="flex justify-between items-center ">
        <div class="w-[50%]">
          <q-tabs
              :model-value="modelValue"
              class=" text-blue-500 rounded-lg shadow-sm border-2 border-[#DDE3FB]"
              active-color="white"
              active-bg-color="primary"
              indicator-color="transparent"
              align="justify"
              dense
              @update:model-value="emit('update:modelValue', $event)"
          >
            <q-tab name="dashboard" label="DASHBOARD" class="font-bold" />
            <q-tab name="homiylar" label="HOMIYLAR" class="font-bold border-x-2 border-[#DDE3FB]" />
            <q-tab name="talabalar" label="TALABALAR" class="font-bold " />
          </q-tabs>
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
  <q-dialog v-model="showLogoutDialog" persistent>
    <div class="bg-white p-4">
      <div class="flex items-center justify-between gap-10" >
        <span class="text-lg font-bold">Siz hisobingizdan chiqmochimisiz?</span>
        <q-icon v-close-popup class="cursor-pointer hover:text-red-600" size="30px" name="close" />
      </div>
      <div class="flex w-full justify-end mt-6">
          <my-btn @click="confirmLogout" btn-class=" !w-full " name="chiqish" />
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue"
import MyBtn from "@/components/myBtn.vue";

defineProps<{
  modelValue: string
}>();

const showLogoutDialog = ref(false);
const emit = defineEmits(["update:modelValue","confirmLogout"]);
const userName = ref("Shohrux")
const  search = ref("")
const logout = () => {
  showLogoutDialog.value = true
}
const confirmLogout = () => {
  emit("confirmLogout")
  showLogoutDialog.value = false
}
</script>

<style scoped>

</style>
