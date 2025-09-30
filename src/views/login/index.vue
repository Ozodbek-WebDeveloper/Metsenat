<template>
    <div class="flex justify-center items-center min-h-screen">
      <div class="w-[380px] flex flex-col gap-8 items-center">
        <q-img
            src="/images/logo.png"
            width="330px"
        />
        <div  class=" w-full h-[456px] flex flex-col gap-6 bg-white p-8  rounded-xl" >
          <span class="text-xl font-bold" >Kirish</span>
          <div>
            <small class=" font-bold bg-[#E0E7FF33] ">LOGIN</small>
            <q-input  placeholder="Login" class="bg-[#E0E7FF33] text-[#2E384D59]" outlined dense model-value=""/>
          </div>
          <div>
            <small class="font-bold">PAROL</small>
            <q-input  placeholder="password" class="bg-[#E0E7FF33] text-[#2E384D59]"  type="password" outlined dense model-value="password"/>
          </div>
          <div class="g-recaptcha" :data-sitekey="siteKey"></div>
          <my-btn  name="Kirish" />
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">

import MyBtn from "@/components/myBtn.vue";
import { onMounted } from "vue"

const siteKey = " 6Ldbw9krAAAAAFFxwe-oiTw6fsfPgX9h20yWlBgx"  // Google’dan olganingizni yozing

onMounted(() => {
  // Google reCAPTCHA scriptini yuklash
  const script = document.createElement("script")
  script.src = "https://www.google.com/recaptcha/api.js"
  script.async = true
  script.defer = true
  document.head.appendChild(script)
})


</script>
