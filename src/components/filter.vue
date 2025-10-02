<template>
    <div class="bg-white w-[420px]  shadow-lg p-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-xl font-bold">Filter</span>
        <q-icon v-close-popup class="cursor-pointer hover:text-red-600" size="30px" name="close" />
      </div>

      <hr class="mb-4 opacity-20"/>

      <!-- Ariza holati -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2 text-gray-600">ARIZA HOLATI</label>
        <select v-model="filters.status"
                class="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring focus:ring-indigo-200">
          <option value="all">Barchasi</option>
          <option value="new">Yangi</option>
          <option value="accepted">Qabul qilingan</option>
          <option value="rejected">Rad etilgan</option>
        </select>
      </div>

      <!-- Homiylik summasi -->
      <div class="mb-4">
        <label class="block text-sm font-semibold mb-2 text-gray-600">HOMIYLIK SUMMASI</label>
        <div class="grid grid-cols-3 gap-2">
          <button
              v-for="(item, i) in amounts"
              :key="i"
              @click="filters.amount = item"
              class="border rounded-lg py-2 text-sm font-medium hover:bg-indigo-50"
              :class="filters.amount === item ? 'border-indigo-500 text-indigo-600 bg-indigo-50' : 'border-gray-300 text-gray-600'">
            {{ item }}
          </button>
        </div>
      </div>

      <!-- Sana -->
      <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-gray-600">SANA</label>
        <input
            type="text"
            placeholder="kk.oo.yyyy - kk.oo.yyyy"
            v-model="filters.date"
            class="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring focus:ring-indigo-200"
        />
      </div>

      <!-- Footer buttons -->
      <div class="flex justify-between gap-4">
        <button
            @click="clearFilter"
            class="flex-1 border rounded-lg py-2 text-gray-500 hover:bg-gray-100">
          Tozalash
        </button>
        <button
            @click="applyFilter"
            class="flex-1 bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 flex items-center justify-center gap-2">
<!--          <img alt="view" src="../../public/images/eye 1.png" class="mx-auto cursor-pointer"  height="24" width="24"/>-->
          Natijalarni ko‘rish
        </button>
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const filters = ref({
  status: "all",
  amount: "Barchasi",
  date: "",
});

const amounts = [
  "Barchasi",
  "1 000 000 UZS",
  "5 000 000 UZS",
  "7 000 000 UZS",
  "10 000 000 UZS",
  "30 000 000 UZS",
  "50 000 000 UZS",
];

const clearFilter = () => {
  filters.value = { status: "all", amount: "Barchasi", date: "" };
};

const applyFilter = () => {
  console.log("Applied filters:", filters.value);
};
</script>
