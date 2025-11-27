<script setup lang="ts">
defineOgImageComponent("Nuxt", {
  title: "Nuxt Commerce on Edge Test",
  description:
    "A high-performance, server-rendered E-commerce app built with Nuxt & Shopify",
  theme: "#4ADE80",
  headline: "",
  colorMode: "dark",
});

const url = useRequestURL();
const origin = url.origin;

const num = Math.random();
</script>

<template>
  <div>
    <a
      href="https://www.opengraph.xyz/url/https%3A%2F%2Fnuxt-og-image.vercel.app%2F"
    >
      Open Graph Test
    </a>
    <br />
    <a :href="`/api/og?num=${num}`"> Show OG Image </a>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <img :src="`${origin}/__og-image__/image/og.png`" alt="OG Image" />
  </div>
</template>
