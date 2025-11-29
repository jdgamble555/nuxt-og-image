<script setup lang="ts">

const url = useRequestURL();
const origin = url.origin;

const num = Math.random();
</script>

<template>
  <div>
    <a :href="`/api/og?num=${num}`"> Show OG Image </a>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
