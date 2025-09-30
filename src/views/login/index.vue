<template>
    <div class="flex justify-center items-center min-h-screen">
      <div class="w-[380px] flex flex-col gap-8 items-center">
        <q-img
            src="/images/logo.png"
            width="330px"
        />
        <div  class=" w-full flex flex-col gap-6 bg-white p-8  rounded-xl" >
          <span class="text-xl font-bold" >Kirish</span>
          <div>
            <small class=" font-bold bg-[#E0E7FF33] ">LOGIN</small>
            <q-input  placeholder="Login" class="bg-[#E0E7FF33] text-[#2E384D59]" outlined dense v-model="username"/>
          </div>
          <div>
            <small class="font-bold">PAROL</small>
            <q-input  placeholder="password" class="bg-[#E0E7FF33] text-[#2E384D59]"  type="password" outlined dense v-model="password"/>
          </div>
          <div class="g-recaptcha   flex  items-center justify-center" :data-sitekey="siteKey"></div>
          <my-btn @click="login" name="Kirish" />
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted,ref } from "vue"
import MyBtn from "@/components/myBtn.vue";
import {useAccountStore} from "@/store/login.ts";
import {useRouter} from "vue-router";

const router = useRouter();
const  accountStore = useAccountStore();

const  username = ref<string>("");
const password = ref<string>("");
const siteKey = "6Ldbw9krAAAAAFFxwe-oiTw6fsfPgX9h20yWlBgx"


const login = async () => {
  const res = await  accountStore.login(username.value, password.value);
  console.log(res)
  await router.push('/')
}


onMounted(() => {
  const script = document.createElement("script")
  script.src = "https://www.google.com/recaptcha/api.js"
  script.async = true
  script.defer = true
  document.head.appendChild(script)
})


</script>
