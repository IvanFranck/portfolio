<template>
  <header class="w-full">
    <div
      :id="style"
      class="lg:px-12 fixed md:px-8 w-full flex justify-between items-center"
    >
      <div class="logo">
        <h1 class="logo-text">Nzima Ivan</h1>
      </div>

      <div role="navigation" class="nav font-roboto">
        <ul class="flex">
          <li class="cursor-pointer nav-link">
            <a class="mx-4 cursor-pointer">About</a>
          </li>
          <li class="cursor-pointer nav-link">
            <a class="mx-4 cursor-pointer">Experience</a>
          </li>
          <li class="cursor-pointer nav-link">
            <a class="mx-4 cursor-pointer">Works</a>
          </li>
          <li class="cursor-pointer nav-link">
            <a class="mx-4 cursor-pointer">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from "vue";
import useScrollDirection from "../composables/useScrollDirection";

const scrollDirection = ref(useScrollDirection("down"));
const style = ref();
const scrolledToTop = ref<boolean>(true);
// const scrollStyle = reactive({ style });

const handleScroll = () => {
  scrolledToTop.value = window.pageYOffset < 50;
};

watchEffect(() => {
  console.log("scrolledToTop.value: ", scrolledToTop.value);
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});

watch([scrollDirection, scrolledToTop], () => {
  // console.log("scrollDirection: ", scrollDirection);
  // console.log("scroll to top: ", scrolledToTop.value);

  if (scrolledToTop.value) {
    style.value = " ";
  } else {
    if (scrollDirection.value === "up") {
      style.value = "scrollUp";
    } else if (scrollDirection.value === "down") {
      style.value = "scrollDown";
    }
  }

  // console.log("scrollStyle: ", scrollStyle);
});
</script>

<style scoped>
#scrollUp {
  transform: translateY(0px);
  background-color: var(--color-blue);
  box-shadow: 0 10px 30px -10px var(--blue-shadow);
  color: var(--bg);
}

#scrollDown {
  transform: translateY(-100px);
  box-shadow: 0 20px 30px -10px var(--blue-shadow);
}

header > div {
  transition: var(--transition-default);
  height: var(--nav-height);
  top: 0px;
  z-index: 100;
}
@media (max-width: 768px) {
  header > div {
    height: var(--nav-height-sm);
    padding: var(--padding-xs);
  }

  .nav {
    display: none;
  }
}
</style>
