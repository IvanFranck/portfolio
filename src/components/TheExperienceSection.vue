<template>
  <section v-scroll-reveal role="experience section" class="experience">
    <h2 class="text-primary heading">Where I've Worked</h2>
    <ul role="tablist" class="tabList flex flex-row relative">
      <li role="tablink" class="link-2 isActive">
        <a href=""> Bigbang LDT </a>
      </li>
      <li role="tablink" class="link-2"><a href=""> Itnovation </a></li>
      <div role="tab hightlight" class="tabHightlight"></div>
    </ul>
    <AppJob />
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "/src/assets/scss/_mixin.scss";

li {
  @include link;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: var(--tab-width);
  height: var(--tab-height);

  &:hover,
  &:focus {
    background-color: var(--color-lightest-red);
  }
}
.isActive {
  color: var(--color-red);
}

.tabList {
  margin-bottom: 28px;
  list-style-type: none;
  border-bottom: 1px solid var(--color-light-blue);
  max-width: max-content;
}

.tabHightlight {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: var(--tab-width);
  background-color: var(--color-red);
}
</style>
