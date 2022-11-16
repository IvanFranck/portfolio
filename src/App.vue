<template>
  <TheNavBar />
  <TheSocialNetworkLinks />
  <TheMailInfo />
  <div class="flex flex-col gap-y-12">
    <main @click.stop="handleClickWhenMobileNavIsOpen" class="min-h-screen">
      <TheHeroSection />
      <TheAboutSection />
      <TheExperienceSection />
      <TheWorkSection />
      <TheContactSection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";

const hamCliked = ref<boolean>(false);

const handleClickWhenMobileNavIsOpen = () => {
  if (document.body.classList.contains("blur-bg")) {
    document.body.classList.remove("blur-bg");
    hamCliked.value = !hamCliked.value;
  }
};

const handleHamClick = () => {
  hamCliked.value = !hamCliked.value;
  if (document.body.classList.contains("blur-bg"))
    document.body.classList.remove("blur-bg");
  else document.body.classList.add("blur-bg");
};

provide("hamCliked", hamCliked);
provide("handleHamClick", handleHamClick);
provide("handleClickWhenMobileNavIsOpen", handleClickWhenMobileNavIsOpen);
</script>

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

.content {
}
</style>
