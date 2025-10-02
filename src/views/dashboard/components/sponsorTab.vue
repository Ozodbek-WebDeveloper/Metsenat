<template>
  <table-skeleton v-if="isLoading"/>
  <table v-else class="border-separate border-spacing-y-3 w-full" >
    <thead >
      <tr class="uppercase text-[#B1B1B8] !text-xs  tracking-widest">
        <th  class="!text-left">
          №
        </th>
        <th>
          f.i.sh.
        </th>
        <th>
          Tel.Raqami
        </th>
        <th>
          Homiylik summasi
        </th>
        <th>
          Sarflangan summa
        </th>
        <th>
          Sana
        </th>
        <th>
          Holati
        </th>
        <th>
          Amallar
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white  text-center"  v-for="(item,idx) in table" :key="idx">
        <td class="py-4 px-2 rounded-l-lg font-bold">
          {{ (totalPage.page - 1) * totalPage.page_size + (idx + 1) }}
        </td>
        <td class="font-bold text-left">
          {{item.full_name}}
        </td>
        <td>
          {{item.phone}}
        </td>
        <td class="font-bold">
          <span>
            {{item.sum}} <span class="text-[#B1B1B8]">UZS</span>
          </span>
        </td>
        <td class=font-bold>
          {{item.spent}} <span class="text-[#B1B1B8]">UZS</span>
        </td>
        <td>
          {{formatDate(item.created_at)}}
        </td>
        <td>
        <span >
            {{item.get_status_display}}
        </span>
        </td>
        <td class="text-center align-middle rounded-r-lg">
          <img alt="view" src="../../../../public/images/eye 1.png" class="mx-auto cursor-pointer"  height="24" width="24"/>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import type {Sponsor} from "@/types.ts";
import TableSkeleton from "@/views/dashboard/skeleton/tableSkeleton.vue";

defineProps<{
  table?: Sponsor[],
  totalPage?:{
    page:number | null
    page_size:number | null
  },
  isLoading?:boolean
}>()
const formatDate = (dateStr: string): string =>{
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 0-based
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}


</script>

<style>
.myTr{
  padding: 10px !important;
}
</style>