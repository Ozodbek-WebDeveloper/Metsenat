<template>
  <div class="space-y-4">
    <div v-for="n in 10" :key="n" class="grid grid-cols-12 bg-white gap-4  p-2 items-center  animate-pulse">
      <!-- Index -->
      <div class="h-5 w-6 col-span-1 bg-gray-200 rounded"></div>

      <!-- F.I.O -->
      <div class="h-5 w-full col-span-3  bg-gray-200 rounded"></div>

      <!-- Phone -->
      <div class="h-5 w-full col-span-2 bg-gray-200 rounded"></div>

      <!-- Summa -->
      <div class="h-5 w-full col-span-2  bg-gray-200 rounded"></div>

      <!-- Qarz -->
      <div class="h-5 w-full col-span-2 bg-gray-200 rounded"></div>

      <!-- Sana -->
      <div class="h-5 w-full col-span-1 bg-gray-200 rounded"></div>

      <!-- Ko‘rish tugmasi -->
      <div class="h-7 w-7 col-span-1  bg-gray-200  rounded-full"></div>
    </div>
  </div>
</template>
