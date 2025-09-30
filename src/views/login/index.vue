<template>
    <div class="flex justify-center items-center min-h-screen">
      <div class="w-[380px] flex flex-col gap-4 items-center">
        <q-img
            src="/images/logo.png"
            width="330px"
        />
        <div  class=" w-full h-[456px] flex flex-col gap-2 bg-white p-8  rounded-xl" >
          <span class="text-xl font-bold" >Kirish</span>
          <div>
            <label>lOGIN</label>
            <q-input  outlined dense model-value=""/>
          </div>
          <div>
            <label>PAROL</label>
            <q-input type="password" outlined dense model-value=""/>
          </div>
          <my-btn  name="Kirish" />
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">

import MyBtn from "@/components/myBtn.vue";
</script>
