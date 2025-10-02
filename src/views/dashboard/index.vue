<template>
  <Header @openFilter="showFilterDialog = true" @confirmLogout="userStore.logout" v-model="tab"/>
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
      <charts-tab/>
    </q-tab-panel>

    <q-tab-panel name="homiylar">
      <sponsor-tab  :totalPage="sponsorPaging"  :table="sponsorList?.results" />
      <div class="flex items-center justify-between">
        <div>
          <span>
          {{totalPages}} tadan {{sponsorPaging.page}} - {{sponsorPaging.page_size}} ko'ratilmoqda
          </span>
        </div>
        <div class="flex items-center justify-center gap-3" >
          <div class="flex items-center justify-center gap-2">
            <span>Ko'rsatish</span>
            <select v-model="sponsorPaging.page_size" class="custom-select">
              <option v-for="item in [5,10,15]" :value="item" >{{item}}</option>
            </select>
          </div>
          <div class="pagination">
            <button
                class="page-btn"
                :disabled="sponsorPaging.page === 1"
                @click="changePage(sponsorPaging.page - 1)">
              ‹
            </button>
            <button v-if="showFirst" class="page-btn" @click="changePage(1)">1</button>
            <span v-if="showLeftDots">...</span>
            <button
                v-for="page in pages"
                :key="page"
                class="page-btn"
                :class="{ active: page === sponsorPaging.page }"
                @click="changePage(page)"
            >
              {{ page }}
            </button>
            <span v-if="showRightDots">...</span>
            <button v-if="showLast" class="page-btn" @click="changePage(totalPages)">
              {{ totalPages }}
            </button>
            <button
                class="page-btn"
                :disabled="sponsorPaging.page === totalPages"
                @click="changePage(sponsorPaging?.page + 1)">
              ›
            </button>
          </div>
        </div>
      </div>
    </q-tab-panel>

    <q-tab-panel name="talabalar">
      <div class="q-pa-md">🎓 Talabalar content</div>
    </q-tab-panel>
  </q-tab-panels>
  <q-dialog   v-model="showFilterDialog" >
    <Filter/>
  </q-dialog>
</template>

<script setup lang="ts">
import {computed, onMounted, ref,watch} from "vue";
import Header from "@/components/header.vue";
import ChartsTab from "@/views/dashboard/components/chartsTab.vue";
import {useAccountStore} from "@/store/login.ts";
import SponsorTab from "@/views/dashboard/components/sponsorTab.vue";
import type {ISponsorPaging, SponsorListResponse} from "@/types.ts";
import {getSponsor} from "@/services/myApi.ts";
import Filter from "@/components/filter.vue";

const  userStore = useAccountStore();
const  tab = ref("dashboard");
const maxVisible = 2;
const  sponsorList = ref<SponsorListResponse | null>(null);
const  showFilterDialog = ref(false);
const sponsorPaging = ref<ISponsorPaging>({
  page:1,
  page_size:10,
  ordering:null,
  search:null,
});

const  loadSponsor = async () => {
  const res = await getSponsor(sponsorPaging.value);
  sponsorList.value = res?.data
  console.log(res);
}

const totalPages = computed(() => {
  return Math.ceil((sponsorList.value?.count || 0) / sponsorPaging.value.page_size)
})

const pages = computed(() => {
  let start = Math.max(1, sponsorPaging.value.page - maxVisible)
  let end = Math.min(totalPages.value, sponsorPaging.value.page + maxVisible)

  const result: number[] = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
})

const showFirst = computed(() => sponsorPaging.value.page > maxVisible + 1)
const showLast = computed(() => sponsorPaging.value.page < totalPages.value - maxVisible)
const showLeftDots = computed(() => sponsorPaging.value.page > maxVisible + 2)
const showRightDots = computed(() => sponsorPaging.value.page < totalPages.value - maxVisible - 1)

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    sponsorPaging.value.page = page
  }
}

watch(() => [sponsorPaging.value.page, sponsorPaging.value.page_size],
    () =>{
        loadSponsor()
      }
)

onMounted(() =>{
  loadSponsor()
})
</script>

<style>

.custom-select {
  padding: 5px 8px;
  border-radius: 5px;
  border: 2px solid #B1B1B8;
  font-size: 14px;
  transition: 0.3s ease;
}

.pagination {
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.page-btn {
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  transition: 0.2s;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-btn.active {
  background: #4f46e5;
  color: white;
  border-color: #4f46e5;
}
</style>