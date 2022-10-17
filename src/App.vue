<script setup lang="ts"></script>

<template>
  <TheNavBar />
  <!-- <TheSocialNetworkLinks />
  <TheMailInfo /> -->
  <main class="min-h-screen">
    <TheHeroSection />
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: var(--padding-xl);
}

@media (max-width: 1080px) {
  main {
    padding: var(--padding-lg);
  }
}

@media (max-width: 768px) {
  main {
    padding: var(--padding-sm);
  }
}

@media (max-width: 480px) {
  main {
    padding: var(--padding-xs);
  }
}
</style>
