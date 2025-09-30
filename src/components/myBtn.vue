<template>
<q-btn color="primary" :class="btnClass" class="bg-[#3366FF] w-full text-white " >
  {{name ?? 'buttun'}}
</q-btn>
</template>
<script setup lang="ts">
interface IProps{
  name:string,
  btnClass?:string
}
 defineProps<IProps>()
</script>
<style scoped>

</style>