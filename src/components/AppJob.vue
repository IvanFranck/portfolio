<template>
  <div role="job container" class="job_container flex flex-col items-start">
    <div class="job_header">
      <h3 role="job title " class="heading--lg text-primary">
        {{ jobTitle }}
      </h3>
      <h4 role="job period" class="note">{{ duration }}</h4>
    </div>

    <div role="job description" class="flex flex-col job_description">
      <ul>
        <li v-for="(task, index) in description" :key="index">{{ task }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropsTypes {
  id: number;
  jobTitle: string;
  enterprise: string;
  duration: string;
  description: string[];
}
defineProps<PropsTypes>();
</script>

<style scoped lang="scss">
.job_container {
  max-width: 700px;
  transition: var(--transition-default);

  .job_header {
    margin-bottom: 25px;
  }

  .job_description {
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;

      li {
        font-size: var(--fz-md);
        position: relative;
        margin-bottom: 10px;
        padding-left: 20px;
        position: relative;
        &::before {
          content: "▹";
          position: absolute;
          left: 0px;
          color: var(--color-red);
          font-size: var(--fz-xxl);
          line-height: 20px;
        }
      }
    }
  }
}
</style>
