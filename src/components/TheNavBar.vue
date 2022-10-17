<template>
  <header class="w-full flex justify-between items-center h-32 lg:px-12 md:px-8 fixed">
    <div class="logo">
      <h1 class="logo-text">Nzima Ivan</h1>
    </div>

    <div role="navigation" class="nav font-roboto">
      <ul class="flex">
        <li class="cursor-pointer nav-link"><a class="mx-4 cursor-pointer">About</a></li>
        <li class="cursor-pointer nav-link">
          <a class="mx-4 cursor-pointer">Experience</a>
        </li>
        <li class="cursor-pointer nav-link"><a class="mx-4 cursor-pointer">Works</a></li>
        <li class="cursor-pointer nav-link">
          <a class="mx-4 cursor-pointer">Contact</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
@media (max-width: 768px) {
  header {
    padding: var(--padding-xs);
  }

  .nav {
    display: none;
  }
}
</style>
