<template>
  <div role="job container" class="job_container flex flex-col items-start">
    <div class="job_header">
      <h3 role="job title " class="heading--lg text-primary">
        Front end Developper <span class="text-secondary">@Bigbang LDT</span>
      </h3>
      <h4 role="job period" class="note">Sept 2021 - Fev 2022</h4>
    </div>

    <div role="job description" class="flex flex-col job_description">
      <ul>
        <li>
          Consectetur officia amet duis reprehenderit deserunt. Excepteur commodo minim in
          laboris occaecat ex incididunt voluptate. Proident quis qui occaecat mollit
          minim velit do consequat.
        </li>

        <li>
          Voluptate aliquip sint incididunt quis dolore. Sunt laborum voluptate sint
          officia consequat quis ad. Excepteur pariatur Lorem laborum sint sit cupidatat
          cillum dolore. Commodo nisi dolor eu esse cillum ipsum nostrud laboris elit ea
          quis ex ad. Proident ipsum et magna officia dolor fugiat.
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.job_container {
  max-width: 700px;
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
