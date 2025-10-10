<script setup lang="ts">
defineOgImageComponent("Nuxt", {
  title: "Nuxt Commerce",
  description:
    "A high-performance, server-rendered E-commerce app built with Nuxt & Shopify",
  theme: "#4ADE80",
  headline: "",
  colorMode: "dark",
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
