<template>
  <section v-scroll-reveal role="works section">
    <h2 class="text-primary heading">Some Projects I Worked On</h2>
    <div class="project-container">
      <AppWork class="work" />
      <AppWork class="work" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.work:not(:last-of-type) {
  margin-bottom: 100px;
}
</style>
