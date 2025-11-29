<script setup lang="ts">
const num = Math.random();
</script>

<template>
  <div>
    <a :href="`/api/og?num=${num}`"> Show OG Image </a>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
