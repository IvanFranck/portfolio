<template>
  <div class="footer w-full flex flex-col justify-center items-center font-roboto">
    <p class="maintenance-message">[Updating website...]</p>
    <p>Copyright <span class="copyright">©</span> 2024 NZIMA Ivan</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  font-size: var(--fz-xs);
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .maintenance-message {
    padding-right: 8px;
    color: var(--color-red);
  }
  .copyright {
    font-size: var(--fz-md);
    margin: 0;
    padding: 0;
  }
}
</style>
