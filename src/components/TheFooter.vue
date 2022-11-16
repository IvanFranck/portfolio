<template>
  <div class="footer w-full flex flex-col justify-center items-center font-roboto">
    <p>Copyright <span class="copyright">©</span> 2022 Nzima Ivan</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  font-size: var(--fz-xs);
  padding: 20px;

  .copyright {
    font-size: var(--fz-md);
    margin: 0;
    padding: 0;
  }
}
</style>
