<template>
  <section
    v-scroll-reveal
    role="experience section"
    id="experience_section"
    class="experience"
  >
    <h2 class="text-primary heading">Where I've Worked</h2>
    <ul role="tablist" class="tabList flex flex-row relative">
      <li
        v-for="job in Data"
        @click.stop="activeJob = job.id"
        :key="job.id"
        role="tablink"
        :class="{ 'link-2': true, isActive: activeJob === job.id }"
      >
        {{ job.enterprise }}
      </li>
      <div role="tab hightlight" class="tabHightlight"></div>
    </ul>
    <AppJob
      v-for="job in Data"
      :key="job.id"
      :id="job.id"
      :jobTitle="job.jobTitle"
      :enterprise="job.enterprise"
      :duration="job.duration"
      :description="job.description"
      :class="{ hidden: activeJob !== job.id }"
    />
  </section>
</template>

<script setup lang="ts">
import Data from "@/data/jobs.json";

const activeJob = ref<number>(0);
</script>

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
  background-color: var(--color-lightest-red);
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
  transform: translateX(calc(v-bind(activeJob) * var(--tab-width)));
  transition: var(--transition-default);
}
</style>
