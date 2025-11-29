<script setup lang="ts">
defineProps<{ title: string }>()
</script>


<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-white p-10"
  >
    <div class="text-center text-[60px] font-bold text-black">
      {{ title }}
    </div>
    <div class="mt-5 text-[30px] text-gray-600">
      Generated with Nuxt ImageResponse and deployed to Vercel Edge
    </div>
  </div>
</template>
